"use client";

import Image from "next/image";

export default function Actor(props) {


  return (
    <div
      style={{
        backgroundColor: "#1c1c1c",
        padding: "10px",
        borderRadius: "10px",
        marginTop: '10px',
        gap: '10px',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'space-between',
      }}
    >
      <div>
          <Image
            src={`https://image.tmdb.org/t/p/w500${props.poster_path}`}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "270px",
              height: "auto",
              borderRadius: "10px",
            }}
            loading="lazy"
          />
      </div>

      <div>
      <p>{props.name}</p>
      </div>
    </div>
  );
}
