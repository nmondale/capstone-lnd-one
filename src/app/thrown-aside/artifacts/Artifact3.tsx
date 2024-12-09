import React, { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { VesselData } from "../../../types/usaceTypes";

const toTitleCase = (str: string) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const calculateLockageTime = (arrivalDate: string, endOfLockage: string) => {
  const start = new Date(arrivalDate);
  const end = new Date(endOfLockage);
  const diffInMinutes = Math.round(
    (end.getTime() - start.getTime()) / (1000 * 60)
  );
  return diffInMinutes;
};

const Artifact3: React.FC = () => {
  const [vesselData, setVesselData] = useState<VesselData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [debugInfo, setDebugInfo] = useState<string>("");

  const fetchVesselData = async () => {
    setLoading(true);
    setError(null);
    setDebugInfo("");

    try {
      const response = await axios.get("/api/vessel-traffic");
      console.log("Raw response:", response.data);
      setDebugInfo(
        (prev) =>
          prev +
          `\nResponse received: ${JSON.stringify(response.data).slice(
            0,
            200
          )}...`
      );

      const sortedData = response.data.sort(
        (a: VesselData, b: VesselData) =>
          new Date(b.arrivalDate).getTime() - new Date(a.arrivalDate).getTime()
      );

      setVesselData(sortedData);
      setLoading(false);
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error("Error details:", axiosError);
      setDebugInfo((prev) => prev + `\nError occurred: ${axiosError.message}`);
      setError("Failed to fetch vessel data");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVesselData();
    const interval = setInterval(fetchVesselData, 24 * 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Recent Lock Traffic</h2>
      <p className="text-sm mb-4">
        The following uses the USACE Lock Performance Monitoring System API to
        show all vessels that have passed through Lock and Dam 1 in the past 30
        days. The data is refreshed once a day. Last updated on{" "}
        <strong>
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </strong>
        .
      </p>

      {error && (
        <div className="mb-4">
          <p className="text-red-500">{error}</p>
          <pre className="mt-2 p-2 bg-gray-100 rounded text-sm overflow-auto max-h-40">
            Debug Info: {debugInfo}
          </pre>
        </div>
      )}

      {loading ? (
        <p>Loading vessel data...</p>
      ) : (
        <div className="grid gap-4">
          {vesselData.length > 0 ? (
            vesselData.map((vessel, index) => (
              <div key={index} className="border border-alt rounded-lg">
                <div className="flex items-center h-12 divide-x divide-alt border-b border-alt">
                  <div className="px-4 h-full flex items-center">
                    <span className="text-2xl font-bold">{index + 1}</span>
                  </div>

                  <div className="px-3 h-full flex-grow flex items-center">
                    {new Date(vessel.arrivalDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                    —{" "}
                    {new Date(vessel.arrivalDate).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>

                  <div className="px-6 h-full flex items-center">
                    <i>
                      {vessel.direction === "U" ? "Upstream" : "Downstream"}
                    </i>
                  </div>
                </div>

                <div className="mt-2 pt-2">
                  <div className="flex justify-between items-center text-sm px-5 pb-4">
                    <div>
                      <span className="font-semibold">Vessel:</span>{" "}
                      {toTitleCase(vessel.vesselName)}
                    </div>
                    <div>
                      <span className="font-semibold">Total Lockage Time:</span>{" "}
                      {calculateLockageTime(
                        vessel.arrivalDate,
                        vessel.endOfLockage
                      )}{" "}
                      minutes
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="border border-alt rounded-lg">
              <div className="flex items-center h-12 divide-x divide-alt border-b border-alt">
                <div className="px-4 h-full flex items-center">
                  <span className="text-3xl font-bold">0</span>
                </div>
                <div className="px-3 h-full flex-grow flex items-center">
                  No vessels have used the lock in the past 30 days
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Artifact3;
