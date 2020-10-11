import { Container, Img, Label } from "ui";
import Skeleton from "react-loading-skeleton";
import Link from "next/link";

const Card = ({ item = {}, loading = false }) => {
  const { id, title, picture, free_shipping, price = { amount: 0 } } = item;
  return (
    <Link href={`/items/${id}`}>
      <Container p={10} height={200} bg="#ffffff">
        <Container
          overflow="hidden"
          display="flex"
          height="100%"
          borderBottom="2px solid #EEEEEE"
        >
          <Container width={180}>
            {loading ? (
              <Skeleton width={100} height={160} />
            ) : (
              <Img src={picture} height="100%" />
            )}
          </Container>

          <Container
            display="flex"
            flex="auto"
            flexResponsive
            justifyContent="space-between"
          >
            <Container p={20} flex={1}>
              <Label
                fontSize="1.5em"
                fontFamily="bold"
                display="flex"
                alignItems="center"
              >
                {loading ? (
                  <Skeleton width={100} />
                ) : (
                  <div>
                    $ {price.amount} &nbsp;
                    {free_shipping && <Img src="/ic_shipping.png" />}
                  </div>
                )}
              </Label>
              <Label fontSize="1.1em" color="#6C6C6C">
                {loading ? <Skeleton count={2} /> : <div>{title}</div>}
              </Label>
            </Container>
            <Label
              px={50}
              fontSize="0.8em"
              color="#A6A6A6"
              justifyContent="space-around"
              display="flex"
              flexDirection="column"
            >
              {loading ? <Skeleton width={100} /> : <div>Capital Federal</div>}
              <div> </div>
            </Label>
          </Container>
        </Container>
      </Container>
    </Link>
  );
};

export default Card;
