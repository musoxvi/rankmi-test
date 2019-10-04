export interface ButtonProps {
  classes?: {
    wrapper?: string;
  };
  color?: string;
  disabled?: boolean;
  label?: string;
  noMargin?: string;
  onClick?: Function;
  variant?: variantType;
  background?: backgroundType;
}

export type variantType = "classic" | "outline" | "flat";

export type backgroundType = "secondary" | "default" | string;

export const defaultProps = {
  classes: {
    wrapper: ""
  },
  background: "#2684ff",
  color: "#FFFFFF",
  disabled: false,
  noMargin: "",
  variant: "classic"
};

//#dcdcdc
