"use client"

import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export default  function RegisterForm(props) {

  const formAction = async (data) => {

      const response =  fetch(
        "https://f90c-154-182-33-112.ngrok-free.app/api/create",
         data
      ).then((res) => {
        console.log("🚩responsse first then",res)
        return res
      }).then((data) => {
        console.log("🚩responsse seconde then with json", data.json());
        console.log("🚩responsse seconde then", data);
        return data.body
      }).catch((error) => {
      console.log("error",error)
    })

  
  };
  return (
    <form
      action={formAction}
      className="w-80 px-3 py-4 h-84 bg-secondary rounded-sm text-white"
    >
      <h1 className="text-2xl mb-8 text-center">تسجيل حساب</h1>
      <p aria-live="polite">{"state?.message"}</p>
      <div className="inputs mb-5 ">
        <div className="grid w-full max-w-sm items-center gap-1.5 mb-3">
          <label htmlFor="name">اسم المستخدم</label>
          <Input
            type={"text"}
            placeplaceholder="name"
            name={"name"}
            className={"text-slate-950 "}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 mb-3">
          <label htmlFor="phone">رقم الهاتف </label>
          <Input
            type={"text"}
            placeplaceholder="phone"
            name={"phone"}
            className={"text-slate-950 "}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 ">
          <label htmlFor="Password">كلمة المرور</label>
          <Input
            type={"text"}
            placeplaceholder="Password"
            name={"password"}
            className={"text-slate-950 "}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 ">
          <label htmlFor="Password">كلمة المرور</label>
          <Input
            type={"text"}
            placeplaceholder="location"
            name={"location"}
            className={"text-slate-950 "}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 ">
          <label htmlFor="Password">كلمة المرور</label>
          <Input
            type={"text"}
            placeplaceholder="cod"
            name={"cod"}
            className={"text-slate-950 "}
          />
        </div>
      </div>
      <Button className="h-8 bg-min capitalize antialiased font-bold w-full">
        تسجيل
      </Button>
    </form>
  );
}
