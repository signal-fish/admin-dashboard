import styled from "styled-components";
import { Settings } from "@material-ui/icons";
import { mobile } from "../../responsive";

const Topbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo src="assets/logo.jpeg" alt="logo" />
          <Title>Admin DashBoard</Title>
        </Left>
        <Right>
          <Avatar src="assets/signal-fish.jpg" alt="Signal Fish"></Avatar>
          <IconWrapper>
            <Settings />
          </IconWrapper>
        </Right>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 60px;
  z-index: 9999;
  background: #e4dddd;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 45px;
  height: 45px;
  object-fit: contain;
  border-radius: 50%;
  margin-right: 20px;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 30px;
  color: darkblue;
  cursor: pointer;

  ${mobile({
    display: "none"
  })}
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  position: relative;
  cursor: pointer;
  margin-top: 5px;
  margin-left: 15px;
  color: #555;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

export default Topbar;
