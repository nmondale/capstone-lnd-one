import React from "react";
import { imageUrls } from "@/utils/imageUrls";

const Artifact4: React.FC = () => {
  return (
    <div className="p-8 flex flex-col gap-6 bg-transparent overflow-x-hidden relative">
      <div>
        <h2 className="text-2xl font-bold mb-4">
          A Piece of Garbage: Plastic Bag
        </h2>
        <p className="text-sm">
          Discovered at{" "}
          <a
            href="https://www.google.com/maps/place/44°54'51.2%22N+93°12'04.8%22W"
            className="underline"
          >
            44°54'51.2"N 93°12'04.8"W
          </a>
          , October 15th, 2024 4:15 PM
        </p>
      </div>

      <p className="text-sm">
        This plastic bag was found tangled in the branches of a fallen tree near
        the river's edge. The bag appears to be from Target, though the logo is
        partially obscured by mud and wear. Despite environmental initiatives
        and the store's switch to paper bags in recent years, these resilient
        artifacts of consumer culture continue to persist in our waterways.
      </p>

      <div className="relative w-full overflow-visible">
        <div className="absolute left-1/2 -translate-x-1/2 w-[150%]">
          <img
            src={imageUrls.thrownAside.artifact41.url}
            alt={imageUrls.thrownAside.artifact41.alt}
            className="w-[76%] h-auto ml-[11.5%]"
            style={{ backgroundColor: "transparent" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Artifact4;
