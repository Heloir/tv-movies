"use client"

import Image from "next/image";
import Link from "next/link";
import { IMoviesMaps } from "../page";
import { DetailsButton, ImageContainer } from "@/public/MainStyles/Header";


export default function Movie(props: IMoviesMaps) {
    return (
        <Link href={`/details/${props.id}`}>
          <ImageContainer key={props.id}>
              <DetailsButton className="detailsButton">
              <Image
                src={'./images/play.svg'}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "70%", height: "70%", marginLeft: 5}}
                loading="lazy"
              />
              </DetailsButton>
              <Image
                src={`https://image.tmdb.org/t/p/w500${props.poster_path}`}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "270px", height: "auto", borderRadius: "10px" }}
                loading="lazy"
              />
          </ImageContainer>
        </Link>
    )
}
