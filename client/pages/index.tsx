"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="hero">
      <div className="hero-content text-center">
        <Image
          src="/logo.svg"
          alt="TestSrc"
          width={240}
          height={240}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">TestSrc</h1>
          <p className="py-6">
            TestSrc is a web application built with Next.js and Express that utilizes technologies
            like ffmpeg to generate test audio and video files in various common formats, including
            on-demand and live streaming videos.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => {
              router.push("/video");
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
