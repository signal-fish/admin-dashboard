import styled from "styled-components";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";
import Menu from "./components/Menu";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Container>
        <Menu />
        <Wrapper>
          <Top>
            <Topbar></Topbar>
          </Top>
          <Bottom>
            <Sidebar />
            <Main>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/users" component={UserList} />
                <Route path="/user/:userId" component={User} />
                <Route path="/newUser" component={NewUser} />
                <Route path="/products" component={ProductList} />
                <Route path="/product/:productId" component={Product} />
                <Route path="/newproduct" component={NewProduct} />
                <Route component={NotFound} status={404} />
              </Switch>
            </Main>
          </Bottom>
        </Wrapper>
      </Container>
    </Router>
  );
};

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: grid;
  grid-template-rows: 60px calc(100vh - 60px);
`;

const Top = styled.div``;

const Bottom = styled.div`
  display: grid;
  grid-template-columns: 100vw;
`;

const Main = styled.div`
  overflow-y: scroll;
  background: #ebebeb;
`;
export default App;
