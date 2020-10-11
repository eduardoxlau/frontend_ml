import Item from "components/item";
import { Container } from "ui";
import { useLoading } from "hooks";

const Home = () => {
  const loading = useLoading(false);

  return loading ? (
    <Container mb={40} mt={50}>
      {[1, 2, 3].map((element) => (
        <Item loading={loading} key={element} />
      ))}
    </Container>
  ) : (
    <Container
      display="flex"
      justifyContent="center"
      pt={90}
      fontSize={20}
      fontFamily="bold"
    >
      Realiza una busqueda
    </Container>
  );
};

export default Home;
