import { Container, Img, Label } from "ui";
import { Button } from "react-bootstrap";

const Detail = () => {
  return (
    <Container bg="#ffffff" p={20} display="flex" flexResponsive>
      <Container flex={3}>
        <Container textAlign="center" mb={50}>
          <Img src="/moto_big.jpg" />
        </Container>
        <Label fontSize="1.4em">Descripción del producto</Label>
        <Label my={20} color="#878787">
          Ad adipisicing magna amet officia incididunt occaecat deserunt ut
          reprehenderit dolor. Voluptate reprehenderit dolor duis commodo ea
          amet cupidatat consequat irure. Fugiat quis voluptate exercitation
          incididunt nostrud adipisicing ullamco.
        </Label>
      </Container>
      <Container flex={1}>
        <Label fontSize="0.9em">Nuevo - 234 vendidos</Label>
        <Label fontSize="1.3em" fontFamily="bold">
          Deco reserve oxford
        </Label>
        <Label fontSize="2em" fontFamily="bold" my={10}>
          $1.980
        </Label>
        <Button mt={10} className="btn btn-primary btn-lg btn-block">
          Comprar
        </Button>
      </Container>
    </Container>
  );
};

export default Detail;
