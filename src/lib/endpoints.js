import axios from 'axios'

const NEWS = axios.create({
    baseURL: 'http://news.nedas.codes/api'
})

function handleSuccess(response) {
    if (response.status !== 200) return

    return response.data
}

const getTopics = () => {
    return NEWS.get('/topics')
        .then(handleSuccess)
}

const getArticles = ({ topic, sort_by, order } = {}) => {
    return NEWS.get('/articles', {
        params: {
            topic, sort_by, order
        }
    }).then(handleSuccess)
}

export default {
    getTopics,
    getArticles
}