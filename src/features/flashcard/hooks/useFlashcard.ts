/**
 * Node Modules
 */
import { useContext, useEffect, useState } from "react";

/**
 * Custom Modules
 */
import { getFlashcard } from "@/mocks";

/**
 * Types
 */
import type { IFlashcard } from "@/types";

export function useFlashcard(slug: string) {
  const [data, setData] = useState<IFlashcard>();

  useEffect(() => {
    const getData = async () => {
      const res = await getFlashcard(slug);
      if (res.success) setData(res.data);
    };

    getData();
  }, []);

  return { data };
}
