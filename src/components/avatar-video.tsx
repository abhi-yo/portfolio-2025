"use client";

import React from "react";

interface AvatarVideoProps {
  src: string;
  poster?: string;
  className?: string;
}

export default function AvatarVideo({
  src,
  poster,
  className,
}: AvatarVideoProps) {
  return (
    <video
      src={src}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      controls={false}
      controlsList="nodownload noplaybackrate nofullscreen"
      disablePictureInPicture
      poster={poster}
      className={className}
      onCanPlay={(e) => {
        const v = e.currentTarget;
        const p = v.play();
        if (p && typeof p.then === "function") {
          p.catch(() => {});
        }
      }}
      aria-hidden
    />
  );
}
