import { useEffect, useState } from "react"

import Article from '../components/Article'

import API from '../lib/endpoints'

function Home({ topic }) {
    let [articles, setArticles] = useState(null)

    useEffect(() => {
        API.getArticles({
            topic: topic != 'home' ? topic : null
        }).then(a => setArticles(a.articles))
    }, [topic])

    return (
        <main className="articles">
            {articles?.map(article => (
                <Article key={article.article_id} data={article} />
            ))}
        </main>
    )
}

export default Home