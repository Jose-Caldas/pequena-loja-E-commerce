import Heading from "../components/Heading";
import * as S from "../styles/pages/completedOrder.styles";
import { CheckCircle } from "@styled-icons/boxicons-regular/CheckCircle";
import Button from "../components/Button";
import Link from "next/link";

export default function CompleteOrder() {
  return (
    <S.Wrapper>
      <Heading>Your purchase was successfull!</Heading>
      <CheckCircle size={100} />
      <Link href="/">
        <Button as="a">Go back home</Button>
      </Link>
    </S.Wrapper>
  );
}
