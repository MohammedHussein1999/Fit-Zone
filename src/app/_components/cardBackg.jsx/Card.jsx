import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import React from "react";

export default function CardBackg(props) {
  return (
    <>
      <Card className=" bg-[#e4e4e497] w-72 h-[350px]">
        <CardHeader className="items-center font-bold ">
          <CardTitle >{props.title}</CardTitle>
          <CardDescription>{ props.data}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            {props.des}
          </p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </>
  );
}
