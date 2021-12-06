import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { Button, Card } from 'semantic-ui-react';

const Index = ({ planets }) => {
  return (
    <div className="planets-container">
      <h1>Planets</h1>
      <div className="grid wrapper">
        {planets.map(planet => {
          return (
            <div key={planet._id}>
              <Card>
                <Card.Content>
                  <Card.Header>
                    <Link href={`/${planet._id}`}>
                      <a>{planet.name}</a>
                    </Link>
                  </Card.Header>
                </Card.Content>
                <Card.Content extra>
                  <Link href={`/${planet._id}`}>
                    <Button primary>View</Button>
                  </Link>
                  <Link href={`/${planet._id}/edit`}>
                    <Button primary>Edit</Button>
                  </Link>
                </Card.Content>
              </Card>
            </div>
          )
        })}
      </div>
    </div>
  )
}

Index.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/planet');
  const { data } = await res.json();

  return { planets: data }
}

export default Index;
