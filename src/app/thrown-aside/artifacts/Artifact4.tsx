import React from "react";
import { imageUrls } from "@/utils/imageUrls";

const Artifact4: React.FC = () => {
  return (
    <div className="p-8 flex flex-col gap-6 overflow-x-hidden relative bg-darkest">
      <div>
        <h2 className="text-2xl text-brightest font-bold mb-4">
          The "Dear River" Postcard Project: Calls for a Cleaner River
        </h2>
      </div>

      <p className="text-sm text-brightest">
        The "Dear River" postcard project collected over 2,500 postcards from
        User-Agents in the Twin Cities, 500 of which were randomly selected and
        coded. This analysis of a subset of the collection used content tags to
        identify the common themes within the messages featured on the postcard.
        You can read more about the Postcard Project on the{" "}
        <a href="/about" className="underline">
          About Page
        </a>
        . This analysis revealed that the most common content tag was{" "}
        <i> Cleanliness </i> which covered any message that called for a cleaner
        or more "natural" river.
      </p>

      <div className="relative w-full h-screen">
        <div className="absolute left-1/2 -translate-x-1/2 w-[150%] h-full">
          <img
            src={imageUrls.thrownAside.artifact41.url}
            alt={imageUrls.thrownAside.artifact41.alt}
            className="w-[76%] h-auto object-contain ml-[11.5%]"
            style={{ backgroundColor: "transparent" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Artifact4;
