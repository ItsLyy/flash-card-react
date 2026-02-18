/**
 * Node Modules
 */
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

/**
 * Types
 */
import type { TStatus } from "../types";

export function useStatus() {
  const [status, setStatus] = useState<TStatus>("starting");
  const [_, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (status === "starting") setSearchParams("");
  }, [status]);

  const startingFlashcardEvent = () => {
    setStatus("ongoing");
    setSearchParams("question=1");
  };

  const endFlashcardEvent = () => {
    setStatus("starting");
    setSearchParams("");
  };

  return { status, startingFlashcardEvent, endFlashcardEvent };
}
