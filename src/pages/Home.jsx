import { useEffect, useState } from "react"

import Article from '../components/Article'

import API from '../lib/endpoints'

function Home({ topic }) {
    let [articles, setArticles] = useState(null)
    let [loading, setLoading] = useState(true)

    useEffect(() => {
        API.fetchAll({
            topic: topic != 'home' ? topic : null
        }).then(a => {
            setArticles(a.articles)
            setLoading(false)
        })
    }, [topic])

    if (loading) return (
        <main style={{ 'textAlign': 'center' }}>
            <h1>Loading...</h1>
        </main>
    )

    return (
        <main className="articles">
            {articles?.map(article => (
                <Article key={article.article_id} data={article} />
            ))}
        </main>
    )
}

export default Home