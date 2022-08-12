import React from "react";
import styled from "styled-components";
import SafiTube from "../img/logo.png";
import HomeIcon from "@mui/icons-material/Home";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { SettingsBrightnessOutlined } from "@mui/icons-material";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 15px;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  margin-left: 10px;
  align-items: center;
  gap: 14px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 10px;
  cursor: pointer;
`;

const Login = styled.div``;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.textSoft};
  margin-bottom: 20px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        {/* SafiTube Logo */}
        <Logo>
          <Img src={SafiTube} />
          SafiTube
        </Logo>
        {/* Home */}
        <Item>
          <HomeIcon />
          Home
        </Item>
        {/* Explore */}
        <Item>
          <ExploreOutlinedIcon />
          Explore
        </Item>
        {/* Subscriptions */}
        <Item>
          <SubscriptionsOutlinedIcon />
          Subscriptions
        </Item>
        <Hr />
        {/* Library */}
        <Item>
          <VideoLibraryOutlinedIcon />
          Library
        </Item>
        {/* History */}
        <Item>
          <HistoryOutlinedIcon />
          History
        </Item>
        <Hr />
        {/* SIGN IN */}
        <Login>
          Sign in to like videos, comment, and subscribe.
          {/* <Link to="signin" style={{ textDecoration: "none" }}> */}
          <Button>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </Button>
          {/* </Link> */}
        </Login>
        <Hr />
        <Title>BEST OF SafiTube</Title>
        {/* Music */}
        <Item>
          <LibraryMusicOutlinedIcon />
          Music
        </Item>
        {/* Sports */}
        <Item>
          <SportsBasketballOutlinedIcon />
          Sports
        </Item>
        {/* Gaming */}
        <Item>
          <SportsEsportsOutlinedIcon />
          Gaming
        </Item>
        {/* Movies */}
        <Item>
          <MovieOutlinedIcon />
          Movies
        </Item>
        {/* News */}
        <Item>
          <ArticleOutlinedIcon />
          News
        </Item>
        {/* Live */}
        <Item>
          <LiveTvOutlinedIcon />
          Live
        </Item>
        <Hr />
        {/* Settings */}
        <Item>
          <SettingsOutlinedIcon />
          Settings
        </Item>
        {/* Report */}
        <Item>
          <FlagOutlinedIcon />
          Report
        </Item>
        {/* Help */}
        <Item>
          <HelpOutlineOutlinedIcon />
          Help
        </Item>
        {/* Theme Changer */}
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlined />
          Light Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
