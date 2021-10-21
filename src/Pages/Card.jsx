import React from "react";
import SocialsList from "../Components/Socials/SocialsList";
import AvatarBadge from "../Components/Avatar/Avatar";
import Aboutme from "../Components/AboutMe/Aboutme";
import { Cartao } from "./styles";



function Card() {
  return (
    <body>
      
      <Cartao>
        <div className="content">
          <AvatarBadge />
          <Aboutme />
          <SocialsList />
        </div>
      </Cartao>
    </body>
  );
}

export default Card;
