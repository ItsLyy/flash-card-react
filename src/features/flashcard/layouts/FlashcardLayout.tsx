/**
 * Node Modules
 */
import { Link, Outlet } from "react-router";

/**
 * Custom Modules
 */
import { FlashcardAction, ProgressBar } from "../components";
import FlashcardProvider from "../contexts";

export default function FlashcardLayout() {
  return (
    <FlashcardProvider>
      <div className="mx-auto flex h-svh w-full max-w-[1000px] flex-col justify-center gap-1 p-4">
        <header className="flex h-full gap-2">
          <Link
            to="/"
            className="flex h-13 shrink-0 items-center justify-center rounded-sm bg-violet-500 px-4 py-3 text-sm text-violet-100"
          >
            Go Home
          </Link>
          <ProgressBar />
        </header>
        <div className="rounded-md border-2 border-violet-400 bg-violet-100 p-1">
          <main className="flex aspect-video w-full items-center justify-center rounded-sm bg-violet-400 p-8 text-violet-50">
            <Outlet />
          </main>
        </div>
        <footer className="flex h-full items-end justify-between">
          <FlashcardAction />
        </footer>
      </div>
    </FlashcardProvider>
  );
}
