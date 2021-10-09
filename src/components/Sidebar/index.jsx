import styled from "styled-components";
import { sidebarItems } from "../../data";

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        {sidebarItems.map(sidebarItem => {
          const {id, title, items} = sidebarItem
          return (
            <Menu key={id}>
              <Title>{title}</Title>
              <List>
                {items.map((item) => {
                  const { id, icon, name } = item;
                  return (
                    <ListItem key={id}>
                      <IconWrapper>{icon}</IconWrapper>
                      {name}
                    </ListItem>
                  );
                })}
              </List>
            </Menu>
          );
        })}
        </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  position: sticky;
  top: 50px;
`;

const Wrapper = styled.div`
  padding: 20px;
  color: #555;
`;

const Menu = styled.div`
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

  &:hover, &:focus {
    background-color: rgb(240, 240, 255);
  }
`;

const IconWrapper = styled.span`
  margin-right: 5px;
  font-size: 20px !important;
`;



export default Sidebar