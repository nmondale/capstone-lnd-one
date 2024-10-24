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
import { introductionContent, booksContent } from "./content";

const LiteratureReview: React.FC = () => {
  const { currentTheme } = useTimeContext();
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  const updateActiveSection = useCallback(() => {
    if (typeof window === "undefined" || !containerRef.current) return;
    const container = containerRef.current;
    const { scrollTop, clientHeight } = container;
    const middleOfScreen = scrollTop + clientHeight / 2;

    for (let i = 0; i <= booksContent.length; i++) {
      const element = container.querySelector(`#section-${i}`);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + container.scrollTop;
        if (
          elementTop <= middleOfScreen &&
          elementTop + rect.height > middleOfScreen
        ) {
          setActiveSection(i);
          break;
        }
      }
    }
  }, []);

  const debouncedUpdateActiveSection = useMemo(
    () => debounce(updateActiveSection, 50),
    [updateActiveSection]
  );

  const scrollToSection = useCallback((sectionNumber: number) => {
    if (typeof window === "undefined" || !containerRef.current) return;
    const element = containerRef.current.querySelector(
      `#section-${sectionNumber}`
    );
    if (element) {
      const rect = element.getBoundingClientRect();
      const scrollTop = containerRef.current.scrollTop;
      const elementTop = rect.top + scrollTop;
      containerRef.current.scrollTo({
        top: elementTop,
        behavior: "smooth",
      });
      setActiveSection(sectionNumber);
    }
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", debouncedUpdateActiveSection);
      return () =>
        container.removeEventListener("scroll", debouncedUpdateActiveSection);
    }
  }, [debouncedUpdateActiveSection, isClient]);

  const bookHeights = useMemo(
    () => [0, ...booksContent.map(() => Math.floor(Math.random() * 50) + 100)],
    []
  );

  if (!isClient) {
    return null; // or a loading spinner
  }

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
                {[0, ...booksContent.map((_, i) => i + 1)].map((num) => (
                  <div
                    key={num}
                    style={{
                      height: `${bookHeights[num]}px`,
                      marginLeft: num === 0 ? "0" : "-1px",
                    }}
                    className={`w-8 flex flex-col justify-end border border-alt cursor-pointer ${
                      activeSection === num
                        ? "bg-alt text-main"
                        : "bg-main text-alt"
                    }`}
                    onClick={() => scrollToSection(num)}
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
              <h2
                className={`font-bold mb-2 cursor-pointer ${
                  activeSection === 0 ? "underline" : ""
                }`}
                onClick={() => scrollToSection(0)}
              >
                Introduction
              </h2>
              {booksContent.map((book, index) => (
                <p
                  key={index}
                  className={`mb-2 cursor-pointer ${
                    activeSection === index + 1 ? "underline" : ""
                  }`}
                  onClick={() => scrollToSection(index + 1)}
                >
                  {`${index + 1}. `}
                  <span className="italic">{book.title}</span>
                  {" by "}
                  {book.author}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="container-box overflow-y-auto" ref={containerRef}>
          <div className="p-8 border-b border-alt" id="section-0">
            <div className="flex items-center">
              <h2 className="text-3xl font-bold mb-4 ml-2">Introduction</h2>
            </div>
            <p
              className="text-sm"
              dangerouslySetInnerHTML={{ __html: introductionContent }}
            ></p>
          </div>
          {booksContent.map((book, index) => (
            <div
              key={index}
              className="p-8 border-b border-alt"
              id={`section-${index + 1}`}
            >
              <div className="flex items-center">
                <h2 className="text-3xl font-bold mb-2 ml-2">{book.title}</h2>
              </div>
              <h3 className="text-xl italic mb-4">by {book.author}</h3>
              <p
                className="text-sm"
                dangerouslySetInnerHTML={{ __html: book.content }}
              ></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(LiteratureReview);
