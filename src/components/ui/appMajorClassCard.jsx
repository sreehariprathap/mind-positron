"use client";
import { Card, Image, CardFooter } from "@heroui/react";
import { Button } from "@heroui/react";

const AppMajorClassCard = ({ id, title, category, image, price, time }) => {
    return (
        <Card id={id} isFooterBlurred  className="w-full col-span-12 sm:col-span-7">
            <CardFooter isBlurred className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">
                    {category}
                </p>
                <h4 className="text-white/90 font-medium text-xl">
                    {title}
                </h4>
            </CardFooter>
            <Image
                removeWrapper
                alt={title}
                className="z-0 w-full h-full object-cover"
                src={image}
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 flex flex-col sm:flex-row justify-between items-center p-2">
                <div className="flex flex-col text-white/90">
                    <p className="text-tiny">Time: {time}</p>
                    <p className="text-tiny">Price: {price}</p>
                </div>
                <Button radius="full" size="sm">
                    Register for Class
                </Button>
            </CardFooter>
        </Card>
    );
};

export default AppMajorClassCard;
