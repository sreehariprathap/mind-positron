"use client";
import SplashLayout from "@/layouts/splashLayout";
import  IconButton  from "@/components/ui/iconButton";
import React from "react";
import { Form, Input, Button } from "@heroui/react";
import { Divider } from "@heroui/react";
import {  Image } from "@heroui/react";


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
        className="label:text-white"
      />
      <Input
        isRequired
        errorMessage="Please enter a valid password"
        label="Password"
        labelPlacement="outside"
        name="password"
        placeholder="Enter your password"
        type="password"
        className="text-white"
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
    <SplashLayout>
    <div className="flex flex-col items-center py-10 gap-10 justify-between bg-primaryDark">
    <Image
        removeWrapper
        alt="App Logo"
        className="z-0 w-96 object-cover"
        src='/‘MINDPOSITRON’-1.png'
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
    </SplashLayout>
  );
}
