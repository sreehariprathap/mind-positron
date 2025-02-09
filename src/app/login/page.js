"use client";
import AppLayout from "@/layouts/appLayout";
import  IconButton  from "@/components/ui/iconButton";
import React from "react";
import { Form, Input, Button } from "@heroui/react";
import { Divider } from "@heroui/react";

const LoginForm = () => {
  const [submitted, setSubmitted] = React.useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    setSubmitted(data);
  };

  return (
    <Form
      className="w-full max-w-xs gap-3 flex flex-col items-center"
      validationBehavior="native"
      onSubmit={onSubmit}
    >
      <Input
        isRequired
        errorMessage="Please enter a valid email"
        label="Email"
        labelPlacement="outside"
        name="email"
        placeholder="Enter your email"
        type="email"
      />
      <Input
        isRequired
        errorMessage="Please enter a valid password"
        label="Password"
        labelPlacement="outside"
        name="password"
        placeholder="Enter your password"
        type="password"
      />
      <Button type="submit" variant="bordered">
        Login
      </Button>
      {submitted && (
        <div className="text-small text-default-500">
          You submitted: <code>{JSON.stringify(submitted)}</code>
        </div>
      )}
    </Form>
  );
};
export default function Home() {
  return (
    // <AppLayout>
    <div className="flex justify-between items-center">
      <img
        src="/brain.jpg"
        alt="Logo"
        className="w-[50vw] min-h-screen rounded-sm object-cover"
      />
      <div className="flex flex-col w-full items-center justify-center gap-5">
        <LoginForm />
        <div className="flex justify-center items-center gap-4 w-[50vw] px-10">
          <Divider className="my-4 w-24" />
          <h1 className="text-xl font-normal">OR</h1>
          <Divider className="my-4 w-24" />
        </div>
        <div className='flex gap-3 '>
          <IconButton url="/google.png" />
          <IconButton url="/apple.png" />
        </div>
      </div>
    </div>
    // </AppLayout>
  );
}
