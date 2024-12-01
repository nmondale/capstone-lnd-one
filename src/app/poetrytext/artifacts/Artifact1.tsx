import React, { useState, useEffect } from "react";
import { WaterData, Measurement } from "../../../types/usaceTypes";
import axios from "axios";
import styles from "../styles/infographic.module.css";

import DamSVG from "../../../assets/icons/dam.svg";

// Configuration for different water measurements from USACE API
const MEASUREMENTS: Measurement[] = [
  {
    name: "LockDam_01.Elev.Inst.15Minutes.0.rev-MSL1912",
    label: "Elevation (MSL 1912)",
    property: "elevation",
    transform: (value: number) => value.toFixed(2),
  },
];

const Artifact1: React.FC = () => {
  // State management
  const [waterData, setWaterData] = useState<WaterData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [showLabels, setShowLabels] = useState(false);

  // Helper function to extract latest reading from USACE data
  const extractLatestReading = (data: any) => {
    const segment =
      data["time-series"]["time-series"][0]["regular-interval-values"]
        .segments[0];
    return {
      value: segment.values[segment.values.length - 1][0],
      unit: data["time-series"]["time-series"][0]["regular-interval-values"]
        .unit,
      queryTime: data["time-series"]["query-info"]["time-of-query"],
    };
  };

  // Main data fetching function
  const fetchWaterData = async () => {
    console.log(
      "HELOOOOO over here hehehe Fetching water data at:",
      new Date().toLocaleString()
    );
    try {
      // Create array of API requests for all measurements
      const requests = MEASUREMENTS.map((measurement) =>
        axios.get("https://cwms-data.usace.army.mil/cwms-data/timeseries", {
          params: {
            office: "MVP",
            name: measurement.name,
          },
        })
      );

      // Wait for all requests to complete
      const responses = await Promise.all(requests);

      // Process all responses into a single object
      const measurements = responses.reduce((acc, response, index) => {
        const { value, unit, queryTime } = extractLatestReading(response.data);

        return {
          elevation: MEASUREMENTS[index].transform(value),
          elevationUnit: unit,
          lastUpdated: queryTime,
        };
      }, {});

      setWaterData(measurements as WaterData);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching water data:", err);
      setError("Failed to fetch water data. Please try again later.");
      setLoading(false);
    }
  };

  // Set up data fetching and auto-refresh
  useEffect(() => {
    fetchWaterData();

    const interval = setInterval(fetchWaterData, 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-4">Loading water data...</h2>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-4">
          Error Fetching Water Data, Please Try Again Later
        </h2>
        <p className="text-red-500">{error}</p>
        <button
          onClick={fetchWaterData}
          className="mt-4 px-4 py-2 bg-alt text-main rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  // Render data
  return (
    <div className="p-8 w-[85%] mx-auto max-w-screen-lg min-w-screen-sm">
      <div className="mt-4 mx-auto">
        <h1 className="text-3xl text-left font-bold mb-8">
          How does a Lock and Dam functions to enable river navigation through
          uneven river terrain?
        </h1>
        <p className="text-sm mb-8 text-left">
          Along the Mississippi, there are strechtes of river that are naturally
          difficult to navigate with a boat, due to things like varying water
          depths, shifting sandbars or sediment deposits, narrower or winding
          channels, or strong or unpredictable currents. To enable smoother
          river navigation for trade routes, infrastructure like Lock and Dam 1
          are constructed. When a dam is built across a river, it acts like a
          barrier to inflows, and the water backs up behind the dam, allowing
          for control over the speed of river flow. Over time, as flow becomes
          slower, this backed-up water uses the natural slope of the river to
          create a deeper, wider pool upstream in front of the dam, known as the
          “lake”, a level and controlled area of river flow. With the dam, and
          the new lake, there is the distinct “step-down” that creates two river
          elevation levels, the upper level known as the Lake Level, and the
          lower level known as Tailwater. The lake level is constantly monitored
          and controlled to remain within a water level threshold by controlling
          the amount of water that goes through the dam. <br />
          <br />
          The following diagrams are informed by data from the USACE Water
          Management Data Dissemination API. The current lake level data will
          update every hour to accurately reflect the elevation of the water in
          the lake at Lock and Dam 1 according to aquatic sensors at the lock
          and dam. If the lock and dam are removed, the chart below will not
          work, as web data APIs will most likely no longer be supported. The
          current lake level data is updated every hour, and the data was last
          updated at{" "}
          <strong>
            {waterData && new Date(waterData.lastUpdated).toLocaleString()}.
          </strong>
        </p>

        <div className="flex mb-12">
          <div className="w-1/2 pr-4">
            <div className="border border-alt-color h-full flex relative">
              <div className="w-1/3 border-r border-alt-color relative">
                {/* Bottom of Conservation Line */}
                <div
                  className="absolute w-full border-t border-dashed border-alt-color"
                  style={{ top: "66.66%" }}
                >
                  <span className="absolute left-2 top-[0.5rem] text-sm">
                    Bottom of <br /> Conservation <br />
                    <strong>723.1ft</strong>
                  </span>
                </div>

                {/* Top of Flood Line */}
                <div
                  className="absolute w-full border-t border-dashed border-alt-color"
                  style={{ top: "33.33%" }}
                >
                  <span className="absolute left-2 -top-[3.5rem] text-sm">
                    Top of Flood <br />
                    <strong>725.1ft</strong>
                  </span>
                </div>
              </div>
              <div className="w-1/3 border-r border-alt-color relative">
                {waterData && (
                  <div
                    className={styles.waterLevel}
                    style={{
                      height: `${
                        ((waterData.elevation - 721.1) / (727.1 - 721.1)) * 100
                      }%`,
                    }}
                  ></div>
                )}
                <div
                  className="absolute w-full border-t border-dashed border-alt-color"
                  style={{ top: "33.33%" }}
                >
                  <div className="absolute left-0 w-4 h-4 rounded-full border border-alt-color bg-main transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <div
                  className="absolute w-full border-t border-dashed border-alt-color"
                  style={{ top: "66.66%" }}
                >
                  <div className="absolute left-0 w-4 h-4 rounded-full border border-alt-color bg-main transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>
              <div className="w-1/3 relative">
                {waterData && (
                  <div
                    className={styles.waterLevelElevation}
                    style={{
                      height: `${
                        ((waterData.elevation - 721.1) / (727.1 - 721.1)) * 100
                      }%`,
                    }}
                  >
                    <span className="absolute text-right right-2 -top-[3.5rem] text-sm text-brightBlue ">
                      Current Lake Level <br />
                      <strong>{waterData.elevation} ft</strong>
                    </span>
                    <div className="absolute left-0 w-4 h-4 rounded-full border border-brightBlue bg-main transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="w-1/2 pl-4">
            <h2 className="text-3xl font-bold mb-4">
              Zoomed-In View of Lake Level Control
            </h2>
            <p className="text-sm">
              <strong>
                Current Lake Level ({waterData && waterData.elevation} ft):
              </strong>{" "}
              This shows the current water level in the pool above the dam,
              measured in feet above sea level. <br />
              <br />
              The lake level is regulated with a Lake Level threshold,
              designated by static elevations, the Top of Flood, and Bottom of
              Conservation:
              <br />
              <br />
              <strong>Top of Flood (725.1 ft):</strong> This represents the
              maximum designed water level. When water reaches or exceeds this
              height, it indicates flood conditions that might affect safe
              navigation through the lock. <br />
              <br />
              <strong>Bottom of Conservation (723.1 ft):</strong> This
              represents the maximum designed water level. When water reaches or
              exceeds this height, it indicates flood conditions that might
              affect safe it indicates flood conditions that might affect safe
              navigation through the lock. <br />
              <br />
              The lower Tailwater elevation is used in the locking process,
              described more in depth in Artifact 2.
            </p>
          </div>
        </div>
      </div>
      {waterData && (
        <>
          <h2 className="text-3xl font-bold mb-4 mt-12">
            Broader Lock and Dam Profile View
          </h2>
          <div
            className={`${styles.container} ${
              showLabels ? styles.showLabels : ""
            }`}
          >
            <div className={styles.container1}>
              <span className={styles.boxLabel}>1</span>
              <div className={styles.rectangleContainer}>
                <div className={styles.rectangle1}>
                  <span className={styles.rectangleLabel}>River Water In</span>
                </div>
                <div className={styles.rectangle2}></div>
              </div>
            </div>
            <div className={styles.containerMiddle}>
              <div className={`${styles.column} ${styles.container2And12}`}>
                <div className={styles.container2}>
                  <span className={styles.boxLabel}>2</span>
                  <span className={styles.damLabel}>Top of Dam</span>
                </div>
                <div className={styles.container12}>
                  <span className={styles.boxLabel}>12</span>
                  <div
                    className={`${styles.cornerCircle} ${styles.topRight}`}
                  ></div>
                  <div
                    className={`${styles.cornerCircle} ${styles.bottomRight}`}
                  ></div>
                  <div className={styles.floodLine}></div>
                  <div className={styles.floodCircle}></div>
                  <span className={styles.floodLabel}>Top of Flood</span>
                  <span className={styles.floodElevation}>725.1 ft</span>

                  <div
                    className={styles.waterLevelElevation}
                    style={{
                      height: `${
                        ((waterData.elevation - 687.2) / (732.7 - 687.2)) * 100
                      }%`,
                    }}
                  ></div>

                  <div className={styles.conservationLine}></div>
                  <div className={styles.conservationCircle}></div>
                  <span className={styles.conservationLabel}>
                    Bottom of <br /> Conservation
                  </span>
                  <span className={styles.conservationElevation}>723.1 ft</span>

                  <span
                    className={`${styles.elevationLabel} ${styles.topElevation}`}
                  >
                    732.7 ft
                  </span>
                  <span
                    className={`${styles.elevationLabel} ${styles.bottomElevation}`}
                  >
                    687.2 ft
                  </span>
                </div>
              </div>
              <div className={`${styles.column} ${styles.containers7to10}`}>
                <div className={styles.containers7And9}>
                  <div className={styles.container7}>
                    <span className={styles.boxLabel}>7</span>
                    <div className={styles.arrowContainer}>
                      <div className={styles.arrowRectangle}></div>
                      <div className={styles.arrowTriangle}></div>
                    </div>
                  </div>
                  <div className={styles.container9}>
                    <span className={styles.boxLabel}>9</span>
                  </div>
                </div>
                <div className={styles.containers8And10}>
                  <div className={styles.container8}>
                    <span className={styles.boxLabel}>8</span>
                    <div
                      className={styles.waterLevel}
                      style={{
                        height: `${
                          ((waterData.elevation - 687.2) / (732.7 - 687.2)) *
                          100
                        }%`,
                      }}
                    ></div>
                    <div className={styles.floodLine}></div>
                    <div className={styles.conservationLine}></div>
                  </div>
                  <div className={styles.container10}>
                    <span className={styles.boxLabel}>10</span>
                    <div className={styles.poolLevel}></div>
                    <div
                      className={styles.waterLevelCircle}
                      style={{
                        top: `${
                          100 -
                          ((waterData.elevation - 687.2) / (732.7 - 687.2)) *
                            100
                        }%`,
                      }}
                    ></div>
                    <div
                      className={styles.waterLevelElevation}
                      style={{
                        height: `${
                          ((waterData.elevation - 687.2) / (732.7 - 687.2)) *
                          100
                        }%`,
                      }}
                    ></div>
                    <span
                      className={styles.currentLevelLabel}
                      style={{
                        top: `${
                          100 -
                          ((waterData.elevation - 687.2) / (732.7 - 687.2)) *
                            100
                        }%`,
                      }}
                    >
                      Current Lake Level: {waterData.elevation} ft
                    </span>

                    <div className={styles.damContainer}>
                      <DamSVG className={styles.damSvg} />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.column} ${styles.containers3And11} ${styles.container6}`}
              >
                <span className={styles.boxLabel}>6</span>
                <div className={styles.container6}>
                  <div className={styles.container6Rectangles}>
                    <div className={styles.container6RectangleWide}>
                      <span className={styles.rectangleLabel}>
                        River Water Out
                      </span>
                    </div>
                    <div className={styles.container6VerticalGroup}>
                      <div className={styles.container6Rectangle}></div>
                      <div className={styles.container6Triangle}></div>
                    </div>
                    <div className={styles.riverLine}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.containerBottom}>
              <div className={`${styles.column} ${styles.container2And12}`}>
                <span className={styles.boxLabel}>4</span>
                <span className={styles.streambedLabel}>Streambed</span>
              </div>
              <div className={`${styles.column} ${styles.containers7to10}`}>
                <span className={styles.boxLabel}>5</span>
                <div className={styles.verticalPipeContainer}>
                  <div className={styles.verticalPipe}></div>
                  <div className={styles.verticalPipe}></div>
                  <div className={styles.verticalPipe}></div>
                  <div className={styles.verticalPipe}></div>
                </div>
                <div className={styles.horizontalPipe}></div>
              </div>
              <div className={`${styles.column} ${styles.containers3And11}`}>
                <span className={styles.boxLabel}>6</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Artifact1;
