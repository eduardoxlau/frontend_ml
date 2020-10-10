import { Container as Content, Input, Img } from "ui";
import { Container, Navbar, Form } from "react-bootstrap";

const SearchBar = () => {
  return (
    <Content bg="#fee601">
      <Container>
        <Content display="flex" alignItems="center">
          <Navbar>
            <Navbar.Brand href="#">
              <Img src="/Logo_ML.png" alt="logo mercadolibre" />
            </Navbar.Brand>
          </Navbar>
          <Input borderRadius={2} placeholder="Nunca dejes de buscar" />
        </Content>
      </Container>
    </Content>
  );
};

export default SearchBar;
