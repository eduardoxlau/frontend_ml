import { Breadcrumb } from "react-bootstrap";

const BreadcrumbCustom = ({ categories }) => {
  return (
    <Breadcrumb>
      {!categories.length ? (
        <Breadcrumb.Item>No contiene categorias</Breadcrumb.Item>
      ) : (
        categories.map((category) => (
          <Breadcrumb.Item key={category}>{category}</Breadcrumb.Item>
        ))
      )}
    </Breadcrumb>
  );
};

export default BreadcrumbCustom;
