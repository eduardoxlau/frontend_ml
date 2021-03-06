import { useState } from "react";
import { Container as Content, Input, Img } from "ui";
import { Container, Navbar } from "react-bootstrap";
import { useRouter } from "next/router";
import Link from "next/link";

const preventDefault = (f) => (e) => {
  e.preventDefault();
  f(e);
};
const SearchBar = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSubmit = preventDefault((e) => {
    router.push(`/items?search=${search}`);
  });

  const handleChange = (e) => setSearch(e.target.value);
  return (
    <Content bg="#fee601">
      <Container>
        <form onSubmit={handleSubmit}>
          <Content display="flex" alignItems="center">
            <Navbar>
              <Link href="/">
                <Navbar.Brand href="#">
                  <Img src="/Logo_ML.png" alt="logo mercadolibre" />
                </Navbar.Brand>
              </Link>
            </Navbar>
            <Input
              onChange={handleChange}
              borderRadius={2}
              name="search"
              placeholder="Nunca dejes de buscar"
            />
          </Content>
        </form>
      </Container>
    </Content>
  );
};

export default SearchBar;
