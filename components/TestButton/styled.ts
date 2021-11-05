import styled from '@emotion/styled';

const TestButtonStyled = styled.div`
  display: inline-block;
  padding: 14px 20px;
  border-radius: 4px;
  background-color: #507fe1;
  color: #ffffff;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s;

  &.storybook-button--large {
    font-size: 22px;
  }
  &.storybook-button--small {
    font-size: 16px;
  }

  &.storybook-button--primary {
    background-color: #155ded;
  }
  &.storybook-button--secondary {
    background-color: #507fe1;
  }

  :hover {
    background-color: #155ded;
  }

  &.storybook-button--bold {
    font-weight: 700;
  }
`;

export default TestButtonStyled;
