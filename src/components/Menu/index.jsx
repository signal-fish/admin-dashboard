import styled from "styled-components";
import { KeyboardArrowRight } from "@material-ui/icons";
import { useGlobalContext } from "../../context";

const Menu = () => {
  const { showSidebar, setShowSidebar } = useGlobalContext();

  return (
    <Container
      showSidebar={showSidebar}
      onClick={() => setShowSidebar(!showSidebar)}
    >
      <KeyboardArrowRight
        style={{
          fontSize: "30px",
          fontWeight: "700",
        }}
      />
    </Container>
  );
};

const Container = styled.div`
  background: ${(props) => (props.showSidebar ? "none" : "#3eb1f8")};
  position: absolute;
  text-align: right;
  left: -10px;
  top: 50vh;
  z-index: 2;
  cursor: pointer;
  transition: all 0.3s linear;
  transform: ${(props) =>
    props.showSidebar
      ? "translate(220px, -50%) rotate(180deg) scale(1.5)"
      : "translate(0, -50%) rotate(0) scale(1)"};
  display: flex;

  &:hover {
    opacity: 0.8;
  }
  color: ${(props) => (props.showSidebar ? "#3eb1f8" : "#000")};

`;

export default Menu;
