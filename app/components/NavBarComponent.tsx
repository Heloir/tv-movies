import { NavBar, NavLinks, NavLogo } from "@/public/MainStyles/Nav";
import Link from "next/link";

import { Inter } from "next/font/google";
import { Container } from "@/public/MainStyles/global";
const inter = Inter({ subsets: ["latin"] });

export default function Navigator() {
  return (
    <NavBar className={inter.className}>
      <Container>
        <NavLogo>TvFilms</NavLogo>
      </Container>
      <Container>
        <NavLinks>
          <Link
            href={"/auth/register"}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              height: 40,
              width: 100,
            }}
          >
            Cadastrar
          </Link>
          <Link
            href={"/auth/login"}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              backgroundColor: "orange",
              width: 100
            }}
          >
            Login
          </Link>
        </NavLinks>
      </Container>
    </NavBar>
  );
}
