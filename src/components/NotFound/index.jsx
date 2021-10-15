import styled from "styled-components";
import { Link } from "react-router-dom";

const NotFound = ({ status }) => {
  return (
    <Container>
      <Error>404 - Not Found!</Error>
      <GoHome>
        <Link to="/">Go Home</Link>
      </GoHome>
    </Container>
  );
};

const Container = styled.div``;

const Error = styled.h1`
  font-size: 40px;
  margin-top: 200px;
  text-align: center;
`;

const GoHome = styled.div`
  text-align: center;
  font-size: 25px;
`;

export default NotFound;
