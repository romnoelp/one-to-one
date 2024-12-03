import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Signin = () => {
  return (
    <div>
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="romnoelp" />
      <Label htmlFor="password">Password</Label>
      <Input type="password" id="password" />
    </div>
  );
};

export default Signin;
