import React from "react";
import Sketch1 from "../../../assets/sketches/footprint.svg";
import Sketch2 from "../../../assets/sketches/switches.svg";
import Sketch3 from "../../../assets/sketches/treetangle.svg";
import Sketch4 from "../../../assets/sketches/mitter.svg";
import Sketch5 from "../../../assets/sketches/lightpost.svg";
import Sketch6 from "../../../assets/sketches/key.svg";
import Sketch7 from "../../../assets/sketches/smokestack.svg";
import Sketch8 from "../../../assets/sketches/guidebars.svg";
import Sketch9 from "../../../assets/sketches/fishing.svg";

const Artifact2: React.FC = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Observational Sketches</h2>
      <p className="text-sm mb-6">
        On each of my many visits to LD1, I always made sure to draw everything
        I found interesting.
      </p>

      <div className="grid grid-cols-3 gap-4">
        <figure>
          <div className="overflow-hidden border border-alt aspect-square p-2">
            <Sketch1 className="w-full h-full" />
          </div>
          <figcaption className="text-sm mt-2">
            <strong>Sketch 1.</strong> A small footprint left on the sand of the
            riverbank — a busy and warm day, lots of people around.
          </figcaption>
        </figure>

        <figure>
          <div className="overflow-hidden border border-alt aspect-square p-2">
            <Sketch2 className="w-full h-full" />
          </div>
          <figcaption className="text-sm mt-2">
            <strong>Sketch 2.</strong> Eight switches from the model control
            panel displayed under thick acrylic plastic near the control tower.
          </figcaption>
        </figure>

        <figure>
          <div className="overflow-hidden border border-alt aspect-square p-2">
            <Sketch3 className="w-[175%] h-[175%] translate-x-[-15%] translate-y-[-15%]" />
          </div>
          <figcaption className="text-sm mt-2">
            <strong>Sketch 3.</strong> The eastern riverbank here has so many of
            these trees with gnarly roots, tangled up and around themselves.
          </figcaption>
        </figure>

        <figure>
          <div className="overflow-hidden border border-alt aspect-square p-2">
            <Sketch4 className="w-[175%] h-[175%] translate-x-[-35%] translate-y-[-20%]" />
          </div>
          <figcaption className="text-sm mt-2">
            <strong>Sketch 4.</strong> They provide a small diagram of the miter
            gate operating mechanism on one of their informational panels. I'm
            still not really sure how it works.
          </figcaption>
        </figure>

        <figure>
          <div className="overflow-hidden border border-alt aspect-square p-2">
            <Sketch5 className="w-[125%] h-[125%] translate-x-[-15%] translate-y-[-5%]" />
          </div>
          <figcaption className="text-sm mt-2">
            <strong>Sketch 5.</strong> This lightpost housed a large family of
            loud wasps, hungry, I'm sure.
          </figcaption>
        </figure>

        <figure>
          <div className="overflow-hidden border border-alt aspect-square p-2">
            <Sketch6 className="w-[175%] h-[175%] translate-x-[-45%] translate-y-[-25%]" />
          </div>
          <figcaption className="text-sm mt-2">
            <strong>Sketch 6.</strong> They have an anchor arm on display here
            at the entrance of the visitors center painted in bright yellow and
            red.
          </figcaption>
        </figure>

        <figure>
          <div className="overflow-hidden border border-alt aspect-square p-2">
            <Sketch7 className="w-[200%] h-[200%] translate-x-[-15%] translate-y-[5%]" />
          </div>
          <figcaption className="text-sm mt-2">
            <strong>Sketch 7.</strong> On the tip of the smokestack is a little
            surveillance camera, looking at me, looking at you.
          </figcaption>
        </figure>

        <figure>
          <div className="overflow-hidden border border-alt aspect-square p-2">
            <Sketch8 className="w-[150%] h-[150%] translate-x-[-15%] translate-y-[-15%]" />
          </div>
          <figcaption className="text-sm mt-2">
            <strong>Sketch 8.</strong> It feels like I'm so high over here, so I
            grip onto the railing, and pat my right pocket to make sure my
            pencil doesn't fall out.
          </figcaption>
        </figure>

        <figure>
          <div className="overflow-hidden border border-alt aspect-square p-2">
            <Sketch9 className="w-[175%] h-[175%] translate-x-[-25%] translate-y-[-15%]" />
          </div>
          <figcaption className="text-sm mt-2">
            <strong>Sketch 9.</strong> Down there, there is someone fishing.
            He's one of many that I've seen today casting their line into the
            river.
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Artifact2;
