import React from 'react'
import youtubelogo from "../../images/youtube.svg";
import facebooklogo from "../../images/facebook.svg";
import twitterlogo from "../../images/twitter.svg";
import instagramlogo from "../../images/insta.svg";
import styled from 'styled-components';

const LinkList = styled.ul`
  display: flex;
  list-style: none;
  margin-top: 4rem;
  padding: 0;
  gap: 0.5rem;
  justify-content: center;
`;

function SocialsList() {
    return (
        <LinkList>
            <li>
              <img src={youtubelogo} alt="youtube" />
            </li>
            <li>
              <img src={instagramlogo} alt="instagram" />
            </li>
            <li>
              <img src={facebooklogo} alt="facebook" />
            </li>
            <li>
              <img src={twitterlogo} alt="twitter" />
            </li>
          </LinkList>
    )
}

export default SocialsList
