"use client";
import AppMajorClassCard from "@/components/ui/appMajorClassCard";
import AppSideCard from "@/components/ui/appSideCard";
import AppLayout from "@/layouts/appLayout";
import { Card, CardHeader, CardBody, Image } from "@heroui/react";

export default function Home() {
  return (
    <AppLayout>
      <div className="flex w-full p-5 gap-4 justify-between flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-[50vw] flex flex-col gap-4">
          <AppMajorClassCard
            id={1}
            title="Stay Positive"
            category="Motivational"
            image="https://melodywilding.com/wp-content/uploads/2016/11/Positive-Thinking-Doesnt-Work.-Heres-What-Does..jpg"
            price="$19.99"
            time="10:00 AM"
            motivationalClass="motivational"
          />
        </div>
        <div className="flex flex-col gap-4 w-full lg:w-[50vw] ">
          <div className="flex flex-row gap-4">
            <AppSideCard
              id={1}
              category="Motivation"
              title="Stay Hyped"
              image="https://degrees.snu.edu/hubfs/Teaching%20a%20good%20career-1.jpeg"
            />
            <Card className="col-span-12 sm:col-span-4 h-[300px]">
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">
                  Plant a tree
                </p>
                <h4 className="text-white font-medium text-large">
                  Contribute to the planet
                </h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="https://heroui.com/images/card-example-3.jpeg"
              />
            </Card>
            <Card className="col-span-12 sm:col-span-4 h-[300px]">
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">
                  Supercharged
                </p>
                <h4 className="text-white font-medium text-large">
                  Creates beauty like a beast
                </h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="https://heroui.com/images/card-example-2.jpeg"
              />
            </Card>
          </div>
          <div className="flex flex-col gap-4">
            <Card className="p-4">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Daily Mix</p>
                <small className="text-default-500">12 Tracks</small>
                <h4 className="font-bold text-large">Frontend Radio</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="https://heroui.com/images/hero-card-complete.jpeg"
                  width={270}
                />
              </CardBody>
            </Card>
            <Card className="p-4">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Daily Mix</p>
                <small className="text-default-500">12 Tracks</small>
                <h4 className="font-bold text-large">Frontend Radio</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="https://heroui.com/images/hero-card-complete.jpeg"
                  width={270}
                />
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
