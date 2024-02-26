import styled from "@emotion/styled";
import React from "react";
import PreloaderIcon from "./assets/PreloaderIcon";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: var(--r-spacing-60);
  z-index: 100;
  background-color: ${({ theme }) => theme.color[500]};
`

const Text = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: white;
`

interface PreloaderProps {
  text?: string;
}

export function Preloader({ text }: PreloaderProps) {
  return (
    <Container>
      <PreloaderIcon color="white" />
      {text && <Text>{text}</Text>}
    </Container>
  )
}