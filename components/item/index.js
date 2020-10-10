import { Container, Img, Label } from "ui";
import Link from "next/link";

const Card = () => {
  return (
    <Link href="/items">
      <Container p={10} height={200} bg="#ffffff">
        <Container
          display="flex"
          height="100%"
          borderBottom="2px solid #EEEEEE"
        >
          <Img src="/moto.jpg" height="100%" />
          <Container display="flex" flex="auto" justifyContent="space-between">
            <Container p={20}>
              <Label
                fontSize="1.5em"
                fontFamily="bold"
                display="flex"
                alignItems="center"
              >
                $ 1.980 &nbsp;
                <Img src="/ic_shipping.png" />
              </Label>
              <Label fontSize="1.1em" color="#6C6C6C">
                iPhone 11 64 Gb Blanco
              </Label>
            </Container>
            <Label p={50} fontSize="0.8em" color="#A6A6A6">
              Capital Federal
            </Label>
          </Container>
        </Container>
      </Container>
    </Link>
  );
};

export default Card;
