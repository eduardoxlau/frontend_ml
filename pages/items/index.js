import { useEffect } from "react";
import { useRouter } from "next/router";
import Item from "components/item";
import Breadcrumb from "components/breadcrumb";
import { api, ROUTECHANGE } from "utils/constants";
import { Container as Content } from "ui";

const Home = ({ items = [], categories = [] }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log("App is changing to: ", url);
    };

    router.events.on(ROUTECHANGE, handleRouteChange);
    return () => {
      router.events.off(ROUTECHANGE, handleRouteChange);
    };
  }, []);
  return (
    <>
      <Breadcrumb categories={categories} />
      <Content mb={40} mt={-20}>
        {items.map((element) => (
          <Item item={element} key={element.id} />
        ))}
      </Content>
    </>
  );
};

export const getStaticProps = async (context) => {
  const {
    params: { search },
  } = context;
  try {
    const { items, categories } = await fetch(
      `${api}?search=${search}`
    ).then((response) => response.json());
    return {
      props: { items, categories },
    };
  } catch (error) {
    return {};
  } finally {
  }
};

export default Home;
