import React, { useEffect, useState } from "react";
import axios from "axios";
import queryString from "query-string";
import Banner from "../assets/Banner.svg";
import musicGif from "../assets/music.gif"; // replace with your music gif

const clientId = "8e43d63afb92447d97f1db6214d2882b"; // Replace with your client ID
const redirectUri = "https://x.com/vdi0914"; // Replace with your redirect URI
const scopes = ["user-read-playback-state", "user-read-currently-playing"];

function HomeBanner() {
  const [currentSong, setCurrentSong] = useState("Loading...");
  const [token, setToken] = useState(localStorage.getItem("spotify_token") || "");

  // useEffect(() => {
  //   const hash = queryString.parse(window.location.hash);
  //   let _token = hash.access_token;

  //   if (_token) {
  //     setToken(_token);
  //     localStorage.setItem("spotify_token", _token);
  //     window.location.hash = ""; // Remove token from URL
  //   } else if (!token) {
  //     window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  //       "%20"
  //     )}&response_type=token&show_dialog=true`;
  //   }

  //   const fetchCurrentSong = async (accessToken) => {
  //     if (accessToken) {
  //       try {
  //         const response = await axios.get(
  //           "https://api.spotify.com/v1/me/player/currently-playing",
  //           {
  //             headers: {
  //               Authorization: `Bearer ${accessToken}`,
  //             },
  //           }
  //         );
  //         if (response.data && response.data.item) {
  //           setCurrentSong(
  //             `${response.data.item.name} by ${response.data.item.artists[0].name}`
  //           );
  //         } else {
  //           setCurrentSong("Not Playing");
  //         }
  //       } catch (error) {
  //         console.error("Error fetching current song:", error);
  //         setCurrentSong("Not Playing");
  //       }
  //     }
  //   };

  //   fetchCurrentSong(token);
  //   const interval = setInterval(() => fetchCurrentSong(token), 10000);
  //   return () => clearInterval(interval);
  // }, [token]);

  return (
    <section className="w-full min-h-[70vh] bg-[#ffffff] flex justify-center items-center">
      <div className="w-full flex justify-between items-center">
        <div className="text-left px-20">
          <h1 className="text-4xl font-bold">Hi, I’m Vidhi,</h1>
          <h2 className="text-6xl font-bold text-[#b56565] mt-2">
            Frontend Developer
          </h2>
          <a
            href="#projects"
            className="text-lg font-semibold mt-4 inline-block underline"
          >
            View My Projects
          </a>
          <div className="mt-4">
            <img
              src={musicGif}
              alt="music playing"
              width={"30px"}
              className="inline-block mr-2"
            />
            <span>{currentSong}</span>
          </div>
        </div>
        <div>
          <img src={Banner} alt="banner" width={"670px"} />
        </div>
      </div>
    </section>
  );
}

export default HomeBanner;
