import styled from "styled-components";

const NewProduct = () => {
  return (
    <Container>
      <Title>New Product</Title>
      <Form>
        <Item>
          <Label>Image</Label>
          <Input type="file" id="file" style={{paddingLeft: 0}}></Input>
        </Item>
        <Item>
          <Label>Name</Label>
          <Input type="text" placeholder="Apple Airpods"></Input>
        </Item>
        <Item>
          <Label>Stock</Label>
          <Input type="text" placeholder="123"></Input>
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
  margin-top: 10px;
`;

const Item = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Label = styled.label`
  color: gray;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 10px;
`;

const Select = styled.select`
  padding: 10px;
`;

const Option = styled.option``;

const Create = styled.button`
  margin-top: 10px;
  padding: 7px 10px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  font-weight: 600;
  cursor: pointer;
  width: 250px;
  height: 40px;
  &:hover {
    opacity: 0.8;
  }
`;

export default NewProduct;
