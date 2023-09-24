// src/DiscordPresence.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const DiscordPresence = ({ userId }) => {
  const [presence, setPresence] = useState(null);

  useEffect(() => {
    const fetchPresence = async () => {
      try {
        const response = await axios.get(
          `https://api.lanyard.rest/v1/users/${userId}`
        );
        setPresence(response.data);
      } catch (error) {
        console.error("Error fetching Discord presence:", error);
      }
    };

    fetchPresence();
  }, [userId]);

  if (!presence) {
    return <div className="pt-5 pl-5 text-sm">Loading...</div>;
  }

  const data = presence.data;

  return (
    <>
      <div className="pt-4 font-sans text-sm pl-7">
        {data.discord_status === "online" ? (
          <>
            <div className="flex flex-row space-x-2">
              <div className="p-3 bg-green-300 rounded-full"></div>
              <span>Online on Discord</span>
            </div>
          </>
        ) : data.discord_status === "idle" ? (
          <>
            <div className="flex flex-row space-x-2">
              <div className="p-3 bg-yellow-300 rounded-full"></div>
              <span>Idle on Discord</span>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-row space-x-2">
              <div className="p-3 bg-red-300 rounded-full"></div>
              <span>Offline on Discord</span>
            </div>
          </>
        )}
      </div>
      {data.listening_to_spotify && (
        <>
          <div className="flex flex-row pt-4 space-x-4 pl-7">
            <div className="p-3 bg-green-100 rounded-full"></div>
            <span className="text-sm">Listening to {data.spotify?.song}</span>
          </div>
        </>
      )}
    </>
  );
};

export default DiscordPresence;
