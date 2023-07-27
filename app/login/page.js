"use client";
import { Button } from "@/components/Button";
import { Form } from "@/components/Form";
import TextInput from "@/components/TextInput";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import signin from "@/firebase/auth/signin";
import { useMessage } from "@/hooks/useMessage";
import { Alert } from "@/components/Alert";

export default function Page() {
  const { message, set, clear } = useMessage();
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    const { error } = await signin(email, password);

    if (error) {
      set(error.message);
    } else {
      return push("/dashboard");
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          id="email"
          label="Email"
          type="email"
          {...register("email", {
            required: true,
          })}
          invalid={!!errors.email}
          className="mb-5"
        />
        <TextInput
          id="password"
          type="password"
          label="Password"
          {...register("password", {
            required: true,
          })}
          invalid={!!errors.password}
          className="mb-5"
        />
        <Button type="submit">Login</Button>
      </Form>
      {message && (
        <Alert variant="error" onClick={clear} className="mt-5">
          {message}
        </Alert>
      )}
    </>
  );
}
