"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import { useActionState } from "react"; // not react-dom

import { login } from "./actions";

export default function LogIn() {
  const [state, dispatch] = useActionState(login, null);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">이메일과 비밀번호로 로그인해주세요.</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        <Input
          name="email"
          type="email"
          placeholder="Email"
          required
          errors={state?.fieldErrors?.email}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          required
          errors={state?.fieldErrors?.password}
        />
        <Button text="Log in" />
      </form>
    </div>
  );
}
