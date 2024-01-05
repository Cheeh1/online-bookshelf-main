"use client";
import { FC, useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  moveToCompleted,
  moveToInProgress,
  removeFromLibrary,
} from "@/app/redux/librarySlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { MdDeleteOutline } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import { BookItems } from "@/app/redux/librarySlice";

const Library: FC = () => {
  const [activeTab, setActiveTab] = useState<
    "toRead" | "inProgress" | "completed"
  >("toRead");

  const handleTabClick = (tab: "toRead" | "inProgress" | "completed") => {
    setActiveTab(tab);
  };

  const dispatch = useDispatch();

  const handleMoveToProgress = (item: BookItems) => {
    dispatch(moveToInProgress(item));
    toast.success("Book is now in progress, Keep it up", {
      className: "text-sm font-semibold",
      duration: 2000,
    });
  };

  const handleMoveToCompleted = (item: BookItems) => {
    dispatch(moveToCompleted(item));
    toast.success("Congratulations! You have completed this book", {
      className: "text-sm font-semibold",
      duration: 2000,
      position: "top-right",
    });
  };

  const handleRemoveBook = (item: BookItems) => {
    dispatch(removeFromLibrary(item));
    toast.success("Oops! Book removed from the library", {
      className: "text-sm font-semibold",
      duration: 2000,
      position: "top-right",
    });
  };

  const toRead = useSelector((state: RootState) => state.library.toRead);
  const inProgress = useSelector(
    (state: RootState) => state.library.inProgress
  );
  const completed = useSelector((state: RootState) => state.library.completed);

  return (
    <>
      <Toaster />
      <main className="relative flex flex-col gap-20 py-20">
        <section className="z-10 flex flex-col gap-5 md:gap-2 xl:gap-2">
          <div className="flex xl:px-40 justify-evenly md:justify-between md:px-20 xl:justify-between text-sm items-center">
            <h1 className="font-extrabold xl:text-xl text-primary">
              Your Library
            </h1>
            <div className="flex gap-3">
              <p
                onClick={() => handleTabClick("toRead")}
                className={`relative cursor-pointer ${
                  activeTab === "toRead"
                    ? "text-primary font-bold"
                    : "text-[#3F3D56A8] font-medium"
                }`}
              >
                To Be Read{" "}
                {toRead.length > 0 && (
                  <span className="absolute bg-[#c2a410a0] text-primary rounded-2xl right-0 -top-2 px-1.5 text-[10px]">
                    {toRead.length}
                  </span>
                )}
              </p>
              <p
                onClick={() => handleTabClick("inProgress")}
                className={`relative cursor-pointer ${
                  activeTab === "inProgress"
                    ? "text-primary font-bold"
                    : "text-[#3F3D56A8] font-medium"
                }`}
              >
                In Progress{" "}
                {inProgress.length > 0 && (
                  <span className="absolute bg-[#c2a410a0] text-primary rounded-2xl right-0 -top-2 px-1.5 text-[10px]">
                    {inProgress.length}
                  </span>
                )}
              </p>
              <p
                onClick={() => handleTabClick("completed")}
                className={`relative cursor-pointer ${
                  activeTab === "completed"
                    ? "text-primary font-bold"
                    : "text-[#3F3D56A8] font-medium"
                }`}
              >
                Completed{" "}
                {completed.length > 0 && (
                  <span className="absolute bg-[#c2a410a0] text-primary rounded-2xl right-0 -top-2 px-1.5 text-[10px]">
                    {completed.length}
                  </span>
                )}
              </p>
            </div>
          </div>
          <hr className="w-full border-[1.5px] font-medium text-[#3F3D56A8] border-1.5" />
        </section>

        <section className="z-10">
          {activeTab === "toRead" && (
            <div>
              {toRead.length > 0 ? (
                <div className="flex justify-evenly">
                  <div className="grid grid-cols-2 gap-x-10 md:grid-cols-4 xl:grid-cols-5 xl:gap-x-20 gap-y-10">
                    {toRead.map((item) => (
                      <div
                        className="relative flex flex-col gap-2"
                        key={item.id}
                      >
                        <Image
                          width={120}
                          height={120}
                          src={item.img}
                          alt={item.title}
                          className="rounded-lg"
                        />
                        <div className="flex gap-2 items-center">
                          <button
                            onClick={() => handleMoveToProgress(item)}
                            className="bg-secondary rounded-3xl text-white font-bold py-1 px-4 text-sm"
                          >
                            Start reading
                          </button>
                          <MdDeleteOutline
                            className="absolute top-2 right-1 cursor-pointer text-2xl text-white bg-secondary rounded-xl"
                            onClick={() => handleRemoveBook(item)}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex justify-center">
                  <div className="flex flex-col gap-5 items-center">
                    <h1 className="text-primary font-extrabold text-xl md:text-2xl xl:text-2xl tracking-wider w-72 md:w-full xl:w-full">
                      Add a <span className="text-secondary">Book</span> to the
                      library
                    </h1>
                    <Link href="/explore">
                      <button className="bg-secondary rounded-3xl text-white font-bold py-2 px-4 text-sm w-40 tracking-widest">
                        Get Started
                      </button>
                    </Link>
                  </div>
                </div>
              )}{" "}
            </div>
          )}

          {/* In Progress */}
          {activeTab === "inProgress" && (
            <div>
              {inProgress.length > 0 ? (
                <div className="flex justify-center">
                  <div className="grid grid-cols-2 gap-x-10 md:grid-cols-4 xl:grid-cols-5 xl:gap-x-20 gap-y-10">
                    {inProgress.map((item) => (
                      <div
                        className="relative flex flex-col gap-2 items-center"
                        key={item.id}
                      >
                        <Image
                          width={120}
                          height={120}
                          src={item.img}
                          alt={item.title}
                          className="rounded-lg"
                        />
                        <div className="flex gap-2 items-center">
                          <button
                            onClick={() => handleMoveToCompleted(item)}
                            className="bg-secondary rounded-3xl text-white font-bold py-1 px-5 text-sm"
                          >
                            Completed
                          </button>
                          <MdDeleteOutline
                            className="absolute top-2 right-3 text-2xl cursor-pointer text-white bg-secondary rounded-xl"
                            onClick={() => handleRemoveBook(item)}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex justify-center">
                  <h1 className="text-primary text-center font-extrabold text-xl md:text-2xl xl:text-2xl tracking-wider w-72 xl:w-full">
                    No book in
                    <span className="text-secondary"> Progress</span>
                  </h1>
                </div>
              )}
            </div>
          )}

          {/* compeleted tab */}
          {activeTab === "completed" && (
            <div>
              {completed.length > 0 ? (
                <div className="flex justify-center">
                  <div className="grid grid-cols-2 gap-x-10 md:grid-cols-4 xl:grid-cols-5 xl:gap-x-20 gap-y-10">
                    {completed.map((item) => (
                      <div
                        className="relative flex flex-col gap-2"
                        key={item.id}
                      >
                        <Image
                          width={120}
                          height={120}
                          src={item.img}
                          alt={item.title}
                          className="rounded-lg"
                        />
                        <MdDeleteOutline
                          className="absolute top-2 right-3 text-2xl cursor-pointer text-white bg-secondary rounded-xl"
                          onClick={() => handleRemoveBook(item)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex justify-center">
                  <h1 className="text-primary text-center font-extrabold text-xl md:text-2xl xl:text-2xl tracking-wider xl:w-full">
                    No book has been
                    <span className="text-secondary"> Completed</span>
                  </h1>
                </div>
              )}
            </div>
          )}
        </section>

        <section className="">
          <Image
            className="absolute top-28 right-0 w-32 xl:w-52"
            width={200}
            height={200}
            src="/images/explore-1.svg"
            alt="illustration"
          />
          <Image
            className="absolute left-0 bottom-0 w-40 xl:w-60"
            width={250}
            height={250}
            src="/images/explore-2.svg"
            alt="illustration"
          />
        </section>
      </main>
    </>
  );
};

export default Library;
