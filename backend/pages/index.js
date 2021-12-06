import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import {Button ,Card} from 'semantic-ui-react';

 
const Index = ({plants}) =>{


  return(
    <>
    <div className="plants-container">
<h1>Plants</h1>

<div className="grid wrapper">
  {plants.map(plant =>{
    return(
      <div key={plant._id}>
        <Card>
          <Card.Content>
            <Card.Header>
              <Link href={`/${plants._id}`}>
              <a>{plant.PlantName}</a>
              </Link>
            </Card.Header>
          </Card.Content>

          <Card.Content extra>

        <Link href={`/${plant._id}`}>
        <Button primary> View</Button>
         </Link>
         <Link href={`/${plant._id}/edit`}>
        <Button primary> Edit</Button>
         </Link>

          </Card.Content>
        </Card>
      </div>
    )
  })}

</div>

    </div>
    </>
  )
}

Index.getInitialProps = async () =>{
  const res = await fetch('http://localhost:3000/api/plants')
  const {data} = await res.json();

  return{plants:data}
}

export default Index;