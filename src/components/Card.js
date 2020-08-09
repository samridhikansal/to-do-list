import React from "react";
//import { connect } from "react-redux
import styled from "styled-components";

const Heading = styled.h1`
  font-size: ${(props) => props.size};
  color: ${(props) => props.bg};
  text-align: ${(props) => props.align};
`;
const Desc = styled.p`
  color: ${(props) => props.tc};
  font-size: ${(props) => props.size};
  text-align: ${(props) => props.align};
`;

const CardWrapper = styled.div`
  background: ${(props) => props.bg};
  padding: 10px;
  margin: 0;
  text-align: center;
`;
const BorderWrapper = styled(CardWrapper)`
  border: solid 2px black;
`;

const Card = ({ mainheading, subheading }) => {
  return (
    <div>
      <CardWrapper bg="#ffa000">
        <Heading bg="white" size="3em" align="center">
          {mainheading}
        </Heading>
      </CardWrapper>

      <BorderWrapper bg="pink">
        <Heading bg="green" size="2em" align="left">
          {subheading}
        </Heading>
        <Desc tc="red" size="20px" align="left">
          {" "}
          Best Solutiion is to try little apps with small functionality
        </Desc>
      </BorderWrapper>
      <CardWrapper bg="White">hello</CardWrapper>
    </div>
  );
};

export default Card;
