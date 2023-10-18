/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton, auth } from "@clerk/nextjs";
import { LogIn } from "lucide-react";
import Link from "next/link";
import FileUpload from "@/components/ui/FileUpload";

export default async function Home() {
  const { userId } = await auth();
  const isAuth = !!userId;
  return (

    <div className="w-screen min-h-screen bg-gradient-to-t from-gray-100 to-gray-300">
      <div className="h-screen w-full flex justify-center items-center px-10">
        <div className="flex flex-col items-center text-center gap-7">
          <div className="flex flex-col gap-3 items-center">
            <UserButton afterSignOutUrl="/" />
            <div className="h-16 flex items-center justify-center">
              <span className="text-3xl md:text-5xl h-full flex items-center font-semibold bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent">
                A new way to read PDF's
              </span>
            </div>
          </div>

          {isAuth && <Button> Check out your pdf's </Button>}

          <p className="max-w-xl text-sm md:text-lg text-slate-400 text-justify md:text-center">
            Ever wanted to speed up your PDF reading? Our AI-powered PDF reader
            helps you read long PDFs more efficiently and effectively. <br />
            Join our beta program today and start reading PDFs like never
            before!
          </p>
          <div className="w-full">
            {isAuth ? (
              <FileUpload />
            ) : (
              <Link href="/sign-in">
                <Button className="md:text-base text-sm">
                  Get Started
                  <LogIn className="w-4 h4 ml-2" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
