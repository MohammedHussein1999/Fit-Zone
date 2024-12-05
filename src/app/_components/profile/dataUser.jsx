import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function DataUser() {
  return (
    <div>
      <Card className="flex p-5 justify-center flex-col items-center">
        <CardHeader className="flex p-5 justify-center flex-col items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>
          <CardTitle>Mohammed</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}
