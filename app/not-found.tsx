"use client";

import { FC } from "react";
import Link from "next/link";

const NotFound: FC = () => {
  return (
    <>
      <div className="py-72 grid h-screen place-content-center bg-white px-4">
        <div className="text-center">
          <h1 className="text-9xl font-black text-gray-200">404</h1>

          <p className="text-2xl font-bold tracking-tight text-primary sm:text-4xl">
            Uh-oh!
          </p>

          <p className="mt-4 text-gray-500">We can&apos;t find that page.</p>

          <Link
            href="/"
            className="mt-6 inline-block rounded bg-secondary px-5 py-3 text-sm font-medium text-white focus:outline-none focus:ring"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
