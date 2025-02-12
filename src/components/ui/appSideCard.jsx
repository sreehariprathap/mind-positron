"use client";
import { Card, CardHeader, Image } from "@heroui/react";

const AppSideCard = ({ id, category, title, image }) => {
  return (
    <Card id={id} className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">
          {category}
        </p>
        <h4 className="text-white font-medium text-large">{title}</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src={image}
      />
    </Card>
  );
};

export default AppSideCard;
