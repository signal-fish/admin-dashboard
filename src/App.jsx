import styled from "styled-components"
import Topbar from './components/Topbar'
import Home from "./pages/Home"
import Sidebar from "./components/Sidebar"

const App = () => {
  return (
    <Container>
      <Topbar></Topbar>
      <Wrapper>
        <Sidebar />
      </Wrapper>
      <Home />
    </Container>
  );
}

const Container = styled.div`
width: 100vw;
height: 100vh;
`

const Wrapper = styled.div`
  display: flex;
  margin-top: 10px;
`;
export default App
