"use client"
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@heroui/react";


const AppButton = ({ variant = "solid", color = "primary", text, onClick }) => {
  return (
    <Button color={color} variant={variant} onClick={onClick}>
      {text}
    </Button>
  );
};

export default AppButton;
