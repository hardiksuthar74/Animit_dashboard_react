import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateAnimeMethod } from "../../services/apiAnime";

export const useUpdateAnime = () => {
  const queryClient = useQueryClient();

  const { mutate: updateAnime, isLoading: isUpdating } = useMutation({
    mutationFn: updateAnimeMethod,
    onSuccess: () => {
      toast.success("Anime Updated Successfully");
      queryClient.invalidateQueries({
        queryKey: ["animes"],
      });
    },
    onError: (err) => {
      toast.error("Something Went Wrong");
    },
  });

  return { updateAnime, isUpdating };
};
