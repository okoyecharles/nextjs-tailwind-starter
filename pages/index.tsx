import Head from "next/head";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Tailwind starter</title>
        <meta
          name="description"
          content="A starter template for building an app with Next.js, Tailwind CSS, and TypeScript"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen h-screen bg-black flex flex-col justify-center items-center text-white">
        <h1 className="text-3xl mb-2 shadow-2xl shadow-blue-500/50 p-3 bg-opacity-0 rounded ring-1 ring-blue-500/20">
          Nextjs Tailwind Starter template
        </h1>
        <span className="text-gray-400">
          Created by{" "}
          <a
            className="text-blue-500 hover:underline"
            href="https://okoyecharles.com"
            target="_blank"
            rel="noreferrer"
          >
            Okoye Charles
          </a>
        </span>

        <div className="cards w-screen flex gap-8 justify-center mt-8">
          <article className="card max-w-[15rem] h-[10rem] ring-1 ring-gray-800 p-4 rounded bg-gray-900 flex flex-col justify-around hover:ring-blue-300/30">
            <a
              href="https://github.com/okoyecharles/nextjs-tailwind-starter"
              target="_blank"
              rel="noreferrer"
              className="flex text-lg gap-4 items-center cursor-pointer"
            >
              <h3 className="font-semibold">How to use</h3>
              <span className="text-blue-500">&rarr;</span>
            </a>
            <p className="text-gray-400">
              Learn the basics and get started using this template on the go.
            </p>
          </article>

          <article className="card max-w-[15rem] h-[10rem] ring-1 ring-gray-800 p-4 rounded bg-gray-900 flex flex-col justify-around hover:ring-blue-300/30">
            <a
              href="https://github.com/okoyecharles/nextjs-tailwind-starter"
              target="_blank"
              rel="noreferrer"
              className="flex text-lg gap-4 items-center cursor-pointer"
            >
              <h3 className="font-semibold">Lorem Ipsum</h3>
              <span className="text-blue-500">&rarr;</span>
            </a>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Sapiente.
            </p>
          </article>
        </div>
      </main>
    </>
  );
}
