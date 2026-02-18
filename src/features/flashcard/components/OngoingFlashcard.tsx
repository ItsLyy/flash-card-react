import { useFlashcardContext } from "../contexts/flashcard";

const OngoingFlashcard = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const { isShowAnswer } = useFlashcardContext();
  return (
    <div className="space-y-4">
      {isShowAnswer ? (
        <p className="text-violet-50">{answer}</p>
      ) : (
        <h2 className="text-2xl">{question}</h2>
      )}
    </div>
  );
};

export default OngoingFlashcard;
