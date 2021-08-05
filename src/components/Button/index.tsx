import { ButtonHTMLAttributes, ReactNode } from "react";
import * as S from "./styles";
import { wrapperProps } from "./styles";

type ButtonTypes =
  | ButtonHTMLAttributes<HTMLButtonElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  children: ReactNode;
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  minimal?: boolean;
  icon?: JSX.Element;
  as?: React.ElementType;
} & ButtonTypes;

const Button: React.ForwardRefRenderFunction<wrapperProps, ButtonProps> = ({
  children,
  size = "medium",
  fullWidth = false,
  minimal = false,
  icon,
  ...props
}: ButtonProps) => (
  <S.Wrapper
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    minimal={minimal}
    {...props}
  >
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
);

export default Button;
