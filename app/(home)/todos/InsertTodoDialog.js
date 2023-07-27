import Box from "@/components/Box";
import { Button } from "@/components/Button";
import Dialog from "@/components/Dialog";
import TodoFields from "./TodoFields";
import { Form } from "@/components/Form";
import { useForm } from "react-hook-form";
import { useTodos } from "@/hooks/useTodos";

export default function InsertTodoDialog({ isOpen = false, onClose }) {
  const { createTodo } = useTodos();

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (values) => {
    await createTodo(values);
    onClose();
    reset();
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose} className="p-5">
      <Box className="mb-7 font-semibold text-lg">Create todo</Box>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TodoFields control={control} register={register} errors={errors} />
        <Box className="flex items-center justify-end mt-10">
          <Button variant="btn-lightGray" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" className="ml-2" disabled={isSubmitting}>
            Submit
          </Button>
        </Box>
      </Form>
    </Dialog>
  );
}
