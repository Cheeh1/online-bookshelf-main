"use client";
import { ReduxProvider } from "../redux/provider";

const ScreenLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="">
        <ReduxProvider>{children}</ReduxProvider>
      </main>
    </>
  );
};
export default ScreenLayout;
