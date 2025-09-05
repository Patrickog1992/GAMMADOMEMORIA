"use client";

import Script from "next/script";

export default function VideoPlayer() {
  return (
    <>
      <div className="w-full max-w-[400px] mx-auto my-8">
        <vturb-smartplayer
          id="vid-68bb1e4e28c13a747f0847e6"
        ></vturb-smartplayer>
      </div>
      <Script
        src="https://scripts.converteai.net/1a6a90ad-f1f6-4f11-b6be-e02b59de709c/players/68bb1e4e28c13a747f0847e6/v4/player.js"
        strategy="lazyOnload"
      />
    </>
  );
}
