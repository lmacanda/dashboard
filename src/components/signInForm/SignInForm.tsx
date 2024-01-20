"use client";

import styles from "./styles.module.scss";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

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
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have than 8 characters"),
});

export const SignInForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const signInData = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (signInData?.error) {
      console.log(signInData.error);
    } else {
      router.push("/admin");
    }
  };

  return (
    <div className={styles.login}>
      <h1 className={styles.login_text}>Login Into Your Account</h1>
      <button className={styles.login_google_btn}>Sign up with Google</button>
      <h3>- OR -</h3>
      <Form {...form}>
        <form
          className={styles.login_form}
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <>
                <FormItem>
                  <FormControl>
                    <Input placeholder="email" {...field} />
                  </FormControl>
                  <FormMessage className={styles.login_form_error} />
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
                  <FormMessage className={styles.login_form_error} />
                </FormItem>
              </>
            )}
          />

          {/* Submit button */}
          <button>SignIn</button>
        </form>
        <p className={styles.login_signup}>
          If you don&apos;t have an account, please&nbsp;
          <Link className={styles.login_signup_link} href="/sign-up">
            Sign up
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default SignInForm;
