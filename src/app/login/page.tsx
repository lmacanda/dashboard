"use client";

import styles from "./styles.module.scss";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormControl,
  FormMessage,
  FormItem,
} from "@/components/ui/form";

const formSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export const Login = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <main>
      <h1>Login To Your Account</h1>
      <button>Google</button>
      <h3>- OR -</h3>´
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormItem>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <>
                  <FormControl>
                    <Input placeholder="username" {...field} />
                  </FormControl>
                </>
              )}
            />
          </FormItem>

          <FormItem>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <>
                  <FormControl>
                    <Input type="password" placeholder="password" {...field} />
                  </FormControl>
                </>
              )}
            />
          </FormItem>

          {/* FormMessage can be placed outside of FormItem */}
          <FormMessage />

          {/* Submit button */}
          <button>Submit</button>
        </form>
      </Form>
    </main>
  );
};

export default Login;
