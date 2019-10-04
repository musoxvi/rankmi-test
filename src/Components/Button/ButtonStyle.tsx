// Dependencies
import styledComponents from "styled-components";

export const ButtonWrapper = styledComponents<any>("button").attrs(props => ({
  className: props.classes,
  disabled: props.disabled
}))`

  background: none;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  font-size: 14px;
  height: 36px;
  font-family: 'PT Sans', sans-serif;
  font-weight: bold;
  line-height: 36px;
  outline: none;
  padding: 0 8px;
  width: auto;


  &.classic {
    border: 1px solid ${props => props.background};
    background: ${props => props.background};
    color: ${props => props.color};

    &:hover {
      border: 1px solid ${props => props.background};
      background:${props => props.background}CC;
    }

    &:active {
      background: ${props => props.background};
      border: 1px solid ${props => props.color}B2;
    }

    &:disabled {
      background: #eeeeee;
      border: 1px solid ${"#666666"};
    }
  }


  &.outline, &.flat {
    background: ${"#FFFFFF"};
    color: #666666;

    &:hover {
      background: ${props => props.background}D8;
    }

    &:active {
      background: ${props => props.color};
    }

    &:disabled {
      background: ${"#FFFFFF"};
      color: ${"#666666"};
    }
  }

  &.flat {
    background: none;
    color: #666666;
  }

  &.outline {
    border: 1px solid  ${props => props.background};

    &:hover {
      border: 1px solid ${props => props.background}D8;
    }

    &:disabled {
      border: 1px solid ${"#EEEEEE"};
    }
  }

  &.invisible {
    display: none;
  }

  ${props =>
    props.noMargin !== "vertical" &&
    props.noMargin !== "horizontal" &&
    `
      &.no-margin-${props.noMargin} {
        margin-${props.noMargin}: 0;
        padding-${props.noMargin}: 0;
      }
    `}

  &.no-margin-horizontal {
    margin-left: 0;
    margin-right: 0;
  }

  &.no-margin-vertical {
    margin-bottom: 0;
    margin-top: 0;
  }

  &:disabled {
    color: ${"#666666"};
    cursor: default;
  }
`;
