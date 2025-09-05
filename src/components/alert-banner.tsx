"use client";

import { useEffect, useState } from "react";

export default function AlertBanner() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    setCurrentDate(date.toLocaleDateString("pt-BR"));
  }, []);

  return (
    <div className="bg-destructive text-destructive-foreground text-center p-3 font-semibold text-base md:text-lg sticky top-0 z-50">
      <p>
        ATENÇÃO: Devido a NASA saber desse projeto o site irá estar no ar
        somente até hoje: {currentDate} :(
      </p>
    </div>
  );
}
