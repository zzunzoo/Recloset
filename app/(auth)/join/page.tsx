"use client";

import Input from "@/components/input";
import Button from "@/components/button";
import { useActionState } from "react";
import { join } from "./actions";

export default function CreateAccount() {
  const [state, dispatch] = useActionState(join, null);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">가입을 위해 아래 정보를 입력해주세요.</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        <Input
          name="username"
          type="text"
          placeholder="Username"
          required
          minLength={3}
          maxLength={10}
          errors={state?.fieldErrors.username}
        ></Input>
        <Input
          name="email"
          type="email"
          placeholder="Email"
          required
          errors={state?.fieldErrors.email}
        ></Input>
        <Input
          name="password"
          type="password"
          placeholder="Password"
          required
          errors={state?.fieldErrors.password}
        ></Input>
        <Input
          name="confirm_password"
          type="password"
          placeholder="Confirm Password"
          required
          errors={state?.fieldErrors.confirm_password}
        ></Input>
        <Button text="계정 만들기" />
      </form>
    
    </div>
  );
}
