import styled from "styled-components";
import FeaturedInfo from "../../components/FeaturedInfo";
import Chart from "../../components/Chart";
import { userData } from "../../data";
import WidgetLg from "../../components/WidgetLg";
import WidgetSm from "../../components/WidgetSm";

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <FeaturedInfo />
        <Chart data={userData} title="User Active" grid dataKey="Active User" />
        <HomeWidget>
          <WidgetSm />
          <WidgetLg />
        </HomeWidget>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  padding-top: 30px;
  overflow-y: scroll;
`;

const HomeWidget = styled.div`
  display: flex;
  margin: 20px;
`;

export default Home;
