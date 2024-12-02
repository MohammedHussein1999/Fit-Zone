import FormLogIn from '@/app/_components/auth_forms/Log/FormLogIn'
import loginActions from '@/app/_components/auth_forms/Log/actions/action';


function page() {
  return (
    <div className=" min-h-screen w-full flex items-center justify-center">
      
      <FormLogIn action={loginActions} />
    </div>
  );
}

export default page