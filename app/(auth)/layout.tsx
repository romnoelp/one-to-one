import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ForgotPassword from "@/components/client_components/ForgotPassword";
import SignupForAnAccount from "@/components/client_components/SignupForAnAccount";

type AuthLayoutProps = {
  children: React.ReactNode;
  type: "signin" | "signup";
};

const AuthLayout = ({ children, type }: AuthLayoutProps) => {
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <Card className="w-full max-w-md p-6">
        <CardHeader className="flex items-center">
          <CardTitle>Account Signin</CardTitle>
          <CardDescription>
            Enter your credentials to have access to your account.
          </CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter className="font-light text-sm flex justify-center">
          {type === "signin" ? <ForgotPassword /> : <SignupForAnAccount />}
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthLayout;
