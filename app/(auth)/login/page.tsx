import LoginForm from "@/components/auth/LoginForm";
import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/authoptions";

const page = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");
  return <LoginForm />;
};

export default page;
