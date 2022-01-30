import styled from "styled-components";
import { ReactComponent as LogoIcon } from "../assets/logo.svg";
import { NavigationComponent } from "./Navigation.component";

export const HeaderComponent = () => {
  return (
    <HeaderWrapper>
      <LogoIcon />
      <NavigationComponent />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: var(--header-height);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 0 var(--main-page-spacing);
  background-color: white;
`;
