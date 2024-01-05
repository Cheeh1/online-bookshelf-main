"use client";
import { FC } from "react";
import Image from "next/image";

interface Props {
  toggle: boolean;
  action: () => void;
}

const SignUp: FC<Props> = ({ toggle, action }) => {
  return (
    <>
      <div
        onClick={action}
        className={`${
          !toggle
            ? "opacity-0 invisible transition-all delay-75 duration-200"
            : "transition-all delay-75 duration-200 visible opacity-100 z-30 fixed top-0 bottom-0 left-0 right-0 bg-[#c4c4c4dc]"
        }`}
      >
        <div
          className={`${
            toggle ? "transform translate-y-0" : "transform -translate-y-full"
          } transition-all delay-100 duration-700 absolute top-40 right-8 xl:top-10 xl:right-[30rem]`}
        >
          <section className="flex flex-col py-10 px-5 rounded-xl gap-10 items-center border bg-[#ffffff]">
            <div className="fblock1">
              <h1 className="text-secondary font-bold text-center text-xl">
                Start Organizing
              </h1>
              <p className="text-black text-center w-72 text-sm leading-tight">
                Join BookMark and access all your favourites in one place.
              </p>
            </div>
            <Image
              width={200}
              height={200}
              src="/images/sign-in-illustrations.svg"
              alt="illustration"
            />

            <div className="flex gap-5 shadow-[#0000001a] shadow-md border-[#0000004d]  px-8 py-1.5 text-center border rounded-2xl cursor-pointer">
              <Image
                className=""
                width={20}
                height={20}
                src="/images/google.svg"
                alt="google-icon"
              />
              <button className="font-semibold text-sm">
                Sign in with Google
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SignUp;
