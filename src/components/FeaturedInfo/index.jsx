import styled from "styled-components"
import { featuredItems } from "../../data"
import { tablet } from "../../responsive"

const FeaturedInfo = () => {
  return (
    <Container>
      {
      featuredItems.map(item => {
        const {id, title, money, moneyRate, icon, subTitle} = item
        return (
          <FeaturedItem key={id}>
            <Title>{title}</Title>
            <FeaturedMoneyWrapper>
              <FeaturedMoney>${money}</FeaturedMoney>
              <FeaturedMoneyRate>
                {moneyRate}
                <FeaturedIcon>{icon}</FeaturedIcon>
              </FeaturedMoneyRate>
            </FeaturedMoneyWrapper>
            <SubTitle>{subTitle}</SubTitle>
          </FeaturedItem>
        );
      })
      }
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  ${tablet({
    flexDirection: "column",
  })}
`;

const FeaturedItem = styled.div`
  flex: 1;
  margin: 0px 20px;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);

  ${tablet({
    marginBottom: "20px",
  })}
`;

const Title = styled.span`
  font-size: 20px;
`;

const FeaturedMoneyWrapper = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;


`;

const FeaturedMoney = styled.span`
  font-size: 30px;
  font-weight: 600;
`;

const FeaturedMoneyRate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const FeaturedIcon = styled.span`
  font-size: 14px;
  margin-left: 5px;
`;

const SubTitle = styled.span`
  font-size: 15px;
  color: gray;
`;
export default FeaturedInfo
