import Detail from "components/detail";
import Breadcrumb from "components/breadcrumb";
import { getItem } from "fetch_api";
import { Container as Content } from "ui";
import { useLoading } from "hooks";
import NotFound from "components/errors/notFound";

const Item = ({ item, categories, error }) => {
  const loading = useLoading(false);
  return (
    <>
      {error ? (
        <NotFound />
      ) : (
        <>
          <Breadcrumb categories={categories} />
          <Content mb={40} mt={-20}>
            <Detail item={item} loading={loading} />
          </Content>
        </>
      )}
    </>
  );
};

Item.getInitialProps = async (props) => {
  const {
    query: { id },
  } = props;
  try {
    const { item, categories, error } = await getItem(id);
    if (error) throw new Error(error);
    return { item, categories };
  } catch (error) {
    return { error };
  } finally {
  }
};
export default Item;
