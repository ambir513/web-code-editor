"use client";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { useState, useTransition } from "react";
import { Spinner } from "../ui/spinner";
import { signIn } from "next-auth/react";
import { DEFAULT_SIGNIN_REDIRECT } from "@/routes";
import { useSearchParams } from "next/navigation";
import { BsExclamationTriangle } from "react-icons/bs";

export default function SignInFrom() {
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider"
      : searchParams.get("error") === "OAuthCallbackError"
      ? "Something went wrong"
      : "";
  const [isPending, setTansition] = useTransition();
  const [githubSpinner, setGithubSpinner] = useState<Boolean>(false);
  const [googleSpinner, setGoogleSpinner] = useState<Boolean>(false);

  const handleSignIn = (provider: "google" | "github") => {
    if (provider === "google") {
      setGoogleSpinner((prev) => !prev);
    }
    if (provider === "github") {
      setGithubSpinner((prev) => !prev);
    }
    setTansition(() => {
      signIn(provider, {
        callbackUrl: DEFAULT_SIGNIN_REDIRECT,
      });
    });
  };

  return (
    <Card className="md:w-[400px] w-[350px] ">
      <CardHeader className="flex flex-col gap-y-3 justify-center items-center">
        <p className="text-5xl">🌐</p>
        <CardTitle>Sign in to Web Code Editor</CardTitle>
        <CardDescription>
          Welcome back! Please sign in to continue
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-y-4">
        <Button
          variant="outline"
          className="relative w-full flex justify-center items-center gap-x-2 cursor-pointer"
          onClick={() => handleSignIn("google")}
          disabled={githubSpinner && true}
        >
          {googleSpinner && <Spinner className="absolute top-2" />}
          <span
            className={`flex justify-center items-center gap-x-2 ${
              googleSpinner && "opacity-10"
            }`}
          >
            <FaGoogle /> <span>Sign in with Google</span>
          </span>
        </Button>
        <Button
          className="relative w-full flex justify-center items-center gap-x-2 cursor-pointer "
          onClick={() => handleSignIn("github")}
          disabled={googleSpinner && true}
        >
          {githubSpinner && <Spinner className="absolute top-2" />}
          <span
            className={`flex justify-center items-center gap-x-2 ${
              githubSpinner && "opacity-10"
            }`}
          >
            <FaGithub />
            <span>Sign in with Github</span>
          </span>
        </Button>
      </CardContent>
      <CardFooter className="flex flex-col gap-y-2">
        <div className={` ${!urlError && "hidden"} w-full mb-2`}>
          <div className="bg-destructive/15 justify-center py-2 px-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
            <BsExclamationTriangle className="h-4 w-4" />
            <p>{urlError}</p>
          </div>
        </div>
        <span className="text-sm text-muted-foreground">
          Please review our{" "}
          <span className="text-blue-500/60 hover:underline cursor-pointer">
            Terms and Conditions
          </span>{" "}
          before signing in.
        </span>
      </CardFooter>
    </Card>
  );
}
