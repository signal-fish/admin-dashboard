import styled from "styled-components";

const NewUser = () => {
  return (
    <Container>
      <Title>New User</Title>
      <Form>
        <Item>
          <Label>Username</Label>
          <Input type="text" placeholder="anna-keller" />
        </Item>
        <Item>
          <Label>Full Name</Label>
          <Input type="text" placeholder="Anna Keller" />
        </Item>
        <Item>
          <Label>Email</Label>
          <Input type="email" placeholder="anna-keller@gmail.com" />
        </Item>
        <Item>
          <Label>Password</Label>
          <Input type="password" placeholder="password" />
        </Item>
        <Item>
          <Label>Phone</Label>
          <Input type="text" placeholder="+1 315 695 6347" />
        </Item>
        <Item>
          <Label>Address</Label>
          <Input type="text" placeholder="New York | USA" />
        </Item>
        <Item>
          <Label>Gender</Label>
          <Gender>
            <GenderInput type="radio" name="gender" id="male" value="male" />
            <GenderLabel>Male</GenderLabel>
            <GenderInput
              type="radio"
              name="gender"
              id="female"
              value="female"
            />
            <GenderLabel>Female</GenderLabel>
            <GenderInput type="radio" name="gender" id="other" value="other" />
            <GenderLabel>Other</GenderLabel>
          </Gender>
        </Item>
        <Item>
          <Label>Active</Label>
          <Select name="active" id="active">
            <Option value="yes">Yes</Option>
            <Option value="no">No</Option>
          </Select>
        </Item>
        <Create>Create</Create>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  padding-left: 20px;
`;

const Title = styled.h1``;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: gray;
`;

const Input = styled.input`
  height: 20px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;

const Gender = styled.div``;

const GenderInput = styled.input`
  margin-top: 15px;
`;

const GenderLabel = styled.label`
  margin: 10px;
  font-size: 18px;
  color: #555;
`;

const Select = styled.select`
  height: 40px;
  border-radius: 5px;
`;

const Option = styled.option``;

const Create = styled.button`
  width: 200px;
  border: none;
  background-color: darkblue;
  color: white;
  padding: 10px 10px;
  font-weight: 600;
  border-radius: 10px;
  margin: 40px 20px 20px 0;
  cursor: pointer;
  width: 400px;
  height: 40px;

  &:hover {
    opacity: 0.8;
  }
`;

export default NewUser;
