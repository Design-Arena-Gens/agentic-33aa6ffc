export const metadata = {
  title: "Id?es business La R?union | Opportunit?s locales",
  description:
    "S?lection d'id?es de business et services rentables ? La R?union : niches locales, tourisme, cr?ole, produits pays, digital, ?cologie et bien-?tre.",
  keywords: [
    "La R?union",
    "id?es business",
    "tourisme",
    "cr?ole",
    "produits locaux",
    "?cologie",
    "bien-?tre",
    "digital",
    "entrepreneuriat"
  ]
};

import "./globals.css";
import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <div className="container">
          {children}
          <div className="footer">
            ? {new Date().getFullYear()} Id?es business La R?union ? construit pour des entrepreneurs locaux.
          </div>
        </div>
      </body>
    </html>
  );
}
