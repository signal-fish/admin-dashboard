import styled from "styled-components";
import Topbar from "./components/Topbar";
// import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import UserList from "./pages/UserList";
// import User from "./pages/User";

const App = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Topbar></Topbar>
        </Top>
        <Bottom>
          <Sidebar />
          <Main>
            {/* <Home /> */}
            <UserList />
            {/* <User /> */}
          </Main>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: grid;
  grid-template-rows: 60px calc(100vh - 60px);
`;

const Top = styled.div`
`;

const Bottom = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
`;

const Main = styled.div`
  overflow-y: scroll;
`;
export default App;
