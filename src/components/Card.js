import React from "react";
import styled from "styled-components";
import safiTubeDefault from "../img/safiTubeDefault.jpg";
import profileImage from "../img/profileImage.jpg";

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Imgae = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
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

function Card() {
  return (
    <Container>
      <Imgae src={safiTubeDefault} />
      <Details>
        <ChannelImage src={profileImage} />
        <Text>
          <Title>Video Title</Title>
          <ChannelName>Abdulkader Safi</ChannelName>
          <Info>660K views - 1 day ago</Info>
        </Text>
      </Details>
    </Container>
  );
}

export default Card;
