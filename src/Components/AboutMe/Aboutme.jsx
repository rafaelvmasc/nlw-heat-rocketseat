import React from "react";
import githublogo from "../../images/github.svg";
import {Nome, GitLink, Quote} from './Components/styles';

function Aboutme() {
  return (
    <>
      <Nome>Rafael Cavalcante</Nome>
      <GitLink href="https://github.com/rafaelvmasc" target="_blank">
        <img src={githublogo} alt="Logo github" />
        rafaelvmasc
      </GitLink>
      <Quote>
        Shoot for the moon. Even if you miss you'll land among the stars
      </Quote>
    </>
  );
}

export default Aboutme;
