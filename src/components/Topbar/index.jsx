import styled from "styled-components";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

const Topbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Signal Fish</Logo>
        </Left>
        <Right>
          <IconWrapper>
            <NotificationsNone />
            <Span>5</Span>
          </IconWrapper>
          <IconWrapper>
            <Language />
            <Span>2</Span>
          </IconWrapper>
          <IconWrapper>
            <Settings />
          </IconWrapper>
          <Avatar src="assets/signal-fish.jpg" alt="Signal Fish"></Avatar>
        </Right>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 60px;
  z-index: 9999;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div``;

const Logo = styled.span`
  font-weight: bold;
  font-size: 30px;
  color: darkblue;
  cursor: pointer;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  position: relative;
  cursor: pointer;
  margin-top: 5px;
  margin-right: 15px;
  color: #555;
`;

const Span = styled.span`
  width: 15px;
  height: 15px;
  position: absolute;
  top: -3px;
  right: 0px;
  background-color: red;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

export default Topbar;
