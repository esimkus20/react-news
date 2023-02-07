import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import API from '../lib/endpoints'
import { toProperCase } from '../lib/functions'

function Topics({ set }) {
    let [topics, setTopics] = useState([{
        slug: 'home',
        description: 'All articles'
    }])
    let navigate = useNavigate()

    useEffect(() => {
        API.getTopics()
            .then(t => {
                setTopics([...topics, ...t.topics])
            })
    }, [])

    function setTopic(topic) {
        set(topic)
        navigate('/')
    }

    return (
        <nav className='topics'>
            {topics?.map(topic => (
                <a key={topic.slug}
                    title={topic.description}
                    onClick={(e) => setTopic(topic.slug)}
                >
                    {toProperCase(topic.slug)}
                </a>
            ))}
        </nav>
    )
}

export default Topics