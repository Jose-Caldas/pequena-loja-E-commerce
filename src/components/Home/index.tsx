import { Wrapper, Title, Logo, Description, Illustration } from "./styles";
import {} from "@storybook/react";
import SideBar from "../SideBar";
import { Container } from "../Container";

export default function Home({
  title = "React avançado",
  description = "TypeScript, ReactJS, NextJS e Styled-Components",
}) {
  return (
    <Wrapper>
      <main>
        <Logo
          src="/logo.svg"
          alt="logo-Atomo e ao lado escrito react avançado"
        />
        <Title>{title}</Title>

        <Description>{description}</Description>
        <Illustration
          src="/hero-illustration.svg"
          alt="figura de um desenvolvedor e uma tela com códigos"
        />
      </main>
    </Wrapper>
  );
}
