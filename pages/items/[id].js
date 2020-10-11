import Detail from "components/detail";
import Breadcrumb from "components/breadcrumb";
import { api } from "utils/constants";
import { Container as Content } from "ui";
import { useLoading } from "hooks";

const Item = ({ item, categories }) => {
  const loading = useLoading(false);
  return (
    <>
      <Breadcrumb categories={categories} />
      <Content mb={40} mt={-20}>
        <Detail item={item} loading={loading} />
      </Content>
    </>
  );
};

Item.getInitialProps = async (props) => {
  const {
    query: { id },
  } = props;
  try {
    const { item, categories } = await fetch(`${api}/${id}`).then((response) =>
      response.json()
    );
    return { item, categories };
  } catch (error) {
    return {};
  } finally {
  }
};
export default Item;
