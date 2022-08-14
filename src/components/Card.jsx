import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import safiTubeDefault from "../img/safiTubeDefault.jpg";
import profileImage from "../img/profileImage.jpg";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Text = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type }) => {
  return (
    <Link to="/video" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image type={type} src={safiTubeDefault} />
        <Details type={type}>
          <ChannelImage type={type} src={profileImage} />
          <Text>
            <Title>Video Title</Title>
            <ChannelName>Abdulkader Safi</ChannelName>
            <Info>660K views - 1 day ago</Info>
          </Text>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
