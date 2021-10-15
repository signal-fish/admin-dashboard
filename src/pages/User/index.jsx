import styled from "styled-components";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";
import { tablet } from "../../responsive";

const User = () => {
  const { singleUser } = useGlobalContext();
  const { name, userName, jobTitle, image, birthday, phone, email, address } =
    singleUser;

  return (
    <Container>
      <TitleWrapper>
        <Title>Edit User</Title>
        <Link to="/newUser">
          <CreateButton>Create</CreateButton>
        </Link>
      </TitleWrapper>
      <UserWrapper>
        <UserShow>
          <UserShowTop>
            <UserShowImage src={image} alt={name} />
            <UserShowTopTitleWrapper>
              <UserShowUserName>{name}</UserShowUserName>
              <UserShowUserTitle>{jobTitle}</UserShowUserTitle>
            </UserShowTopTitleWrapper>
          </UserShowTop>

          <UserShowBottom>
            <UserShowTitle>Account Details</UserShowTitle>
            <UserShowInfo>
              <UserShowIcon>
                <PermIdentity />
              </UserShowIcon>
              <UserShowInfoUserName>{userName}</UserShowInfoUserName>
            </UserShowInfo>
            <UserShowInfo>
              <UserShowIcon>
                <CalendarToday />
              </UserShowIcon>
              <UserShowInfoBirthday>{birthday}</UserShowInfoBirthday>
            </UserShowInfo>
            <UserShowInfo>
              <UserShowIcon>
                <PhoneAndroid />
              </UserShowIcon>
              <UserShowInfoPhone>{phone}</UserShowInfoPhone>
            </UserShowInfo>
            <UserShowInfo>
              <UserShowIcon>
                <MailOutline />
              </UserShowIcon>
              <UserShowInfoMail>{email}</UserShowInfoMail>
            </UserShowInfo>
            <UserShowInfo>
              <UserShowIcon>
                <LocationSearching />
              </UserShowIcon>
              <UserShowInfoLocation>{address}</UserShowInfoLocation>
            </UserShowInfo>
          </UserShowBottom>
        </UserShow>

        <UserUpdate>
          <UserUpdateTitle>Edit</UserUpdateTitle>
          <UserUpdateForm>
            <UserUpdateLeft>
              <UserUpdateItem>
                <Label>Username</Label>
                <Input type="text" placeholder={userName} />
              </UserUpdateItem>
              <UserUpdateItem>
                <Label>Full Name</Label>
                <Input type="text" placeholder={name} />
              </UserUpdateItem>
              <UserUpdateItem>
                <Label>Email</Label>
                <Input type="text" placeholder={email} />
              </UserUpdateItem>
              <UserUpdateItem>
                <Label>Username</Label>
                <Input type="text" placeholder={userName} />
              </UserUpdateItem>
              <UserUpdateItem>
                <Label>Phone</Label>
                <Input type="text" placeholder={phone} />
              </UserUpdateItem>
              <UserUpdateItem>
                <Label>Address</Label>
                <Input type="text" placeholder={address} />
              </UserUpdateItem>
            </UserUpdateLeft>

            <UserUpdateRight>
              <UserUpdateUpload>
                <UserUpdateImage src={image} alt={name} />
                <Label htmlFor="file">
                  <UserUpdateIcon>
                    <Publish />
                  </UserUpdateIcon>
                </Label>
                <Input type="file" id="file" style={{ display: "none" }} />
              </UserUpdateUpload>
              <UpdateButton>Update</UpdateButton>
            </UserUpdateRight>
          </UserUpdateForm>
        </UserUpdate>
      </UserWrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1``;

const CreateButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    opacity: 0.8;
  }
`;

const UserWrapper = styled.div`
  display: flex;
  margin-top: 20px;

  ${tablet({
    flexDirection: "column",
  })}
`;

const UserShow = styled.div`
  flex: 1;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  margin-right: 20px;

  ${tablet({
    marginRight: "0",
    marginBottom: "20px",
  })}
`;

const UserShowTop = styled.div`
  display: flex;
  align-items: center;
`;

const UserShowImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const UserShowTopTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const UserShowUserName = styled.span`
  font-weight: 600;
`;

const UserShowUserTitle = styled.span`
  font-weight: 300;
`;

const UserShowBottom = styled.div`
  margin-top: 20px;
`;

const UserShowTitle = styled.span`
  font-style: 14px;
  font-weight: 600;
  color: rgb(175, 170, 170);
`;

const UserShowInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
  color: #444;
`;

const UserShowIcon = styled.span`
  font-size: 16px !important;
`;

const UserShowInfoUserName = styled.span`
  margin-left: 10px;
`;

const UserShowInfoBirthday = styled.span`
  margin-left: 10px;
`;

const UserShowInfoPhone = styled.span`
  margin-left: 10px;
`;

const UserShowInfoMail = styled.span`
  margin-left: 10px;
`;

const UserShowInfoLocation = styled.span`
  margin-left: 10px;
`;

const UserUpdate = styled.div`
  flex: 2;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const UserUpdateTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

const UserUpdateForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  ${tablet({
    flexDirection: "column",
  })}
`;

const UserUpdateLeft = styled.div`
  ${tablet({
    marginBottom: "20px",
  })}
`;

const UserUpdateItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
`;

const Input = styled.input`
  border: none;
  width: 250px;
  height: 30px;
  border-bottom: 1px solid gray;

  ${tablet({
    width: "auto"
  })}
`;

const UserUpdateRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UserUpdateUpload = styled.div`
  display: flex;
  align-items: center;
`;

const UserUpdateImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;

  ${tablet({
    marginBottom: "20px",
  })}
`;

const UserUpdateIcon = styled.span`
  cursor: pointer;
`;

const UpdateButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  background-color: darkblue;
  color: #fff;
  font-weight: 600;

  &:hover {
    opacity: 0.8;
  }

  /* ${tablet({
  width: "250px"
  })} */
`;

export default User;
