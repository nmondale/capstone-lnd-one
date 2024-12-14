import React from "react";
import LockingDiagramSVG from "../../../assets/icons/lockingdiagram.svg";

const Artifact2: React.FC = () => {
  return (
    <div className="flex flex-row items-start justify-center min-h-screen p-8 gap-8">
      <div className="w-1/2">
        <LockingDiagramSVG
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>

      <div className="w-1/2">
        <h2 className="text-2xl font-bold mb-4">
          How a Lock and Dam is Used for River Navigation — An Elevator of Water
        </h2>
        <p className="text-sm mb-4">
          <i>
            The following is a description of how the lock is used by vessels
            travelling downstream. In the case of a boat going upstream, the
            outlined process below would be reversed.
          </i>
          <br />
          <ul className="list-decimal mt-6 ml-6">
            <li className="mb-6">
              If the chamber level is lower than the lake level, the lock is
              first filled by opening the filling valve. The upper and lower
              gates are closed, so the level of the chamber rises to the
              upstream level, creating a consistent level of water that is easy
              to navigate.
            </li>
            <li className="mb-6">
              To lower the boat, the gates are closed behind it, the filling
              valve is closed and the emptying valve is opened. The pressure of
              the higher water in the lock drains to the downstream level. This
              process usually takes around thirty minutes, but this can change
              depending on the size of the travelling vessel.
            </li>
            <li>
              The lower gates are then opened and the boat is able to move out
              on the lower water level, continuing its journey downstream.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Artifact2;
