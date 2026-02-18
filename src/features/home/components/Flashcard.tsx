/**
 * Node Modules
 */
import { Suspense } from "react";

/**
 * Custom Modules
 */
import FlashcardItem from "./FlashcardItem";
import FlashcardSkeleton from "./FlashcardSkeleton";
import { useFlashcards } from "../hooks";

function Flashcard() {
  const { data } = useFlashcards();
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <Suspense fallback={<FlashcardSkeleton />}>
        {data.map((flashcard) => (
          <FlashcardItem key={flashcard.slug} {...flashcard} />
        ))}
      </Suspense>
    </div>
  );
}

export default Flashcard;
