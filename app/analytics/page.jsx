import { auth } from "@/auth";
import React from "react";
import { redirect } from "next/navigation";

export default async function Analytics() {
  const session = await auth();
  console.log(session);

  //const { data } = await useUserSession();

  if (!session?.user) {
    return redirect("/");
  }
  return <div>Analytics</div>;
}
