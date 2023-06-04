import React from "react";
import { HeaderContent, Main } from "@/public/MainStyles/Header";
import { Button } from "@/public/MainStyles/global";

import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Header() {
  return (
    <Main className={inter.className}>
      <HeaderContent>
        <p
          style={{
            fontSize: "20px",
          }}
        >
          CURTA OS MELHORES FILMES COM SUA FAMILIA DE
        </p>
        <h1
          style={{
            fontSize: "40px",
          }}
        >
          FORMA GRATUITA
        </h1>

        <Link href={"/auth/register"}>
          <Button>CADRASTRAR</Button>
        </Link>
      </HeaderContent>
    </Main>
  );
}
