import { useFlashcardContext } from "../contexts/flashcard";

const ProgressBar = () => {
  const { currentPage, flashcard } = useFlashcardContext();
  const totalQuestions = flashcard?.totalQuestions || 0;

  const progress = currentPage / totalQuestions;
  return (
    <div
      className={`relative flex h-13 w-full items-center gap-4 overflow-hidden rounded-md border-2 border-violet-400 bg-violet-100 p-1`}
    >
      <div className="flex h-full w-full items-center gap-2">
        <div
          className="h-full w-full origin-left rounded-sm bg-violet-400 transition-discrete duration-300 ease-in-out"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <span className="absolute right-0 mx-6 text-sm text-violet-400 shadow-violet-100">
        {currentPage} of {totalQuestions}
      </span>
    </div>
  );
};

export default ProgressBar;
