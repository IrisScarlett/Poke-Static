import React from 'react'
import { Card, Grid, Row, Text, Button, Container, Image } from '@nextui-org/react'
import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts'

const PokemonPage = ({pokemon}) => {
    
  return (
    <Layout title='Miau'>
      <Grid.Container css={{marginTop: '5px', dropShadow: "none"}} gap={2}>
          <Grid xs={12} sm={4}>
            <Card hoverable css={{padding: '30px'}}>
              <Card.Body>
                <Card.Image 
                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                alt={pokemon.name}
                width='100%'
                height={200}
                />                
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={12} sm={8}>
            <Card>
              <Card.Header css={{display: 'flex', justifyContent: 'space-between'}}>
              <Text h1>{pokemon.name}</Text>
              <Button color='gradient' ghost>
                Guardar en favoritos
              </Button>
              </Card.Header>
              <Card.Body>
                <Text size={30}>Sprites:</Text>
                <Container direction='row' display='flex' gap={0}>
                  <Image 
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100} />
                  <Image 
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100} />
                  <Image 
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100} />
                  <Image 
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100} />
                </Container>
              </Card.Body>
            </Card>
          </Grid>
      </Grid.Container>
    </Layout>
  )
}

export async function getStaticPaths() {

  const pokemon151 = [...Array(151)].map((v, i) => `${i+1}`);
  
  return {
    // paths: [
    //   { params: { id: '1' }
    //   }
    // ],
    paths: pokemon151.map(id => ({
      params: { id }
    })),
    fallback: false, // can also be true or "blocking"
  }
}

export async function getStaticProps({params}) {

  const { id }  = params;

  const { data }= await pokeApi.get(`/pokemon/${id}`)
 
  return {
    props: {
      pokemon: data
    }
  }
}


export default PokemonPage