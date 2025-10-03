"use client";
import CommonButton from "@/components/common/buttons/CommonButton";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-secondary flex flex-col justify-center items-center gap-4">
      <DotLottieReact className="w-1/2" src="/not-found.lottie" loop autoplay />
      {/* <p>
        <span className="text-xl">Oops!</span> We can&apos;t seem to find the
        page you&apos;re looking for.
      </p> */}
      <p className="text-xl">Lost your way?</p>
      <Link href={"/"}>
        <CommonButton text="Go back to home" />
      </Link>
    </div>
  );
};

export default NotFoundPage;
