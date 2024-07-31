import Container from "react-bootstrap/Container";
import data from "../data/products.json";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const MyPromise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });
    MyPromise.then((response) => {
      if (!id) {
        setItems(response);
      } else {
        const filter = response.filter((i) => i.categoria === id);
        setItems(filter);
      }
    }).finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Container>Wait....</Container>;

  return (
    
      <Container>
        <h1>Productos</h1>
        <Container className="contenedorCard">
        {items.map((i) => (
          <Card key={i.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={i.img} />
            <Card.Body>
              <Card.Title>{i.nombre}</Card.Title>
              <Card.Text>{i.detalle}</Card.Text>
              <Card.Text>${i.precio}</Card.Text>
              <Link to={`/item/${i.id}`}>
                {" "}
                <Button variant="primary">Go somewhere</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
    </Container>
      </Container>
    
  );
};
