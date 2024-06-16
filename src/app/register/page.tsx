"use client";

import { useSearchParams } from "next/navigation";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

export default function Register() {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");

  return <>{mode === "signup" ? <SignUp /> : <SignIn />}</>;
}
