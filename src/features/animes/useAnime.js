import { useQuery } from "@tanstack/react-query";
import { fetchAllAnimeMethod } from "../../services/apiAnime";

export const useAnime = () => {
  const {
    isLoading,
    data: animes,
    error,
  } = useQuery({
    queryKey: ["animes"],
    queryFn: fetchAllAnimeMethod,
  });
  return { isLoading, animes };
};
