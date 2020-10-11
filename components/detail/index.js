import { Container, Img, Label } from "ui";
import { Button } from "react-bootstrap";

const Detail = ({ item }) => {
  const {
    description = null,
    title = null,
    picture = null,
    condition = null,
    price = { amount: 0 },
  } = item;
  return (
    <Container bg="#ffffff" p={20} display="flex" flexResponsive>
      <Container flex={3}>
        <Container textAlign="center" mb={50}>
          <Img src={picture} />
        </Container>
        <Label fontSize="1.4em">Descripción del producto</Label>
        <Label my={20} color="#878787">
          {description}
        </Label>
      </Container>
      <Container flex={1}>
        <Label fontSize="0.9em">
          {condition == "new" ? "Nuevo" : "Usado"} - 234 vendidos
        </Label>
        <Label fontSize="1.3em" fontFamily="bold">
          {title}
        </Label>
        <Label fontSize="2em" fontFamily="bold" my={10}>
          ${price.amount}
        </Label>
        <Button mt={10} className="btn btn-primary btn-lg btn-block">
          Comprar
        </Button>
      </Container>
    </Container>
  );
};

export default Detail;
