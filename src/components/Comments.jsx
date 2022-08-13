import React from "react";
import styled from "styled-components";
import profileImage from "../img/profileImage.jpg";

const Container = styled.div``;

const NewComment = styled.div``;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input``;

function Comments() {
  return (
    <Container>
      <NewComment>
        <Avatar src={profileImage} />
        <Input placeholder="Add a comment..."></Input>
      </NewComment>
    </Container>
  );
}

export default Comments;
