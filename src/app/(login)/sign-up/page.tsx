"use client";

import Link from "next/link";
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

const FormSchema = z
  .object({
    username: z.string().min(1, "Username is required").max(100),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must have than 8 characters"),
    confirmPassword: z.string().min(1, "Password confirmation is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password do not match",
  });

export const SignUp = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
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
        <form onSubmit={form.handleSubmit(onSubmit)}>
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

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Re-Enter your password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit button */}
          <button>Submit</button>
        </form>
        <p>
          If you don&apos;t have an account, please&nbsp;
          <Link href="/sign-up">Sign up</Link>
        </p>
      </Form>
    </main>
  );
};

export default SignUp;
