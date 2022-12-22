
import Head from "next/head"
import { Navbar } from "../ui"

export const Layout = ({ children, title }) => {
  return (
    <>
    <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name='author' content="Iris Guajardo" />
        <meta name='description' content={`Información sobre el pokemon ${title}`} />
        <meta name='keywords' content={`${title}, pokemon, pokedex`} />

        <Navbar />

        <main>
            { children }
        </main>
    </Head>
    </>
  )
}
