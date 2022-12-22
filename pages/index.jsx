import { Card, Grid, Row, Text } from '@nextui-org/react'
import { pokeApi } from '../api';
import { Layout } from '../components/layouts'
import { PokemonCard } from '../components/pokemon/PokemonCard';


export default function HomePage({ pokemons }) {

  return (
    <Layout title='Listado de Pokemon'>
    <Grid.Container gap={2} justify='flex-start'>
     {
       pokemons.map(({id, name, img}) => (
        <PokemonCard key={id} id={id} name={name} img={img}/>

    ))
   }
  </Grid.Container>

   </Layout>
  )
}

export async function getStaticProps(context) {
  const { data }= await pokeApi.get('/pokemon?limit=151')

  const pokemons = data.results.map((poke, i) => ({
    ...poke, 
    id: i +1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }))

  
  return {
    props: {
      pokemons
    }, // will be passed to the page component as props
  }
}

