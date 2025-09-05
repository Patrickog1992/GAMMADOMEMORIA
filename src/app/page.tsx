import Image from "next/image";
import VideoPlayer from "@/components/video-player";
import { Button } from "@/components/ui/button";
import CommentSection from "@/components/comment-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="bg-destructive text-destructive-foreground text-center p-3 font-semibold text-base md:text-lg">
        <p>
          ATENÇÃO: Devido as grande indústrias que lucram com remédios para memória estar nos processando esse site irá sair do ar hoje: 05/09/2025
        </p>
      </div>
      <main className="flex flex-col items-center justify-center px-4 py-12 text-center">
        <VideoPlayer />

        <Button asChild size="lg" className="my-8 animate-pulse text-2xl h-auto py-4 px-8 font-bold text-primary-foreground bg-primary hover:bg-primary/90">
          <a href="#">QUERO ACESSO IMEDIATO!</a>
        </Button>
        
        <div className="my-4">
            <Image
                src="https://i.imgur.com/Lg34LJp.png"
                alt="Selo de Garantia"
                width={400}
                height={400}
                className="mx-auto"
                data-ai-hint="guarantee seal"
            />
        </div>

        <CommentSection />
      </main>
    </div>
  );
}
