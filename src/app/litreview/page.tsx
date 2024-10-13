"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { useTimeContext } from "../../hooks/useTimeContext";
import Link from "next/link";
import "../styles/homepage-styles.css";
import { ThemeToggle } from "../../components/ThemeToggle";
import { debounce } from "lodash";

const books = [
  "A Manifesto for Cyborgs by Donna Haraway",
  "On Spatial Planning and Marx-ism: Looking Back, Going Forward by Ståle Holgersen",
  "Speculative Everything by Anthony Dunne and Fiona Raby",
  "From Counterculture to Cyberculture by Fred Turner",
  "Mapping Controversies in Architecture by Albena Yaneva",
  "If Everything is so Smooth, why am I so Sad? by Anastasia Kubrak",
];

const LiteratureReview: React.FC = () => {
  const { currentTheme } = useTimeContext();
  const [activeBook, setActiveBook] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const bookHeights = useMemo(
    () => books.map(() => Math.floor(Math.random() * 50) + 100),
    []
  );

  const updateActiveBook = useCallback(
    debounce(() => {
      if (!containerRef.current) return;
      const { scrollTop, clientHeight } = containerRef.current;
      const middleOfScreen = scrollTop + clientHeight / 2;

      for (let i = 1; i <= books.length; i++) {
        const element = document.getElementById(`book-${i}`);
        if (
          element &&
          element.offsetTop <= middleOfScreen &&
          element.offsetTop + element.clientHeight > middleOfScreen
        ) {
          setActiveBook(i);
          break;
        }
      }
    }, 50),
    []
  );

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", updateActiveBook);
      return () => container.removeEventListener("scroll", updateActiveBook);
    }
  }, [updateActiveBook]);

  const scrollToBook = useCallback((bookNumber: number) => {
    const element = document.getElementById(`book-${bookNumber}`);
    if (element && containerRef.current) {
      containerRef.current.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
      setActiveBook(bookNumber);
    }
  }, []);

  return (
    <div
      className={`min-h-screen bg-alt text-alt font-cardo ${
        currentTheme === "dark" ? "text-white" : "text-black"
      }`}
    >
      <div className="grid grid-cols-[27%_73%] h-screen">
        <div className="container-box flex flex-col">
          <Link
            href="/"
            className="text-nav font-bold flex items-center justify-center p-4 border-b border-alt"
          >
            &lt;- Return Home
          </Link>
          <div className="flex flex-col p-6 pl-8 pt-10">
            <div className="flex justify-between items-end">
              <div className="w-1/2 flex justify-start items-end">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div
                    key={num}
                    style={{
                      height: `${bookHeights[num - 1]}px`,
                      marginLeft: num === 1 ? "0" : "-1px",
                    }}
                    className={`w-8 flex flex-col justify-end border border-alt cursor-pointer ${
                      activeBook === num
                        ? "bg-alt text-main"
                        : "bg-main text-alt"
                    }`}
                    onClick={() => scrollToBook(num)}
                  >
                    <div className="text-center pb-1">{num}</div>
                  </div>
                ))}
              </div>
              <div className="w-1/2 flex flex-col items-start ml-4">
                <p className="mb-2">Theme Select:</p>
                <div className="flex">
                  <ThemeToggle />
                  <div className="flex flex-col justify-between h-[110px] ml-2">
                    <span className="text-sm italic">Dark</span>
                    <span className="text-sm italic">Time</span>
                    <span className="text-sm italic">Light</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h2 className="font-bold mb-2">Introduction</h2>
              {books.map((book, index) => {
                const [author, title] = book.split(" by ");
                return (
                  <p
                    key={index}
                    className={`mb-2 cursor-pointer ${
                      activeBook === index + 1 ? "underline" : ""
                    }`}
                    onClick={() => scrollToBook(index + 1)}
                  >
                    {`${index + 1}. `}
                    <span className="italic">{author}</span>
                    {" by "}
                    {title}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div className="container-box overflow-y-auto" ref={containerRef}>
          {books.map((book, index) => {
            const [title, author] = book.split(" by ");
            return (
              <div
                key={index}
                className="p-8 border-b border-alt"
                id={`book-${index + 1}`}
              >
                <h2 className="text-3xl font-bold mb-2">{title}</h2>
                <h3 className="text-xl italic mb-4">by {author}</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default React.memo(LiteratureReview);
