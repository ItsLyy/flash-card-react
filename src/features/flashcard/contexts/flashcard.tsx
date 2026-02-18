/**
 * Node Modules
 */
import { createContext, useContext, useMemo, useState } from "react";
import { Navigate, useParams, useSearchParams } from "react-router";

/**
 * Custom Modules
 */
import { useFlashcard, useQuestion, useStatus } from "../hooks";

/**
 * Types
 */
import type { Dispatch, ReactNode, SetStateAction } from "react";
import type { TStatus } from "../types";
import type { IFlashcard, IQuestion } from "@/types";
interface IFlashcardData extends Pick<IFlashcard, "name" | "description"> {
  totalQuestions: number;
}

interface IContextValue {
  status: TStatus;
  currentPage: number;
  flashcard?: IFlashcardData;
  question: IQuestion;
  isShowAnswer: boolean;
  setIsShowAnswer: Dispatch<SetStateAction<boolean>>;
  startingFlashcardEvent: () => void;
  endFlashcardEvent: () => void;
}

export const FlashcardContext = createContext<null | IContextValue>(null);
export function useFlashcardContext() {
  const context = useContext(FlashcardContext);
  if (!context)
    throw new Error("useFlashcardContext need to be called in provider!");

  return context;
}

export default function FlashcardProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("question") || "0");

  if (!slug) return <Navigate to="/" />;

  const { data } = useFlashcard(slug);
  const { status, startingFlashcardEvent, endFlashcardEvent } = useStatus();
  const [isShowAnswer, setIsShowAnswer] = useState(false);
  const { question } = useQuestion({
    questions: data?.questions || [],
    currentPage,
  });

  console.log(question);

  const flashcard = data && {
    name: data.name,
    description: data.description,
    totalQuestions: data.questions.length,
  };

  const contextValue = useMemo(
    () => ({
      status,
      currentPage,
      flashcard,
      question,
      isShowAnswer,
      setIsShowAnswer,
      startingFlashcardEvent,
      endFlashcardEvent,
    }),
    [status, currentPage, flashcard, question, isShowAnswer],
  );

  return (
    <FlashcardContext.Provider value={contextValue}>
      {children}
    </FlashcardContext.Provider>
  );
}
