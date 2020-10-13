import { Container, Img, Label } from "ui";
import { Button } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";

const Detail = ({ item = {}, loading = false }) => {
  const {
    description = null,
    title = null,
    picture = null,
    condition = null,
    sold = 0,
    price = { amount: 0 },
  } = item;
  return (
    <Container bg="#ffffff" p={20} display="flex" flexResponsive>
      <Container flex={3}>
        <Container textAlign="center" mb={50}>
          {loading ? (
            <Skeleton width={400} height={400} />
          ) : (
            <Img src={picture} />
          )}
        </Container>

        <Label my={20} color="#878787">
          {loading ? (
            <Skeleton count={5} />
          ) : (
            <div>
              <Label fontSize="1.4em">Descripción del producto</Label>
              <Label>{description}</Label>
            </div>
          )}
        </Label>
      </Container>
      <Container flex={1}>
        <Label fontSize="0.9em">
          {loading ? (
            <Skeleton width={200} />
          ) : (
            <div>
              {" "}
              {condition == "new" ? "Nuevo" : "Usado"} - {sold} vendidos
            </div>
          )}
        </Label>
        <Label fontSize="1.3em" fontFamily="bold">
          {loading ? <Skeleton width={200} /> : <div>{title}</div>}
        </Label>
        <Label fontSize="2em" fontFamily="bold" my={10}>
          {loading ? <Skeleton width={200} /> : <div>${price.amount}</div>}
        </Label>
        {loading ? (
          <Skeleton width={200} height={50} />
        ) : (
          <Button mt={10} className="btn btn-primary btn-lg btn-block">
            Comprar
          </Button>
        )}
      </Container>
    </Container>
  );
};

export default Detail;
