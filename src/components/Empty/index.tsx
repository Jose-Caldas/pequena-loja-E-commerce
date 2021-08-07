import Link from "next/link";
import Button from "../Button";
import * as S from "./styles";

export type EmptyProps = {
  title: string;
  description: string;
  hasLink?: boolean;
};

const Empty = ({ title, description, hasLink }: EmptyProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    {hasLink && (
      <Link href="/products">
        <Button as="a">Go back to store</Button>
      </Link>
    )}
  </S.Wrapper>
);

export default Empty;
