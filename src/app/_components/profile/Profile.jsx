import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DataUser from "./dataUser";

export default function Profile() {
  return (
    <div className="p-20 px-1 w-full min-h-screen">
      <Tabs
        defaultValue="account"
        className="w-full min-h-screen  grid  grid-rows-2 md:grid-cols-2 justify-items-center text-white"
      >
        <TabsList className=" flex flex-col bg-seconder space-y-4   ">
          <TabsTrigger
            value="account"
            className="bg-white p-5 w-72 text-1xl font-bold "
          >
            Account
          </TabsTrigger>
          <TabsTrigger
            value="Class"
            className="bg-white p-5 w-72 text-1xl font-bold"
          >
            Class
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <DataUser />
        </TabsContent>
        <TabsContent value="Class">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
