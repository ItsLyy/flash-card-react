import type { IQuestion } from "@/types";

export function useQuestion({
  questions,
  currentPage,
}: {
  questions: IQuestion[];
  currentPage: number;
}) {
  return { question: questions[currentPage - 1] };
}
