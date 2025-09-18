"use client";

import Script from "next/script";

export default function VideoPlayer() {
  return (
    <>
      <div className="w-full max-w-[400px] mx-auto my-8">
        <vturb-smartplayer
          id="vid-68cc4d201563ea2ce0573306"
        ></vturb-smartplayer>
      </div>
      <Script
        src="https://scripts.converteai.net/b45e4a12-72fd-43f2-a7e4-73d6b242d5d9/players/68cc4d201563ea2ce0573306/v4/player.js"
        strategy="lazyOnload"
      />
    </>
  );
}
