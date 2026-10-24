import type { ApiResult } from "../types/Show";

export const searchShows = async (query: string): Promise<ApiResult[]> => {
  const response = await fetch(
    `https://api.tvmaze.com/search/shows?q=${query}`
  );

  if (!response.ok) {
    throw new Error("Error fetching shows");
  }

  return response.json();
};