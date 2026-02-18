/**
 * Node Modules
 */
import { Link } from "react-router";

/**
 * Types
 */
import type { IFlashcard } from "@/types";
type TFlashcardItemProps = Pick<IFlashcard, "name" | "description" | "slug">;

function FlashcardItem({ name, description, slug }: TFlashcardItemProps) {
  return (
    <Link to={`/flashcards/${slug}`} className="group relative">
      <div className="flex aspect-9/16 w-full items-center justify-center rounded-md border border-violet-400 bg-violet-300 p-6 text-violet-500 transition-discrete duration-300 ease-in-out group-hover:rotate-y-180">
        <h2 className="text-center text-2xl font-light uppercase">{name}</h2>
      </div>
      <div className="absolute top-0 right-0 bottom-0 left-0 -z-10 flex aspect-9/16 w-full rotate-y-180 items-center justify-center rounded-md border border-violet-400 bg-violet-300 p-6 text-violet-500 transition-discrete duration-300 ease-in-out group-hover:z-10 group-hover:rotate-y-0">
        <p className="text-center font-light uppercase">"{description}"</p>
      </div>
    </Link>
  );
}

export default FlashcardItem;
