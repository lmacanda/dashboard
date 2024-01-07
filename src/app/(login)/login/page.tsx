"use client";

import styles from "./styles.module.scss";
import Link from "next/link";

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

const FormSchema = z.object({
  username: z.string().min(1, "Username is required").max(100),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have than 8 characters"),
});

export const Login = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    console.log(values);
  };

  return (
    <main className={styles.login}>
      <h1>Login To Your Account</h1>
      <button className={styles.login_google_btn}>Sign up with Google</button>
      <h3>- OR -</h3>´
      <Form {...form}>
        <form
          className={styles.login_form}
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <>
                <FormItem>
                  <FormControl>
                    <Input placeholder="username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <>
                <FormItem>
                  <FormControl>
                    <Input type="password" placeholder="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </>
            )}
          />

          {/* Submit button */}
          <button>SignIn</button>
        </form>
        <p className={styles.login_signup}>
          If you don&apos;t have an account, please&nbsp;
          <Link className={styles.login_link} href="/sign-up">
            Sign up
          </Link>
        </p>
      </Form>
    </main>
  );
};

export default Login;
