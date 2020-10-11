import { Container, Img, Label } from "ui";
import Link from "next/link";

const Card = ({ item = {} }) => {
  const { id, title, picture, free_shipping, price = { amount: 0 } } = item;
  return (
    <Link href={`/items/${id}`}>
      <Container p={10} height={200} bg="#ffffff">
        <Container
          display="flex"
          height="100%"
          borderBottom="2px solid #EEEEEE"
        >
          <Img src={picture} height="100%" />
          <Container display="flex" flex="auto" justifyContent="space-between">
            <Container p={20}>
              <Label
                fontSize="1.5em"
                fontFamily="bold"
                display="flex"
                alignItems="center"
              >
                $ {price.amount} &nbsp;
                {free_shipping && <Img src="/ic_shipping.png" />}
              </Label>
              <Label fontSize="1.1em" color="#6C6C6C">
                {title}
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
