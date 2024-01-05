import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { BooksData } from "../../data/books/book";

const Genres = [
  "Contemporary Romance",
  "Young Adult",
  "Dark",
  "Crime Fiction",
  "Erotica",
  "Contemporay",
  "Fiction",
  "Non-Fiction",
  "Fantasy",
  "Horror",
  "Historical Romance",
];

const Explore: FC = () => {
  return (
    <>
      <main className="relative flex flex-col md:flex-row xl:flex-row md:justify-evenly xl:justify-between items-center md:items-start gap-28 md:gap-0 xl:gap-0 xl:px-28 py-28">
        <section className="flex">
          <div className="z-10 grid grid-cols-3 gap-x-5 md:grid-cols-3 xl:grid-cols-5 xl:gap-x-5 gap-y-10">
            {BooksData.map((book) => (
              <Link key={book.id} href={`/explore/${book.id}`}>
                <Image
                  className="rounded-lg hover:shadow-3xl hover:shadow-[#bdbdbd]"
                  key={book.id}
                  width={100}
                  height={100}
                  src={book.img}
                  alt={book.title}
                />
              </Link>
            ))}
          </div>
        </section>

        <section className="z-10 flex flex-col gap-3">
          <p className="text-primary font-bold text-2xl">Genres</p>
          <div className="flex flex-wrap gap-x-3 gap-y-3 w-80 md:w-56 xl:w-60">
            {Genres.map((genre, index) => (
              <p
                key={index}
                className="border-[1.5px] border-primary rounded-md py-1 text-sm font-semibold text-primary text-center px-2"
              >
                {genre}
              </p>
            ))}
          </div>
        </section>

        <div className="absolute md:top-28 xl:top-20 right-0">
          <Image
            width={250}
            height={250}
            src="/images/explore-1.svg"
            alt="explore illustration"
            className="w-40 md:w-56 xl:w-64"
          />
        </div>

        <div className="absolute md:top-80 xl:top-28 left-0">
          <Image
            width={250}
            height={250}
            src="/images/explore-2.svg"
            alt="explore illustration"
            className="w-40 md:w-80 xl:w-64"
          />
        </div>

        <div className="absolute bottom-96 xl:bottom-0 md:bottom-28 left-0">
          <Image
            width={300}
            height={300}
            src="/images/explore-3.svg"
            alt="explore illustration"
            className="w-40 md:w-96 xl:w-64"
          />
        </div>
      </main>
    </>
  );
};

export default Explore;
