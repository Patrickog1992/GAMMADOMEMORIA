"use client";

import Script from "next/script";

export default function VideoPlayer() {
  return (
    <>
      <div className="w-full max-w-[400px] mx-auto my-8">
        <vturb-smartplayer
          id="vid-68c85d6f84ed93da140df9cd"
        ></vturb-smartplayer>
      </div>
      <Script
        src="https://scripts.converteai.net/b45e4a12-72fd-43f2-a7e4-73d6b242d5d9/players/68c85d6f84ed93da140df9cd/v4/player.js"
        strategy="lazyOnload"
      />
    </>
  );
}
