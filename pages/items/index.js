import Item from "components/item";
import Breadcrumb from "components/breadcrumb";
import { api } from "utils/constants";
import { Container as Content } from "ui";
import { useLoading } from "hooks";

const Home = ({ items = [], categories = [] }) => {
  const loading = useLoading(false);

  return (
    <>
      <Breadcrumb categories={categories} />
      <Content mb={40} mt={-20}>
        {items.map((element) => (
          <Item item={element} loading={loading} key={element.id} />
        ))}
      </Content>
    </>
  );
};

Home.getInitialProps = async (props) => {
  const {
    query: { search },
  } = props;
  try {
    const { items, categories } = await fetch(
      `${api}?q=${search}`
    ).then((response) => response.json());
    return { items, categories };
  } catch (error) {
    return {};
  } finally {
  }
};

export default Home;
