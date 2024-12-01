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
    <div>
      <Card className=" bg-[#e4e4e4] border-black min-h-60">
        <CardHeader>
          <CardTitle>{props.title}</CardTitle>
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
    </div>
  );
}
