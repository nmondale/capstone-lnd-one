import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { imageUrls } from "@/utils/imageUrls";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/models/medallion.glb");
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
      <primitive ref={modelRef} object={gltf.scene} scale={2} />
    </group>
  );
};

const Artifact1: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Left Container*/}
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

      {/* Right Container*/}
      <div className="w-3/5 p-8 overflow-y-auto h-screen">
        <p className="text-sm mb-4 font-bold">
          The 3D object on this page was scanned using the Polycam app on my
          phone. Please interact with the model, ask it questions, and listen.
        </p>
        <h1 className="text-2xl font-bold">A Piece of Garbage: Medallion</h1>
        <h2 className="text-xl my-4 ">
          Discovered{" "}
          <a
            href="https://www.google.com/maps/place/44°54'47.2%22N,+93°11'50.4%22W"
            className="underline"
          >
            44°54'47.2"N, 93°11'50.4"W
          </a>
          ,
          <br /> September 16th, 2024 6:21 PM
        </h2>
        <p className="text-sm mb-8">
          <strong> Note From Collector: </strong> This ceramic medallion was
          found under some dirt next to the concrete platform (<i>Figure 1</i>)
          in front of the abandoned Ford Plant smoke tower (<i>Figure 2</i>) off
          of Mississippi River Parkway. It was hidden underneath some dirt, next
          to scattered shards of glass. Further along the path, to the right of
          the platform, I found another collection of items: a navy blue
          RubberMaid bin with tampons, pads, syringes, an alcohol wipe (in a
          package), a pen, and a bottle cap (<i>Figure 3</i>). Though I did not
          see anyone, it was clear that this space was being used as a living
          space.
        </p>

        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2">
            <figure className="flex-1">
              <div className="overflow-hidden rounded-lg border border-alt h-64">
                <img
                  src={imageUrls.thrownAside.artifact11.url}
                  alt={imageUrls.thrownAside.artifact11.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="text-sm mt-2">
                <strong>Figure 1.</strong> Concrete Platform
              </figcaption>
            </figure>
            <figure className="flex-1">
              <div className="overflow-hidden rounded-lg border border-alt h-64">
                <img
                  src={imageUrls.thrownAside.artifact12.url}
                  alt={imageUrls.thrownAside.artifact12.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="text-sm mt-2">
                <strong>Figure 2.</strong> Smoke Tower
              </figcaption>
            </figure>
          </div>

          <figure className="w-full">
            <div className="overflow-hidden rounded-lg border border-alt h-64">
              <img
                src={imageUrls.thrownAside.artifact13.url}
                alt={imageUrls.thrownAside.artifact13.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="text-sm mt-2">
              <strong>Figure 3.</strong> Navy Blue RubberMaid Bin
            </figcaption>
          </figure>
        </div>
        <p className="text-sm mt-8">
          The medallion features small colorful artwork entitled "Hummertime", a
          jovial summer-time scene of hummingbirds amongst large purple blooms.
          This artwork was made by Jody Bergsma, a painter from Bellingham,
          Washington, who sells pieces like "Hummertime" as designs for
          countless items— mugs, calendars, puzzles, hot beverage tumblers, and
          ceramic ornaments (to name a few). On her{" "}
          <a href="https://x.com/jodybergsma" className="underline">
            twitter page
          </a>
          , Bergsma describes herself in her bio as a "watercolor Artist, life
          enthusiast, entrepreneur, runner, hiker, skier… Living Brightly...with
          inspired thinking."
        </p>

        <figure className="mt-4">
          <div className="overflow-hidden rounded-lg border border-alt">
            <img
              src={imageUrls.thrownAside.artifact14.url}
              alt={imageUrls.thrownAside.artifact14.alt}
              className="w-full h-auto object-cover"
            />
          </div>
          <figcaption className="text-sm mt-2">
            <strong>Figure 4.</strong>{" "}
            <a
              href="https://x.com/jodybergsma/status/1507454980885676036"
              className="underline"
            >
              A tweet from @jodybergsma, posted on March 25th, 2022
            </a>{" "}
            that reads: "The true inventor sees answers to problems that were
            formerly hidden. This is genius. The rest is just repetition."
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Artifact1;
