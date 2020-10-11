import { Container as Content } from "ui";
import { Container } from "react-bootstrap";
import SearchBar from "components/searchBar";

const Layout = ({ children }) => {
  return (
    <Content>
      <SearchBar />
      <Container>
          {children}
      </Container>
    </Content>
  );
};

export default Layout;
