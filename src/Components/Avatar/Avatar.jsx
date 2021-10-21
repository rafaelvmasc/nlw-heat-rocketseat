import React from "react";
import styled from "styled-components";
import selo from "../../images/build.svg";
import mikey from "../../images/mikey-tokyo-revengers.gif";
import "../styles.css";

const Avy = styled.div`
  width: 10rem;
  margin: 11.5rem auto 0;
  position: relative;

  > img {
    width: 10rem;
    height: 11.5rem;
    object-fit: cover;
    clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
  }
`;
const Selo = styled.span`
  position: absolute;
  top: -15px;
  z-index: 1;
`;

function AvatarBadge() {
  return (
    <Avy className="avatar">
      <Selo>
        <img src={selo} alt="Selo Rocket" />
      </Selo>

      <img src={mikey} alt="Foto Pessoal" />
    </Avy>
  );
}

export default AvatarBadge;
