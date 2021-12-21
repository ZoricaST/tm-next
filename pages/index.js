import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'

export default function Home({articles}) {
console.log(articles)
return (
<div >
<Head>
<title> WebDEv News</title>
<meta name='keywords' content='web development, programming'/>
</Head>

</div>
)
}

export const getStaticProps = async () => {
const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
const articles = await res.json()

return {
props: {
articles,
},
}
}