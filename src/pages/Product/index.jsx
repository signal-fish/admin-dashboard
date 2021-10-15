import styled from "styled-components";
import Chart from "../../components/Chart";
import { Publish } from "@material-ui/icons";
import { useGlobalContext } from "../../context";
import { productSalesData } from "../../data";
import { Link } from "react-router-dom";
import { tablet } from "../../responsive";

const Product = () => {
  const { singleProduct } = useGlobalContext();
  const { id, name, image, sales, active, inStock } = singleProduct;

  return (
    <Container>
      <TitleWrapper>
        <Title>Product</Title>
        <Link to="/newproduct">
          <Create>Create</Create>
        </Link>
      </TitleWrapper>

      <Top>
        <TopLeft>
          <Chart
            data={productSalesData}
            dataKey="Sales"
            title="Sales Performance"
            aspect={3.5 / 1}
          />
        </TopLeft>
        <TopRight>
          <ImageWrapper>
            <Image src={image} alt={name} />
            <Name>{name}</Name>
          </ImageWrapper>
          <InfoWrapper>
            <Item>
              <Key>id: </Key>
              <Value>{id}</Value>
            </Item>
            <Item>
              <Key>sales: </Key>
              <Value>{sales}</Value>
            </Item>
            <Item>
              <Key>active: </Key>
              <Value>{active}</Value>
            </Item>
            <Item>
              <Key>in stock: </Key>
              <Value>{inStock}</Value>
            </Item>
          </InfoWrapper>
        </TopRight>
      </Top>

      <Bottom>
        <Form>
          <FormLeft>
            <Label>Product Name</Label>
            <Input type="text" placeholder={name}></Input>
            <Label>In Stock</Label>
            <Select name="inStock" id="inStock">
              <Option value="yes">Yes</Option>
              <Option value="no">No</Option>
            </Select>
            <Label>Active</Label>
            <Select name="active" id="active">
              <Option value="yes">Yes</Option>
              <Option value="no">No</Option>
            </Select>
          </FormLeft>
          <FormRight>
            <Upload>
              <UploadImage src={image} alt={name} />
              <Label for="file">
                <Publish />
              </Label>
              <Input type="file" id="file" style={{ display: "none" }}></Input>
            </Upload>
            <Update>Update</Update>
          </FormRight>
        </Form>
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  padding-left: 20px;
`;

const Create = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 20px;

  &:hover {
    opacity: 0.8;
  }
`;

const Top = styled.div`
  display: flex;

  ${tablet({
    flexDirection: "column"
  })}
`;

const TopLeft = styled.div`
  flex: 1.5;
`;

const TopRight = styled.div`
  flex: 1;
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;

const Name = styled.span`
  font-weight: 600;
  font-size: 25px;
`;

const InfoWrapper = styled.div`
  margin-top: 10px;
`;

const Item = styled.div`
  margin: 3px 0;
  width: 150px;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
`;

const Key = styled.span``;

const Value = styled.span`
  font-weight: 300;
`;

const Bottom = styled.div`
  margin: 20px 20px 0 20px;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;

  ${tablet({
    flexDirection: "column",
  })}
`;

const FormLeft = styled.div`
  display: flex;
  flex-direction: column;

  ${tablet({
    marginBottom:"20px"
  })}
`;

const Label = styled.label`
  margin-bottom: 10px;
  color: gray;
`;

const Input = styled.input`
  margin-bottom: 10px;
  border: none;
  padding: 5px;
  border-bottom: 1px solid gray;
`;

const Select = styled.select`
  margin-bottom: 10px;
`;

const Option = styled.option``;

const FormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Upload = styled.div`
  display: flex;
  align-items: center;
`;

const UploadImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
  background: #fff;

  ${tablet({
    marginBottom: "20px",
  })}
`;

const Update = styled.button`
  border: none;
  padding: 5px;
  border-radius: 5px;
  background-color: darkblue;
  color: white;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export default Product;
