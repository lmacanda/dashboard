import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  username: z.string().min(1),
});

export const Login = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <>
      <h1>Login To Your Account</h1>

      <button>Google</button>
      <h3>- OR -</h3>

      <form onSubmit={form.handleSubmit(onSubmit)}>
        <input {...form.register("username")} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
