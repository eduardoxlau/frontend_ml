import { Container as Content } from "ui";

import { Container } from "react-bootstrap";
import SearchBar from "components/searchBar";
import Breadcrumb from "components/breadcrumb";

const Layout = ({ children }) => {
  return (
    <Content>
      <SearchBar />
      <Container>
        <Breadcrumb />
        <Content mb={40} mt={-20}>
          {children}
        </Content>
      </Container>
    </Content>
  );
};

export default Layout;
