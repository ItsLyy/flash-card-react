/**
 * Node Modules
 */
import { useEffect, useState } from "react";

/**
 * Custom Modules
 */
import { getAllFlashcards } from "@/mocks";

/**
 * Types
 */
import type { IFlashcard } from "types";

type TGetData = Pick<IFlashcard, "name" | "slug" | "description">;

export function useFlashcards() {
  const [data, setData] = useState<TGetData[]>([]);

  useEffect(() => {
    const getAllData = async () => {
      const res = await getAllFlashcards();
      if (!res.success) {
        setData(res.data);
      }
      setData(res.data);
    };

    getAllData();
  }, []);

  return { data };
}
