import styled from "styled-components";
import { transactionsData } from "../../data";

const WidgetLg = () => {
  const { head, data } = transactionsData;

  return (
    <Container>
      <Title>Latest transactions</Title>
      <Table>
        <Row>
          {head.map((h) => {
            const { id, title } = h;
            return <Head key={id}>{title}</Head>;
          })}
        </Row>
        {
            data.map(item => {
              const {id, image, name, date, amount, status} = item
              return (
                <Row key={id}>
                  <User>
                    <Image src={image} alt={name}/>
                    <Name>{name}</Name>
                  </User>
                  <Date>{date}</Date>
                  <Amount>${amount}</Amount>
                  <Status>
                    <Button type={status}>{status}</Button>
                  </Status>
                </Row>
              );
            })
          }
        </Table>
    </Container>
  );
};

const Container = styled.div`
  flex: 1.5;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
  overflow-x: scroll;
`;

const Title = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 20px;
`;

const Row = styled.tr``;

const Head = styled.th`
  text-align: left;
`;

const User = styled.td`
  display: flex;
  align-items: center;
  font-weight: 600;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const Name = styled.span``;

const Date = styled.td`
  font-weight: 300;
`;

const Amount = styled.td`
  font-weight: 300;
`;

const Status = styled.td``;

const Button = styled.button`
  padding: 5px 7px;
  border: none;
  border-radius: 10px;
  background-color: ${(props) =>
    props.type === "Approved"
      ? "#e5faf2"
      : props.type === "Declined"
      ? "#fff0f1"
      : "#ebf1fe"};
  color: ${(props) =>
    props.type === "Approved"
      ? "#3bb077"
      : props.type === "Declined"
      ? "#d95087"
      : "#2a7ade"};
`;

export default WidgetLg;
