"use client";

export default function AlertBanner() {
  return (
    <div className="bg-destructive text-destructive-foreground text-center p-3 font-semibold text-base md:text-lg sticky top-0 z-50">
      <p>
        ATENÇÃO: Devido as grande indústrias que lucram com remédios para memória estar nos processando esse site irá sair do ar hoje:{" "}
        <span className="text-yellow-400">05/09/2025</span>
      </p>
    </div>
  );
}
