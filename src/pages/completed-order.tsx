import Heading from "../components/Heading";
import { Wrapper, Content } from "../styles/pages/completedOrder.styles";

export default function CompleteOrder() {
  return (
    <Wrapper>
      <img src="/img/confetti.png" alt="" />
      <Content>
        <Heading color="black" lineLeft lineColor="primary">
          Your order was completed successfully
        </Heading>
      </Content>
    </Wrapper>
  );
}
