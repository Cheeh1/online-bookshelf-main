import Image from "next/image";
import { Open_Sans } from "next/font/google";
import Link from "next/link";

const openSans = Open_Sans({ subsets: ["latin"] });

const genres = [
  "Fiction",
  "Non-Fiction",
  "Horror",
  "Historical Romance",
  "Self-Help",
  "Romance",
  "Young Adult",
  "Fantasy",
];

export default function Home() {
  return (
    <main className={`flex flex-col ${openSans.className}`}>
      <section className="relative hero-bg flex flex-row justify-between items-center xl:pt-28 md:pt-20 md:py-0 py-56">
        <div className="flex flex-col gap-3 pl-8 xl:pl-20">
          <h1 className="text-primary text-[35px] md:text-[50px] xl:text-[54px] xl:w-96 font-extrabold tracking-widest leading-tight">
            Your <span className="text-secondary">online</span> bookshelf
          </h1>
          <p className="text-black w-48 md:w-72 xl:w-72 font-medium text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
            velit senectus in nunc ut dictum aliquam id platea. In eget amet,
            imperdiet tellus. Sit sit orci in eu. Quis pellentesque.
          </p>
          <Link href="/explore">
            <button className="bg-secondary rounded-3xl text-white font-bold py-2 px-4 text-sm w-48 tracking-widest">
              Start Organizing
            </button>
          </Link>
        </div>

        <Image
          height={500}
          width={500}
          src="/images/hero-design.png"
          alt="header img"
          className="hidden md:block xl:block md:-mt-5 xl:-mt-12"
        />
        <Image
          height={145}
          width={145}
          src="/images/mobile-hero-design.png"
          alt="header img"
          className="block absolute xl:hidden md:hidden top-0 right-0"
        />
      </section>

      <section className="flex xl:flex-row md:flex-row flex-col gap-10 md:gap-0 xl:gap-0 justify-evenly items-center py-24">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl text-primary font-extrabold tracking-wider w-80">
              All your favourites in <span className="text-secondary">one</span>{" "}
              place
            </h1>
            <p className="w-72 text-black text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              eleifend cras praesent purus nec, quis aliquet.
            </p>
          </div>
          <div className="flex justify-start flex-wrap gap-x-3 gap-y-3 w-80">
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
          src="/images/reading-illustration.svg"
          alt="illustration"
          className="md:w-80 xl:w-96"
        />
      </section>

      <section className="tiktok-bg flex flex-col md:flex-row xl:flex-row gap-10 md:gap-0 xl:gap-0 justify-evenly items-center py-20">
        <Image
          className="-mt-20"
          height={500}
          width={500}
          src="/images/tiktok-img.png"
          alt="tiktok-section-img"
        />
        <div className="flex flex-col gap-5 ml-10 md:ml-0 xl:ml-0">
          <h1 className="text-primary font-extrabold text-3xl tracking-wider w-72 xl:w-96">
            What side of <span className="text-secondary">tiktok</span> are you
            on?
          </h1>
          <p className="text-black md:w-56 w-72 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
            velit senectus in nunc ut dictum aliquam id platea.
          </p>

          <Link href="/explore">
            <button className="bg-secondary rounded-3xl text-white font-bold py-2 px-4 text-sm w-28 tracking-widest">
              Explore
            </button>
          </Link>
        </div>
      </section>

      <section className="flex flex-col gap-20 py-20">
        <div className="flex flex-col gap-3 xl:px-64 items-center">
          <h1 className="text-primary font-extrabold tracking-wider text-3xl w-56">
            Top picks of the <span className="text-secondary">month</span>
          </h1>
          <p className="text-black text-sm w-72">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
            velit senectus in nunc ut dictum aliquam id platea.
          </p>
        </div>
        <div className="flex flex-col md:flex-row xl:flex-row gap-20 md:gap-0 xl:gap-0 justify-evenly items-center">
          <div className="relative rounded-xl flex flex-col gap-1 bg-[#F9F6E7] shadow-md shadow-[#bdbdbd] py-5 px-5 w-64">
            <Image
              className="absolute -right-3 -top-14"
              height={140}
              width={140}
              src="/images/image-23.png"
              alt="The Cruel prince"
            />
            <Image
              height={115}
              width={115}
              src="/images/star-yellow.svg"
              alt="star-rating"
            />
            <h4 className="text-secondary text-sm font-bold">
              The Cruel Prince
            </h4>
            <div className="flex gap-3">
              <div className="flex flex-col text-[10px] font-semibold">
                <p className="text-[#00000073]">Holly Black</p>
                <p className="text-[#00000073]">Fantasy</p>
              </div>
              <Image
                height={20}
                width={20}
                src="/images/carbon-add-filled-yellow.svg"
                alt="button"
              />
            </div>
          </div>
          <div className="relative rounded-xl flex flex-col gap-1 bg-[#C8E0EB] shadow-md shadow-[#bdbdbd] py-5 px-5 w-64">
            <Image
              className="absolute bottom-5 right-5"
              height={80}
              width={80}
              src="/images/image-45.png"
              alt="Ugly love"
            />
            <Image
              height={115}
              width={115}
              src="/images/star-dark.svg"
              alt="star-rating"
            />
            <h4 className="text-primary text-sm font-bold">Ugly Love</h4>
            <div className="flex gap-3">
              <div className="flex flex-col text-[10px] font-semibold">
                <p className="text-[#00000073]">Colleen Hover</p>
                <p className="text-[#00000073]">Romance</p>
              </div>
              <Image
                height={20}
                width={20}
                src="/images/carbon-add-filled-black.svg"
                alt="button"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="review-bg">
        <div className="bg-[#fffffff3] flex flex-col gap-20 py-20">
          <div className="flex flex-col gap-3 items-center">
            <h1 className="text-primary text-3xl font-extrabold w-72 text-center">
              See what <span className="text-secondary">others</span> are saying
            </h1>
            <p className="text-sm text-center text-black w-56">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
            <Link href="/explore">
              <button className="bg-secondary rounded-3xl text-white font-bold py-2 px-4 text-sm w-48 tracking-widest">
                Start Organizing
              </button>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row xl:flex-row gap-10 md:gap-0 xl:gap-0 justify-evenly">
            <div className="flex flex-col items-center gap-2">
              <Image
                width={150}
                height={150}
                src="/images/star-full-yellow.svg"
                alt="star-yellow"
              />
              <h3 className=" text-sm font-bold">Ann Winters</h3>
              <p className="text-sm text-black w-52 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,
                duis morbi ac enim, ut proin. Ut et dui mauris convallis odio
                sem hac.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Image
                width={150}
                height={150}
                src="/images/star-full-yellow.svg"
                alt="star-yellow"
              />
              <h3 className=" text-sm font-bold">Regan Moore</h3>
              <p className="text-sm text-black w-52 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,
                duis morbi ac enim, ut proin. Ut et dui mauris convallis odio
                sem hac.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Image
                width={150}
                height={150}
                src="/images/star-full-yellow.svg"
                alt="star-yellow"
              />
              <h3 className=" text-sm font-bold">Embry Handen</h3>
              <p className="text-sm text-black w-52 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,
                duis morbi ac enim, ut proin. Ut et dui mauris convallis odio
                sem hac.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
