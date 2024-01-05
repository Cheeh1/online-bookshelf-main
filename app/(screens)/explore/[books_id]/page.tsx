"use client";
import { FC } from "react";
import { BooksData } from "@/app/data/books/book";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { addToLibrary } from "@/app/redux/librarySlice";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

interface Params {
  params: {
    books_id: string;
  };
}

const BookDetails: FC<Params> = ({ params }) => {
  const id = params.books_id;
  const parseId = id ? parseInt(id) : 1;
  const books = BooksData.find((book) => book.id === parseId);

  const dispatch = useDispatch();
  const libraryState = useSelector((state: RootState) => state.library);

  const router = useRouter();

  // Handle case where books is undefined
  if (!books) {
    return (
      <div>
        <p>Book not found</p>
      </div>
    );
  }

  const handleAddToLibrary = () => {
    const isBookInLibrary =
      libraryState.toRead.find((book) => book.id === parseId) ||
      libraryState.inProgress.find((book) => book.id === parseId) ||
      libraryState.completed.find((book) => book.id === parseId);

    if (isBookInLibrary) {
      toast.error("Book already exists in the Library", {
        className: "text-sm",
        duration: 1000,
        position: "top-right",
      });
    } else {
      dispatch(addToLibrary(books));
      toast.success("Book added to Library", {
        className: "text-sm",
        duration: 1000,
        position: "top-right",
      });
    }
  };

  return (
    <>
      <Toaster />
      <main className="relative flex flex-col md:flex-row xl:flex-row gap-10 xl:gap-20 pt-36 pb-20 items-center xl:px-40 xl:items-start">
        <FaArrowLeft
          onClick={() => router.back()}
          className="z-10 absolute top-28 text-3xl text-white left-10 xl:left-20 rounded-2xl bg-secondary p-1"
        />

        <Image
          className="absolute bottom-0 xl:top-10 left-0 w-36 xl:w-52"
          width={200}
          height={200}
          src="/images/book-details-1.svg"
          alt="illustration"
        />
        <Image
          className="absolute top-0 xl:top-16 right-0 w-56 xl:w-64"
          width={200}
          height={200}
          src="/images/book-details-2.svg"
          alt="illustration"
        />
        <section className="z-10 flex flex-col gap-5">
          <Image
            width={150}
            height={150}
            src={books?.img ?? "/images/book-1.png"}
            alt="book-1"
            className="rounded-lg"
          />

          <button
            onClick={handleAddToLibrary}
            className="bg-secondary rounded-3xl text-white font-bold py-2 px-4 text-sm w-48 tracking-widest"
          >
            Add to library
          </button>
        </section>

        <section className="flex flex-col gap-5">
          <div className="flex flex-col text-center xl:text-left md:text-left">
            <p className="text-primary text-xl font-bold">{books?.title}</p>
            <p className="text-sm text-[#A6A6A6] font-bold">{books.author}</p>
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-3 w-80 xl:w-96">
            {books?.genre.map((genre, index) => (
              <p
                key={index}
                className="border-[1.5px] border-primary rounded-3xl py-1 text-sm font-semibold text-primary text-center px-2"
              >
                {genre}
              </p>
            ))}
          </div>
          <div className="flex z-10 flex-col gap-2 text-sm w-80 xl:w-[550px]">
            <p> She fears the dark. He rules it.</p>
            <p>
              Her dresses are too tight, her heels too tall. She laughs too
              loudly, eats without decorum, and mixes up most sayings in the
              book. Little do most know it’s just a sparkly disguise, there to
              hide one panic attack at a time.
            </p>
            <p>
              {" "}
              Nobody can crack Gianna’s facade . . . no one anyway, until he
              comes along.
            </p>
            <p>
              Most see a paragon of morality; a special agent upholding the law.
              In the New York underworld, others know him as a hustler, a
              killer, his nature as cold as the heart of ice in his chest.
              Christian Allister has always followed the life plan he’d
              envisioned in his youth, beneath the harsh lights of a frigid,
              damp cell. With a proclivity for order and the number three, he’s
              never been tempted to veer off course. But perhaps one should
              never say never . . .
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default BookDetails;
