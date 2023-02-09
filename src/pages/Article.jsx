import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import API from '../lib/endpoints'
import { toProperCase, formatDate } from '../lib/functions'

import Comments from '../components/Comments'
import Vote from '../components/Vote'

function Article() {
    let { article_id } = useParams()

    let [error, setError] = useState(null)
    let [loading, setLoading] = useState(true)
    let [data, setData] = useState(null)

    useEffect(() => {
        API.fetch(article_id)
            .then(data => {
                if (data instanceof Error)
                    return setError(data.message)

                setData(data.article)
                setLoading(false)
            })
    }, [article_id])

    if (error) return (
        <h1 style={{ textAlign: 'center' }}>{error}</h1>
    )

    if (loading) return (
        <main style={{ 'textAlign': 'center' }}>
            <h1>Loading...</h1>
        </main>
    )

    return (
        <main className="article">
            <section className='title'>
                <span>{toProperCase(data.topic)}:{data.article_id}</span>
                <div className="space">
                    <h2>{data.title}</h2>
                    <Vote id={data.article_id} votes={data.votes} isLike={true} />
                </div>
                <div className="space">
                    <h3>{data.author}</h3>
                    <h3>{formatDate(data.created_at)}</h3>
                </div>
            </section>
            <p>{data.body}</p>
            <Comments article={data} />
        </main>
    )
}

export default Article