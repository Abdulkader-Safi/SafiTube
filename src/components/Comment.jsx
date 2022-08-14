import React from "react";
import styled from "styled-components";
import profileImage from "../img/profileImage.jpg";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src={profileImage} />
      <Details>
        <Name>
          Abdulkader Safi <Date>3 days ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quae
          ratione doloribus aperiam fugiat, aliquid laborum veritatis animi
          dolore dolorem ab. Aspernatur sed nam explicabo at quos veritatis
          facere laboriosam!
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
