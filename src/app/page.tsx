"use client";
import React, { useState, useEffect } from "react";
import "./styles/homepage-styles.css";
import { ThemeToggle } from "../components/ThemeToggle";
import { TimeIcon } from "../components/TimeIcon";
import { TimeProvider, useTimeContext } from "../hooks/useTimeContext";
import { formatTime } from "../utils/timeUtils";
import dynamic from "next/dynamic";
import Link from "next/link";

const FishNavigation = dynamic(() => import("../components/FishNavigation"), {
  ssr: false,
});

const HomePage = () => {
  const [isClient, setIsClient] = useState(false);
  const timeContext = useTimeContext();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || !timeContext) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-main text-alt">
        <p>Loading...</p>
      </div>
    );
  }

  const { currentTime, timeOfDay } = timeContext;
  const clientTime = formatTime(currentTime);

  return (
    <div className="min-h-screen p-0 m-0 bg-alt text-alt">
      <div className="flex flex-col h-screen">
        <div className="flex flex-row h-[35%]">
          <div className="w-[42%] container-box flex flex-col">
            <div className="flex justify-between items-center p-10">
              <h1 className="text-sm ">
                Seeing Yourself <br /> in Your Structure:{" "}
                <p className="font-bold">Lock and Dam One/Ford Dam</p>
              </h1>
              <h2 className="text-sm text-right">
                Nelson Mondale <br /> MCST Macaleseter <br /> Fall 2024
              </h2>
            </div>
            <div>
              <p className="text-4xl pb-6 text-center font-bold">
                {clientTime}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h1 className="text-sm pl-10">it's currently</h1>
              <h2 className="text-sm text-right pr-10">
                {timeOfDay} at lock n dam 1
              </h2>
            </div>
          </div>
          <div className="w-[38%] container-box">
            <p className="text-sm p-8 text-justify">
              <i> Seeing Yourself in Your Structure </i> reimagines Lock and Dam
              1 as an online gallery that examines how built infrastructure,
              both physical and digital, constrains and shapes our interactions,
              values, and ideologies. Using this website as an exhibition space,
              it parallels the dam’s control of river flow with the digital
              world’s influence over knowledge, identity, and communal
              understanding, inviting viewers to engage critically with
              speculative design as a method for envisioning alternative and
              ethically reflective infrastructures.{" "}
            </p>
          </div>
          <div className="w-[20%] container-box flex items-center justify-center">
            <div className="w-[75%]">
              <TimeIcon />
            </div>
          </div>
        </div>
        <div className="flex flex-row  h-[65%]">
          <div className="w-[4%] container-box flex flex-col justify-end pb-4">
            <ThemeToggle />
          </div>
          <div className="w-[20%] container-box flex flex-col">
            <h1 className="text-sm p-8">
              look into the river, and click on a fish to reimagine the lock and
              dam.
            </h1>
            <div className="w-[100%] h-[10%] flex items-center justify-between navigation-box">
              <p className="text-sm pl-8">Academic</p>
              <p className="text-sm pr-8 text-right">-&gt;</p>
            </div>
            <div className="w-[100%] h-[10%] flex items-center justify-between navigation-box">
              <p className="text-sm pl-8">About Project</p>
              <p className="text-sm pr-8 text-right">-&gt;</p>
            </div>
            <Link
              href="/litreview"
              className="w-[100%] h-[10%] flex items-center justify-between navigation-box"
            >
              <p className="text-sm pl-8">Literature Review</p>
              <p className="text-sm pr-8 text-right">-&gt;</p>
            </Link>
          </div>
          <div className="w-[76%] container-box overflow-hidden">
            <div className="w-full h-full">
              <FishNavigation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(HomePage);
