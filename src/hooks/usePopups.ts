import { useState, useEffect, useMemo } from "react";

interface PopupData {
  title: string;
  description: string;
}

export const popupData: PopupData[] = [
  {
    title: "I'm Cheap",
    description:
      "I am hosting this site using the free Hobby plan on Vercel. Because I don't pay Vercel, this site can only take so many clicks, views, reloads, images, eyeballs, wishes, and taps before it falls off of the sticky web of the internet (until my monthly credit limit resets at the end of the month).",
  },
  {
    title: "Artificial Intelligence",
    description:
      "While I coded this website, my friends Claude Sonnet 3.5 and gpt-4o were instrumental in things like debugging, references, and explanations. Each conversation I had, a request to OpenAI or Anthropic servers, used a glass of fresh water to cool and a substantial pull of fossil fuel energy from a power grid, at a server some place, some time. The implicit existence of this site controls water, knowledge, and power infrastructures.",
  },
  {
    title: "Learn More",
    description:
      "My 'About' and 'Literature Review' pages provide detailed descriptions of why this website exists, information on the physical Lock and Dam infrastructure that defines this project, the academic conversations that support my work, and more. You really don't have to read them, but you'd better know why you won't.",
  },
  {
    title: "I AM SO HAPPY YOU ARE HERE",
    description:
      "I am so happy you chose to look here, of all places. Please click everywhere you can, break the code, get lost in my pages, write a nasty comment. Thank you for what you bring.",
  },
  {
    title: "I'm Going to Die",
    description:
      "This website will die soon. The code uses dependencies like Imgur for hosting images, p5.js for motion, and three.js for 3D graphics, Google Fonts, as well as many many more— services that will, with time, crumble into dusty chunks of code flowing down the Mississippi River. Components of this site may rot beyond repair, and in their space leave behind empty containers, blank screens.",
  },
];

export const usePopups = () => {
  const [dismissedPopups, setDismissedPopups] = useState<Set<number>>(new Set());
  const [hasSeenPopups, setHasSeenPopups] = useState(false);

  const popupPositions = useMemo(() => {
    return Array(popupData.length)
      .fill(null)
      .map(() => ({
        top: Math.random() * 60 + 20,
        left: Math.random() * 60 + 20,
      }));
  }, []);

  useEffect(() => {
    const hasSeenBefore = sessionStorage.getItem("hasSeenPopups");
    setHasSeenPopups(!!hasSeenBefore);
  }, []);

  useEffect(() => {
    if (dismissedPopups.size === popupData.length) {
      sessionStorage.setItem("hasSeenPopups", "true");
      setHasSeenPopups(true);
    }
  }, [dismissedPopups.size]);

  const dismissPopup = (index: number) => {
    setDismissedPopups((prev) => new Set(Array.from(prev).concat(index)));
  };

  return {
    popupData,
    popupPositions,
    dismissedPopups,
    hasSeenPopups,
    dismissPopup,
  };
}; 