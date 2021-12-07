import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { Button, Card, CardHeader } from "semantic-ui-react";

const Index = (planet) => {
  return (
    <div>
      <h1>planet</h1>
      <div>
        {planet.map((plant) => {
          return (
            <div key={planet._id}>
              <Card>
                <Card.Content>
                  <CardHeader>
                    <Link>
                      <a href={`/${planet.id}`}>{planet.name}</a>
                    </Link>
                  </CardHeader>
                </Card.Content>

                <Card.Content extra>
                  <CardHeader>
                    <Link href={`/${planet.id}`}>
                      <Button primary>View</Button>
                    </Link>
                  </CardHeader>
                </Card.Content>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Index.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/planet");
  const { data } = await res.json();

  return { planet: data };
};

export default Index;
