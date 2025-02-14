"use client";
import { useAuth } from "../providers/AuthProvider";
import { Divider, Image, Form, Input, Button } from "@heroui/react";
import IconButton from "@/components/ui/iconButton";
import React from "react";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const { register } = useAuth();
  const router = useRouter();
  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    register(data.email, data.password, data.name)
      .then(() => router.push("/"))
      .catch((error) => console.error("Register failed", error));
  };

  return (
    <Form
      className="w-full max-w-xs gap-3 flex flex-col items-center"
      onSubmit={onSubmit}
    >
      <Input
        isRequired
        label="Name"
        name="name"
        placeholder="Enter your name"
      />
      <Input
        isRequired
        label="Email"
        name="email"
        placeholder="Enter your email"
        type="email"
      />
      <Input
        isRequired
        label="Password"
        name="password"
        placeholder="Enter your password"
        type="password"
      />
      <Button type="submit" color="primary">
        Register
      </Button>
    </Form>
  );
};

const LoginForm = () => {
  const { login } = useAuth();
  const router = useRouter();
  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    login(data.email, data.password)
      .then(() => router.push("/"))
      .catch((error) => console.error("Login failed", error));
  };

  return (
    <Form
      className="w-full max-w-xs gap-3 flex flex-col items-center"
      onSubmit={onSubmit}
    >
      <Input
        isRequired
        label="Email"
        name="email"
        placeholder="Enter your email"
        type="email"
      />
      <Input
        isRequired
        label="Password"
        name="password"
        placeholder="Enter your password"
        type="password"
      />
      <Button type="submit" color="primary">
        Login
      </Button>
    </Form>
  );
};

export default function AuthPage({ type }) {
  return (
    <div className="flex flex-col items-center py-10 gap-10">
      <Image
        alt="App Logo"
        className="z-0 w-96 object-cover"
        src="/‘MINDPOSITRON’-2.png"
      />
      <div className="flex flex-col w-full items-center justify-center gap-5">
        {type === "register" ? <RegisterForm /> : <LoginForm />}
        <div className="flex justify-center items-center gap-4 w-[50vw] px-10">
          <Divider className="my-4 w-24" />
          <h1 className="text-xl font-normal">OR</h1>
          <Divider className="my-4 w-24" />
        </div>
        <div className="flex gap-3">
          <IconButton url="/google.png" />
          <IconButton url="/apple.png" />
        </div>
      </div>
      <p>
        {type === "register"
          ? "Already have an account?"
          : "Don't have an account?"}
        <a href={type === "register" ? "/login" : "/register"}>
          <span className="cursor-pointer ml-1 hover:text-primaryColor hover:underline">
            {type === "register" ? "Login Here" : "Register Here"}
          </span>
        </a>
      </p>
    </div>
  );
}
