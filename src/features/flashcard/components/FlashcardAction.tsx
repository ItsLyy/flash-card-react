import { Link } from "react-router";
import { useFlashcardContext } from "../contexts/flashcard";

const FlashcardAction = () => {
  const {
    currentPage,
    flashcard,
    status,
    startingFlashcardEvent,
    setIsShowAnswer,
    endFlashcardEvent,
  } = useFlashcardContext();

  const totalQuestions = flashcard?.totalQuestions || 0;
  const previousQuestionNumber = currentPage - 1;
  const nextQuestionNumber = currentPage + 1;
  return (
    <>
      <div className="flex flex-1">
        <Link
          to={{ search: `question=${previousQuestionNumber}` }}
          className={`flex h-11 cursor-pointer items-center justify-center gap-2 rounded-sm bg-violet-200 py-2 pr-5 pl-4 text-violet-500 ${previousQuestionNumber <= 0 && "pointer-events-none opacity-60"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-6"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none" />
            <polyline
              points="160 208 80 128 160 48"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
          </svg>
          <span>Previous</span>
        </Link>
      </div>
      {status === "ongoing" && (
        <div className="flex flex-1 justify-center">
          <button
            className="flex h-11 cursor-pointer items-center px-4 py-2 duration-300 ease-in-out hover:text-violet-400 hover:underline"
            onClick={() => {
              setIsShowAnswer((prev) => !prev);
            }}
          >
            Show the Answer
          </button>
        </div>
      )}
      <div className="flex flex-1 justify-end">
        {status === "starting" ? (
          <button
            onClick={startingFlashcardEvent}
            className={`flex h-11 cursor-pointer items-center justify-center gap-2 rounded-sm bg-violet-200 py-2 pr-4 pl-5 text-violet-500`}
          >
            <span>Start</span>
            <svg
              className="size-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none" />
              <polyline
                points="96 48 176 128 96 208"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
            </svg>
          </button>
        ) : status === "ongoing" && currentPage === totalQuestions ? (
          <button
            onClick={endFlashcardEvent}
            className={`flex h-11 cursor-pointer items-center justify-center gap-2 rounded-sm bg-violet-500 py-2 pr-4 pl-5 text-violet-200`}
          >
            <span>Finish</span>
            <svg
              className="size-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none" />
              <polyline
                points="96 48 176 128 96 208"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
            </svg>
          </button>
        ) : (
          <Link
            to={{ search: `question=${nextQuestionNumber}` }}
            className={`flex h-11 cursor-pointer items-center justify-center gap-2 rounded-sm bg-violet-200 py-2 pr-4 pl-5 text-violet-500 ${nextQuestionNumber > totalQuestions && "pointer-events-none opacity-60"}`}
          >
            <span>Next</span>
            <svg
              className="size-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none" />
              <polyline
                points="96 48 176 128 96 208"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
            </svg>
          </Link>
        )}
      </div>
    </>
  );
};

export default FlashcardAction;
