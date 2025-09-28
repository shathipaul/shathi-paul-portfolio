"use client";
import CommonButton from "@/components/common/buttons/CommonButton";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect } from "react";

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="min-h-screen bg-secondary flex flex-col justify-center items-center gap-4">
      <DotLottieReact className="w-1/3" src="/error.lottie" loop autoplay />
      <h3 className="text-2xl font-semibold text-red-600">
        Something went wrong
      </h3>
      <p className="text-sm text-gray-600">
        {error.message || "An unexpected error occurred."}
      </p>

      {error.digest && (
        <p className="text-xs text-primary">Error ID: {error.digest}</p>
      )}

      <CommonButton text="Please try again" onClick={() => reset()} />
    </div>
  );
};

export default ErrorPage;
