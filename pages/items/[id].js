import Detail from "components/detail";
import Breadcrumb from "components/breadcrumb";
import { api } from "utils/constants";
import { Container as Content } from "ui";

const Item = ({ item, categories }) => {
  return (
    <>
      <Breadcrumb categories={categories} />
      <Content mb={40} mt={-20}>
        <Detail item={item} />
      </Content>
    </>
  );
};

export const getStaticProps = async (context) => {
  const {
    params: { id },
  } = context;
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
