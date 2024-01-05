import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

const genres = [
  "Fiction",
  "Non-Fiction",
  "Crime Fiction",
  "Horror",
  "Historical Romance",
  "Self-Help",
  "Romance",
  "Young Adult",
  "Fantasy",
];

const Home: FC = () => {
  return (
    <>
      <main className={openSans.className}>
        <section className="user-home-bg flex flex-col md:flex-row xl:flex-row justify-evenly items-center xl:pt-5 md:pt-5 pt-36">
          <div className="flex flex-col gap-3">
            <h1 className="text-primary text-[35px] md:text-[50px] xl:text-[54px] w-64 xl:w-96 md:xl:96 font-semibold tracking-widest leading-tight">
              Start <span className="text-secondary">organizing</span>
            </h1>
            <p className="text-black w-48 md:w-72 xl:w-72 font-medium text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
              velit senectus in nunc ut dictum aliquam id platea. In eget amet,
              imperdiet tellus. Sit sit orci in eu. Quis pellentesque.
            </p>

            <Link href="/explore">
              <button className="bg-secondary rounded-3xl text-white font-bold py-2 px-4 text-sm w-32 tracking-widest">
                Get into it
              </button>
            </Link>
          </div>

          <Image
            height={400}
            width={400}
            src="/images/user-home-hero.png"
            alt="header img"
            className="hidden xl:block md:block"
          />
          <Image
            height={300}
            width={300}
            src="/images/user-home-hero-mobile.png"
            alt="header img"
            className="md:hidden xl:hidden"
          />
        </section>
        <section className="library-bg flex flex-col-reverse md:flex-row xl:flex-row gap-20 md:gap-0 xl:gap-0 justify-evenly items-center py-28">
          <Image
            className=""
            height={300}
            width={300}
            src="/images/add-to-library.svg"
            alt="add-to-library-img"
          />
          <div className="flex flex-col gap-5 text-center">
            <h1 className="text-primary font-extrabold text-3xl tracking-wider w-72 xl:w-full">
              Add to your <span className="text-secondary">library</span>
            </h1>
            <p className="text-black w-72 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
              velit senectus in nunc ut dictum aliquam id platea. In eget amet,
              imperdiet tellus. Sit sit orci in eu. Quis pellentesque.
            </p>
            <div className="flex justify-center">
              <Link href="/explore">
                <button className="bg-secondary rounded-3xl text-white font-bold py-2 px-4 text-sm w-36 tracking-widest">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-20 py-20 border-t">
          <div className="flex flex-col gap-3 xl:px-64 items-center px-0 md:px-20 md:items-start xl:text-center">
            <h1 className="text-primary font-extrabold text-center md:text-left xl:text-left tracking-wider text-3xl w-72">
              We think you might <span className="text-secondary">like</span>{" "}
              these
            </h1>
            <p className="text-black text-sm w-72">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex flex-col md:flex-row xl:flex-row gap-20 md:gap-0 xl:gap-0 justify-evenly items-center">
            <div className="relative rounded-xl flex flex-col gap-1 bg-[#B6BACF] shadow-md shadow-[#bdbdbd] py-5 px-5 w-64">
              <Image
                className="absolute right-5 bottom-5"
                height={80}
                width={80}
                src="/images/book-4.png"
                alt="Neon Gods"
              />
              <Image
                height={115}
                width={115}
                src="/images/user-star-1.svg"
                alt="star-rating"
              />
              <h4 className="text-primary text-sm font-bold">Neon Gods</h4>
              <div className="flex gap-3">
                <div className="flex flex-col text-[10px] font-semibold">
                  <p className="text-[#00000073]">Katee Robert</p>
                  <p className="text-[#00000073]">Fantasy Fiction</p>
                </div>
                <Image
                  height={20}
                  width={20}
                  src="/images/user-btn-1.svg"
                  alt="button"
                />
              </div>
            </div>
            <div className="relative rounded-xl flex flex-col gap-1 bg-[#F8D2BD] shadow-md shadow-[#bdbdbd] py-5 px-5 w-64">
              <Image
                className="absolute bottom-5 right-5"
                height={80}
                width={80}
                src="/images/book-18.png"
                alt="People We Meet on Vacation"
              />
              <Image
                height={115}
                width={115}
                src="/images/user-star-2.svg"
                alt="star-rating"
              />
              <h4 className="text-[#D1560F] text-sm font-bold">
                People We Meet on Vacation
              </h4>
              <div className="flex gap-3">
                <div className="flex flex-col text-[10px] font-semibold">
                  <p className="text-[#00000073]">Emily Henry</p>
                  <p className="text-[#00000073]">Humour</p>
                </div>
                <Image
                  height={20}
                  width={20}
                  src="/images/user-btn-2.svg"
                  alt="button"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="border-t flex xl:flex-row md:flex-row flex-col gap-10 md:gap-0 xl:gap-0 justify-evenly items-center py-20">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5 xl:items-start items-center">
              <h1 className="text-3xl text-center md:text-left xl:text-left text-primary font-extrabold tracking-wider w-80 xl:w-96">
                Search from your{" "}
                <span className="text-secondary">favourite</span> categories
              </h1>
            </div>
            <div className="flex justify-center md:justify-start xl:justify-start flex-wrap md:w-80 xl:w-96 gap-x-5 gap-y-5">
              {genres.map((genre, index) => (
                <p
                  key={index}
                  className="border-2 border-primary rounded-3xl py-1 text-sm font-semibold text-primary text-center px-2"
                >
                  {genre}
                </p>
              ))}
            </div>
          </div>
          <Image
            height={500}
            width={500}
            src="/images/category.svg"
            alt="illustration"
            className=" w-80 xl:w-96"
          />
        </section>
      </main>
    </>
  );
};

export default Home;
