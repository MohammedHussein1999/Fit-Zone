import * as React from "react";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function SlideProduct() {
  return (
    <div className="flex  justify-center items-center w-full">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full relative p-36"
      >
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  {/* <CardContent className="flex aspect-square items-center justify-center p-6"> */}
                  <img src="https://fakeimg.pl/350x200/?text=Hello" />
                  {/* </CardContent> */}
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className=" absolute left-3" />
        <CarouselNext className=" absolute right-3" />
      </Carousel>
    </div>
  );
}
