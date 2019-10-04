import React, { useState, useEffect, useCallback } from "react";
import { Button } from "../../Components/Button/Button";
import {
  Secondary,
  Default,
  Wrapper,
  Title,
  ButtonWrapper,
  Container
} from "./ButtonsContainerStyle";

const ButtonsContainer = () => {
  const [countDefault, setCountDefault] = useState(0);
  const [countSecondary, setCountSecondary] = useState(0);

  useEffect(() => {
    document.title = `Has hecho clic ${countDefault} veces`;
  });

  const memoizedHandleClickDefault = useCallback(
    () => setCountDefault(countDefault + 1),
    [countDefault]
  );

  const memoizedHandleClickSecondary = useCallback(
    () => setCountSecondary(countSecondary + 1),
    [countSecondary]
  );

  return (
    <Container>
      <ButtonWrapper>
        <Title>🔘 Button</Title>
        <Wrapper>
          <Default>
            <p>Default</p>
            <Button label="Big button" onClick={memoizedHandleClickDefault} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <span>El contador está a {countDefault}</span>
          </Default>
          <Secondary>
            <p>Secondary</p>
            <Button
              background={"#dcdcdc"}
              color={"#808080"}
              label="Big button"
              onClick={memoizedHandleClickSecondary}
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <span>El contador está a {countSecondary}</span>
          </Secondary>
        </Wrapper>
      </ButtonWrapper>
    </Container>
  );
};

export default ButtonsContainer;
