import { useState } from "react";
import { searchShows } from "../services/showService";
import type { ApiResult } from "../types/Show";

export const useShows = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<ApiResult[]>([]);
  const [loading, setLoading] = useState(false);

  const search = async () => {
    if (!query.trim()) return;

    setLoading(true);
    try {
      const data = await searchShows(query);
      setResults(data);
    } catch (error) {
      console.error(error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return {
    query,
    setQuery,
    results,
    search,
    loading,
  };
};