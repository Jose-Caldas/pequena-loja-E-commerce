import { ButtonHTMLAttributes, ReactNode } from "react";
import * as S from "./styles";

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  children: ReactNode;
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  icon?: JSX.Element;
} & ButtonTypes;

const Button = ({
  children,
  size = "medium",
  fullWidth = false,
  icon,
  ...props
}: ButtonProps) => (
  <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...props}>
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
);

export default Button;
