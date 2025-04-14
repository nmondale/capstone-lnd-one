import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { imageUrls } from "@/utils/imageUrls";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/models/bottle.glb");
  const modelRef = useRef<THREE.Group>();

  useEffect(() => {
    if (modelRef.current) {
      // Center the model's geometry
      const box = new THREE.Box3().setFromObject(modelRef.current);
      const center = box.getCenter(new THREE.Vector3());
      modelRef.current.position.sub(center);
    }
  }, [gltf]);

  return (
    <group position={[0, 0, 0]} rotation={[Math.PI / 32 - 0.6, 0, Math.PI / 2]}>
      <primitive ref={modelRef} object={gltf.scene} scale={4.5} />
    </group>
  );
};

const Artifact2: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Left container with 3D model */}
      <div className="w-2/5 sticky top-0 h-screen border-r border-alt">
        <Canvas
          camera={{ position: [0, 2, 5], fov: 45 }}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={4} />
          <Model />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
          />
        </Canvas>
      </div>

      {/* Right container with text */}
      <div className="w-3/5 p-8 overflow-y-auto h-screen">
        <p className="text-sm mb-4 font-bold">
          The 3D object on this page was scanned using the Polycam app on my
          phone. Please interact with the model, ask it questions, and listen.
        </p>
        <h1 className="text-2xl font-bold">
          A Piece of Garbage: Jameson Whiskey Shooter
        </h1>
        <h2 className="text-xl my-4">
          Discovered{" "}
          <a
            href="https://www.google.com/maps/place/44°55'09.7%22N,+93°12'14.7%22W"
            className="underline"
          >
            44°55'09.7"N, 93°12'14.7"W
          </a>
          ,
          <br /> October 4th, 2024 5:06 PM
        </h2>
        <p className="text-sm mb-8">
          <strong> Note From Collector: </strong> This bottle was collected on
          one of my routine visits to the Lock and Dam, on the intersection of
          Godfrey Parkway and the unnamed road that leads down to the Lock and
          Dam. This area is USACE property, so it is extremely well maintained,
          free from autumn detritus and garbage. At this point, there is a small
          informational pavilion featuring maps of the surrounding area, lock
          and dam histories, and general information (<i>Figure 1</i>). Stations
          like this can be found across the area, as well as up and down
          riverside avenues in the Twin Cities. The mini shooter bottle was on
          top of a map frame within this pavilion (<i>Figure 2</i>), empty and
          capless. During this visit, I encountered three workers in a golf cart
          wearing orange vests that were sweeping the road that leads to LD1,
          checking on the garbage cans (of which there are upwards of 5, all
          built with an opening mechanism that ensures no wildlife can enter, a
          function that makes the garbage cans extremely difficult to use),
          picking up litter, and looking at me (am I not supposed to be here?).
          I suppose they simply missed the small bottle, perched on a map of
          their space (<i>Figure 3</i>).
        </p>

        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2">
            <figure className="flex-1">
              <div className="overflow-hidden rounded-lg border border-alt h-64">
                <img
                  src={imageUrls.thrownAside.artifact22.url}
                  alt={imageUrls.thrownAside.artifact22.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="text-sm mt-2">
                <strong>Figure 1.</strong> A map with the current location
              </figcaption>
            </figure>
            <figure className="flex-1">
              <div className="overflow-hidden rounded-lg border border-alt h-64">
                <img
                  src={imageUrls.thrownAside.artifact21.url}
                  alt={imageUrls.thrownAside.artifact21.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="text-sm mt-2">
                <strong>Figure 2.</strong> On top of this frame was the bottle
              </figcaption>
            </figure>
          </div>

          <figure className="w-full">
            <div className="overflow-hidden rounded-lg border border-alt h-72">
              <img
                src={imageUrls.thrownAside.artifact23.url}
                alt={imageUrls.thrownAside.artifact23.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="text-sm mt-2">
              <strong>Figure 3.</strong> The unnamed road that leads down to LD1
            </figcaption>
          </figure>
        </div>
        <p className="text-sm mt-8">
          Jameson Whiskey has been producing Irish whiskey products for almost
          two and a half centuries, being one of the most prolific whiskey
          suppliers in the United States. The Jameson brand was acquired by the
          French drinks conglomerate Pernod Ricard in 1988, and has since had a
          significant presence in the American hard liquor industry, from
          selling 0.4 million 9-liter cases of whiskey in 1988 to 3.9 million in
          2012. Jameson’s success is sometimes attributed to their targeted
          advertising to "pre-commitment" young men aged 25–34 years old. <br />
          <br />
          <i>
            “We’ve been proudly making our whiskey the Jameson way since 1780.
            As you can imagine, producing a premium Irish whiskey that has been
            enjoyed for over two centuries takes a lot. But don’t worry, we’ve
            distilled over 200 years of courage, craft and a collective
            appreciation for taste, into one short account. So here’s the secret
            behind our signature smoothness – our process and our people.”
          </i>{" "}
          —{" "}
          <a
            href="https://www.jamesonwhiskey.com/en-us/our-story/how-jameson-irish-whiskey-is-made/"
            className="underline"
          >
            Jameson Whiskey
          </a>
          <br />
          <br />
          All Jameson whiskey is still currently produced in Cork, Ireland, with
          Irish barley, and water from the Dungourney river. The word whiskey is
          an anglicisation of the Classical Gaelic word uisce meaning "water",
          and distilled alcohol was known in Latin as aqua vitae ("water of
          life").
        </p>

        <p className="text-sm mt-4">
          <strong>Sources:</strong>{" "}
          <a href="https://www.jamesonwhiskey.com/" className="underline">
            Official Jameson Whiskey Website
          </a>
          ,{" "}
          <a
            href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2302694"
            className="underline"
          >
            Jameson: The Taste Above All Else Strategy by George Rossolatos
          </a>
        </p>
      </div>
    </div>
  );
};

export default Artifact2;
