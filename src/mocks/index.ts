/**
 * Data
 */
import type { IFlashcard } from "../types";
import flashcards from "./flashcard.json";

export const mockFlashcards: IFlashcard[] = flashcards as IFlashcard[];

export async function getAllFlashcards() {
  return {
    success: true,
    data: mockFlashcards.map((flashcard) => ({
      name: flashcard.name,
      description: flashcard.description,
      slug: flashcard.slug,
    })),
  };
}

export async function getFlashcard(slug: string) {
  const flashcard = mockFlashcards.find((flashcard) => flashcard.slug === slug);
  if (!flashcard)
    return {
      success: false,
    };

  return {
    success: true,
    data: flashcard,
  };
}
