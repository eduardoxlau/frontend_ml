import { Container, Label, Svg } from "ui";
import Link from "next/link";

const Error = () => (
  <Container
    display="flex"
    flexDirection="column"
    alignItems="center"
    marginTop="10%"
  >
    <Container>
      <Svg />
    </Container>
    <Label fontSize={23} fontFamily="bold" margin={10}>
      Parece que esta página no existe
    </Label>
    <Link href="/">
      <Label>Ir a la pagina principal</Label>
    </Link>
  </Container>
);
export default Error;
