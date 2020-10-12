import Item from "components/item";
import Breadcrumb from "components/breadcrumb";
import { getItems } from "fetch_api";
import { Container as Content } from "ui";
import { useLoading } from "hooks";

const Home = ({ items = [], categories = [] }) => {
  const loading = useLoading(false);

  return (
    <>
      <Breadcrumb categories={categories} />
      <Content mb={40} mt={-20}>
        {items.map((element) => (
          <Item
            childRef={(ref) => (this.child = ref)}
            item={element}
            loading={loading}
            key={element.id}
          />
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
    const { items, categories } = await getItems(search);
    return { items, categories };
  } catch (error) {
    return {};
  } finally {
  }
};

export default Home;
