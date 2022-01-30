import styled from "styled-components";

export const NavigationComponent = () => {
  return (
    <NavigationWrapper>
      <NavigationList>
        <NavigationItem>
          <LinkAnchor href="#home">Home</LinkAnchor>
        </NavigationItem>
        <NavigationItem>
          <LinkAnchor href="#compromisso">Compromisso</LinkAnchor>
        </NavigationItem>
        <NavigationItem>
          <LinkAnchor href="#noticia">Notícias</LinkAnchor>
        </NavigationItem>
        <NavigationItem>
          <LinkAnchor href="#agenda">Agenda</LinkAnchor>
        </NavigationItem>
      </NavigationList>
    </NavigationWrapper>
  );
};

const NavigationWrapper = styled.nav`
  display: grid;
  align-items: center;
`;

const NavigationList = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: 2.25rem;
`;

const NavigationItem = styled.li``;

const LinkAnchor = styled.a`
  color: #373737;
`;
