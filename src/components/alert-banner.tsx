"use client";

export default function AlertBanner() {
  return (
    <div className="bg-destructive text-destructive-foreground text-center p-3 font-semibold text-base md:text-lg sticky top-0 z-50">
      <p>
        ATENÇÃO: Devido a NASA saber desse projeto o site irá estar no ar
        somente até hoje:{" "}
        <span className="text-yellow-400">05/09/2025</span> :(
      </p>
    </div>
  );
}
