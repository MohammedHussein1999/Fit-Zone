"use server";
import "server-only";

import { redirect } from "next/navigation";

export default async function loginActions(prevState, formData) {
  const username = formData.get("userName");
  const password = formData.get("password");

  if (!username && !password) {
    return {
      message: "Please enter username and password",
      payload: formData,
    };
  }

  const response = await fetch(
    `http://localHost:4000/users?username=${username}`
  );
  const userData = await response.json();
  if (!userData.length) {
    console.log("end with no user");
    return {
      message: "The username Not Exist Please Register",
      payload: formData,
    };
    }
    console.log(userData);
    console.log(userData[0].password , password);
    if (userData[0].password === password) {
      
   return redirect("/home");
    }
    return {
      message: "The Password Or UserName is Not Correct!",
      payload: formData,
    };
}
