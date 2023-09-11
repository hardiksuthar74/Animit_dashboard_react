import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addAnimeMethod } from "../../services/apiAnime";

export const useAddAnime = () => {
  const queryClient = useQueryClient();

  const { mutate: addAnime, isLoading: isAdding } = useMutation({
    mutationFn: addAnimeMethod,
    onSuccess: () => {
      toast.success("Anime Added Successfully");
      queryClient.invalidateQueries({
        queryKey: ["animes"],
      });
    },
    onError: (err) => {
      toast.error("Something Went Wrong");
    },
  });

  return { addAnime, isAdding };
};
