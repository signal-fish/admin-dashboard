import styled from "styled-components";
import { newJoinMembersData } from "../../data";
import { Visibility } from "@material-ui/icons";
import { tablet } from "../../responsive";

const WidgetSm = () => {
  return (
    <Container>
      <Title>New Join Members</Title>
      <List>
        {newJoinMembersData.map((member) => {
          const { id, image, name, title, button } = member;
          return (
            <ListItem key={id}>
              <Image src={image} alt={name} />
              <User>
                <Name>{name}</Name>
                <JobTitle>{title}</JobTitle>
              </User>
              <Button>
                <IconWrapper>
                  <Visibility />
                </IconWrapper>
                {button}
              </Button>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
  margin-right: 20px;

  ${tablet({
    marginRight: 0,
    marginBottom: "20px",
  })}
`;

const Title = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
  width: 100%;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
  width: 135px;
`;

const Name = styled.span`
  font-weight: 600;
`;

const JobTitle = styled.span`
  font-weight: 300;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  background-color: #eeeef7;
  color: #555;
  cursor: pointer;
`;

const IconWrapper = styled.span`
  font-size: 16px !important;
  margin-right: 5px;
`;

export default WidgetSm;
