import Box from "@/components/Box";
import { Button } from "@/components/Button";
import Dialog from "@/components/Dialog";
import TodoFields from "./TodoFields";
import { Form } from "@/components/Form";
import { useForm } from "react-hook-form";
import { useTodos } from "@/hooks/useTodos";
import { useTodo } from "@/hooks/useTodo";

export default function MutateTodoDialog({ id, isOpen = false, onClose }) {
  const { todo, loading } = useTodo(id);
  const { updateTodo, deleteTodo } = useTodos();

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    values: {
      description: todo?.description,
      priority: todo?.priority,
    },
  });

  const onSubmit = async (values) => {
    await updateTodo(id, values);
    onClose();
    reset();
  };

  const onDelete = async () => {
    await deleteTodo(id);
    onClose();
    reset();
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose} className="p-5">
      <Box className="mb-7 font-semibold text-lg">Update todo</Box>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TodoFields
          loading={loading}
          control={control}
          register={register}
          errors={errors}
        />
        <Box className="flex items-center justify-between mt-10">
          <Button
            variant="none"
            className="text-red-600 bg-red-50 hover:bg-red-50/75"
            onClick={onDelete}
          >
            Delete
          </Button>
          <Box className="flex items-center justify-end">
            <Button variant="btn-lightGray" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="ml-2" diabled={isSubmitting}>
              Submit
            </Button>
          </Box>
        </Box>
      </Form>
    </Dialog>
  );
}
