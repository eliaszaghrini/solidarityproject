import React, { useState, useEffect } from "react";

export default function YoutubeVideo({ link }) {
  const [id, setId] = useState(undefined);
  useEffect(() => {
    setId(() => {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = link.match(regExp);

      return match && match[2].length === 11 ? match[2] : null;
    });
  }, [link]);

  return (
    <>
      <iframe
        title="The situation in Lebanon"
        height={"100%"}
        src={`//www.youtube.com/embed/${id}`}
        frameBorder="0"
        allowfullscreen="true"
      />
    </>
  );
}