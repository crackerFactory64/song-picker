import React from "react";
export default function Song(props) {
  return (
    <article>
      <p>{props.song}</p>
      <p>by</p>
      <p>{props.artist}</p>
    </article>
  );
}
