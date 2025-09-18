"use client";

import Image from "next/image";
import VideoPlayer from "@/components/video-player";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { DollarSign } from "lucide-react";
import CommentSection from "@/components/comment-section";

export default function Home() {
  const [showButton, setShowButton] = useState(false);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    // There is no way to get the current time from the vturb player,
    // so we will show the button after a timeout.
    const showButtonTimeout = (28 * 60 + 22) * 1000; // 28 minutes and 22 seconds
    const timer = setTimeout(() => {
      setShowButton(true);
    }, showButtonTimeout);

    setCurrentDate(format(new Date(), 'dd/MM/yyyy'));

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col items-center justify-center px-4 py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold max-w-3xl mx-auto mb-4 text-foreground">
          A fórmula simples e comprovada que já ajudou milhares a faturar na loteria
        </h1>
        <p className="text-base mb-8 text-foreground/80">VEJA O VÍDEO ABAIXO (COM O SOM LIGADO)</p>
        <VideoPlayer />

        {showButton && (
          <Button asChild size="lg" className="my-8 animate-pulse text-2xl h-auto py-4 px-8 font-bold">
            <a href="https://pay.kirvano.com/7d32fb5b-3a63-4fc1-98f6-aa6218f19b0a">QUERO ACESSO IMEDIATO!</a>
          </Button>
        )}
        <CommentSection />
      </main>
    </div>
  );
}
