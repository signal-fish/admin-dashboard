import styled from "styled-components";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";

const Sidebar = () => {
  const { selected, setSelected, showSidebar, sidebarItems, setShowSidebar } = useGlobalContext();
  console.log(showSidebar)
  return (
    <Container showSidebar={showSidebar}>
      <Wrapper>
        {sidebarItems.map((sidebarItem) => {
          const { id, title, items } = sidebarItem;
          return (
            <Items key={id}>
              <Title>{title}</Title>
              <List>
                {items.map((item) => {
                  const { id, icon, name, link, flag } = item;
                  return (
                    <Link to={link} style={{ textDecoration: "none" }}>
                      <ListItem
                        flag={flag}
                        selected={selected}
                        key={id}
                        onClick={() => {setSelected(flag); setShowSidebar(!showSidebar)}}
                      >
                        <IconWrapper>{icon}</IconWrapper>
                        {name}
                      </ListItem>
                    </Link>
                  );
                })}
              </List>
            </Items>
          );
        })}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background: #e4dddd;
  overflow-y: scroll;
  z-index: 1;
  transition: all 0.3s linear;
  transform: ${(props) =>
    props.showSidebar ? "translateX(0)" : "translateX(-250px)"};
  position: absolute;
  width: 250px;
  height: calc(100vh - 60px);
`;

const Wrapper = styled.div`
  padding: 20px;
  color: #555;
`;

const Items = styled.div`
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font-size: 13px;
  color: rgb(187, 186, 186);
`;

const List = styled.ul`
  list-style: none;
  padding: 5px;
`;

const ListItem = styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #420420;
  background-color: ${(props) =>
    props.flag === props.selected ? "rgb(240, 240, 255)" : ""};

  &:hover,
  &:focus {
    background-color: rgb(240, 240, 255);
  }
`;

const IconWrapper = styled.span`
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Sidebar;
