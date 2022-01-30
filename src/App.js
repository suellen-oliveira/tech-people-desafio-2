import styled from "styled-components";
import { HeaderComponent } from "./components/Header.component";

const App = () => {
  return (
    <MainPage>
      <HeaderComponent />
    </MainPage>
  );
};

export default App;

const MainPage = styled.main`
  padding: 0 var(--main-page-spacing);
`;
