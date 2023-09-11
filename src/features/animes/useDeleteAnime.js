import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteSingleAnime } from "../../services/apiAnime";

export const useDeleteAnime = () => {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteAnime } = useMutation({
    mutationFn: deleteSingleAnime,
    onSuccess: () => {
      toast.success("Anime Deleted Successfully");
      queryClient.invalidateQueries({
        queryKey: ["animes"],
      });
    },
    onError: (err) => {
      toast.error("Something Went Wrong");
    },
  });

  return { isDeleting, deleteAnime };
};
