import styled from "styled-components";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addAnimeMethod, updateAnimeMethod } from "../../services/apiAnime";
import { toast } from "react-hot-toast";
import FormRow from "../../ui/FormRow";

const CreateAnimeForm = ({ animeToEdit = {} }) => {
  const { id: editId, ...editValues } = animeToEdit;

  const isEditSession = Boolean(editId);

  const queryClient = useQueryClient();

  const { mutate, isLoading: isAdding } = useMutation({
    mutationFn: isEditSession ? updateAnimeMethod : addAnimeMethod,
    onSuccess: () => {
      toast.success("Anime Added Successfully");
      queryClient.invalidateQueries({
        queryKey: ["animes"],
      });

      reset();
    },
    onError: (err) => {
      toast.error("Something Went Wrong");
    },
  });

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { errors } = formState;

  const onSubmit = (data) => {
    try {
      let dataToSend = { ...data, id: editId };
      if (data.image !== animeToEdit.image) {
        dataToSend = { ...dataToSend, image: data.image[0] };
      }
      console.log(dataToSend);
      mutate(dataToSend);
    } catch (err) {}
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="title" error={errors?.title?.message}>
        <Input
          type="text"
          id="title"
          disabled={isAdding}
          {...register("title", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="episodes" error={errors?.episodes?.message}>
        <Input
          type="number"
          id="episodes"
          disabled={isAdding}
          {...register("episodes", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="score" error={errors?.score?.message}>
        <Input
          type="number"
          id="score"
          disabled={isAdding}
          {...register("score", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="season" error={errors?.season?.message}>
        <Input
          type="text"
          id="season"
          disabled={isAdding}
          {...register("season", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="synopsis" error={errors?.synopsis?.message}>
        <Textarea
          type="text"
          id="synopsis"
          disabled={isAdding}
          {...register("synopsis", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="status" error={errors?.status?.message}>
        <Input
          type="text"
          id="status"
          disabled={isAdding}
          {...register("status", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="type" error={errors?.type?.message}>
        <Input
          type="text"
          id="type"
          disabled={isAdding}
          {...register("type", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="year" error={errors?.year?.message}>
        <Input
          type="number"
          id="year"
          disabled={isAdding}
          {...register("year", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="image" error={errors?.image?.message}>
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isAdding}>
          {isEditSession ? "Update Anime" : "Add Anime"}
        </Button>
      </FormRow>
    </Form>
  );
};

export default CreateAnimeForm;
