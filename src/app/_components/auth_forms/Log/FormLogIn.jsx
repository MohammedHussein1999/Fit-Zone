"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useActionState } from "react";

const initialState = {
  message: "",
};

const Login = ({action}) => {
const [userName,setUsername]=useState("")
  const [password, setPassword] = useState("");
  const [state, formAction] = useActionState(action, initialState);
  return (
    <form
      action={formAction}
      className="w-80 px-3 py-4 h-84 bg-secondary rounded-sm text-white"
    >
      <h1 className="text-2xl mb-8 text-center">تسجيل دخول</h1>
      <p aria-live="polite">{state?.message}</p>
      <div className="inputs mb-5 ">
        <div className="grid w-full max-w-sm items-center gap-1.5 mb-3">
          <label htmlFor="username">اسم المستخدم</label>
          <Input
            type={"text"}
            value={userName}
            onChange={(event) => setUsername(event.target.value)}
            placeplaceholder="UserName"
            name={"userName"}
            className={"text-slate-950 "}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 ">
          <label htmlFor="username">كلمة المرور</label>
          <Input
            type={"text"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeplaceholder="Password"
            name={"password"}
            className={"text-slate-950 "}
          />
        </div>
      </div>
      <Button className="h-8 bg-min capitalize antialiased font-bold w-full">
        دخول
      </Button>
    </form>
  );
};

export default Login;
