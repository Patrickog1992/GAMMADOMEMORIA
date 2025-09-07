"use client";

import Image from "next/image";
import VideoPlayer from "@/components/video-player";
import { Button } from "@/components/ui/button";
import CommentSection from "@/components/comment-section";
import { useState, useEffect } from "react";
import { format } from "date-fns";

export default function Home() {
  const [showButton, setShowButton] = useState(false);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    // There is no way to get the current time from the vturb player,
    // so we will show the button after a timeout.
    const showButtonTimeout = (19 * 60 + 57) * 1000; // 19 minutes and 57 seconds
    const timer = setTimeout(() => {
      setShowButton(true);
    }, showButtonTimeout);

    setCurrentDate(format(new Date(), 'dd/MM/yyyy'));

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="bg-destructive text-destructive-foreground text-center p-3 font-semibold text-base md:text-lg">
        <p>
          ATENÇÃO: Devido as grande indústrias que lucram com remédios para memória estar nos processando esse site irá sair do ar hoje: <span className="text-yellow-400">{currentDate}</span>
        </p>
      </div>
      <main className="flex flex-col items-center justify-center px-4 py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold max-w-3xl mx-auto mb-4">
          Cientista que já atuou na NASA expõe o <span className="text-red-500">método de 8 segundos capaz de reativar a memória</span> esquecida sem remédios ou treinos mentais.
        </h1>
        <p className="text-base mb-8">VEJÁ O VIDEO ABAIXO (COM O SOM LIGADO)</p>
        <VideoPlayer />

        {showButton && (
          <Button asChild size="lg" className="my-8 animate-pulse text-2xl h-auto py-4 px-8 font-bold text-primary-foreground bg-primary hover:bg-primary/90">
            <a href="https://pay.kirvano.com/eac9c19f-454c-4b54-983d-e83a6232d496">QUERO ACESSO IMEDIATO!</a>
          </Button>
        )}
        
        <div className="my-4">
            <Image
                src="https://i.imgur.com/Lg34LJp.png"
                alt="Selo de Garantia"
                width={800}
                height={163}
                className="mx-auto"
                data-ai-hint="guarantee seal"
            />
        </div>

        <CommentSection />
      </main>
    </div>
  );
}
