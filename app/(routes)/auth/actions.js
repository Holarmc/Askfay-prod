"use server";

import { redirect } from "next/navigation";

import { createSession, deleteSession } from "@/lib/session";
import { SignupFormSchema, LoginFormSchema } from "@/lib/formValidation";
import { loginEmailandPassword, signupEmailandPassword } from "@/lib/auth";

export async function signup(prevState, formData) {
  // 1. Validate form field
  const validatedFields = SignupFormSchema.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    // console.log({ errors: validatedFields.error.flatten().fieldErrors });
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // 2. Prepare data for insertion into database
  const { username, email, password } = validatedFields.data;

  const info = { username: username, email: email, password: password };
  console.log(info);

  // console.log(`From signup Action: ${hashedPassword}`);

  // 3. Create a new user
  const user = await signupEmailandPassword(email, password);
  // console.log(user);
}

export async function login(prevState, formData) {
  // 1. Validate form fields
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // 2. Prepare data for insertion into database
  const { email, password } = validatedFields.data;

  // 3. Login existing user
  const user = await loginEmailandPassword(email, password);
  // console.log(user);
}

