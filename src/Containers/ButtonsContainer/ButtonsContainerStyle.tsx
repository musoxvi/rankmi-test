import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  width: 750px;
  height: 367px;
  padding: 42px;
  border: 2px solid #eeeeee;
`;

const Title = styled.h3`
  font-family: Arial;
  font-size: 31px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.5px;
  margin: 0;
  padding-bottom: 42px;

  &::after {
    content: "";
    width: 152px;
    height: 4px;
    border-radius: 1.3px;
    background-color: #dcdcdc;
    display: flex;
    margin-top: 12.5px;
  }
`;

const Wrapper = styled.div`
  display: flex;
`;

const Default = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 32px;
  & > button {
    width: 102px;
  }
`;
const Secondary = styled.div`
  display: flex;
  flex-direction: column;
  & > button {
    width: 102px;
  }
`;

export { Secondary, Default, Wrapper, Title, ButtonWrapper, Container };
