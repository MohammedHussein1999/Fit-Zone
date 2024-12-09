import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui//input";
import { auth, signIn } from "../../../../auth";

export default async function LoginForm(props) {
  const session = await auth()
  console.log("🚀 ~ LoginForm ~ session:", session)
  const formAction = async (data) => {
    "use server";
    await signIn("credentials", data);
  };
  return (
    <form
      action={formAction}
      className="w-80 px-3 py-4 h-84 bg-secondary rounded-sm text-white"
    >
      <h1 className="text-2xl mb-8 text-center">تسجيل دخول</h1>
      <p aria-live="polite">{"state?.message"}</p>
      <div className="inputs mb-5 ">
        <div className="grid w-full max-w-sm items-center gap-1.5 mb-3">
          <label htmlFor="username">اسم المستخدم</label>
          <Input
            type={"text"}
            placeplaceholder="UserName"
            name={"userName"}
            className={"text-slate-950 "}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 ">
          <label htmlFor="username">كلمة المرور</label>
          <Input
            type={"text"}
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
}
