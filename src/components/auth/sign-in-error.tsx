import { BsExclamationTriangle } from "react-icons/bs";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SignInErrorPage() {
  return (
    <Card className="md:w-[400px] w-[350px] ">
      <CardHeader className="flex flex-col gap-y-3 justify-center items-center">
        <CardTitle>404 Not found</CardTitle>
        <CardDescription>Oops! Something went wrong!</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center items-center flex-col gap-y-4">
        <div className="bg-destructive/15 py-2 px-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
          <BsExclamationTriangle className="h-4 w-4" />
          <p>Page is Not found</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p>Back to login</p>
      </CardFooter>
    </Card>
  );
}
