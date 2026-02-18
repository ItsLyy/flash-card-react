import type { IQuestion } from "./question.types";

export interface IFlashcard {
  id: string;
  name: string;
  slug: string;
  description: string;
  questions: IQuestion[];
}
