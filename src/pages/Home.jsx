import { useEffect, useState } from "react"

import Article from '../components/Article'
import Filter from '../components/Filter'

import API from '../lib/endpoints'

function Home({ topic }) {
    let [articles, setArticles] = useState(null)
    let [loading, setLoading] = useState(true)

    let [sortBy, setSortBy] = useState('created_at')
    let [order, setOrder] = useState('desc')

    useEffect(() => {
        API.fetchAll({
            topic: topic != 'home' ? topic : null,
            sort_by: sortBy,
            order
        }).then(a => {
            setArticles(a.articles)
            setLoading(false)
        })
    }, [topic, sortBy, topic])

    if (loading) return (
        <main style={{ 'textAlign': 'center' }}>
            <h1>Loading...</h1>
        </main>
    )

    return (
        <>
            <Filter sortBy={setSortBy} orderBy={setOrder} />
            <main className="articles">
                {articles?.map(article => (
                    <Article key={article.article_id} data={article} />
                ))}
            </main>
        </>
    )
}

export default Home