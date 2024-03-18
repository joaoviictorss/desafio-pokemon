import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local";

const pokemonFont = localFont({
  src: [
    {
      path: "../../public/fonts/pokemon-gb.ttf",
      weight: "400",
    },
  ],
  variable: '--pokemon'
});

export const metadata: Metadata = {
  title: "Desafio Pokemon",
  description:
    "Aplicação que mostra quais pokemons teria em determinada cidade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={pokemonFont.className}>{children}</body>
    </html>
  );
}
