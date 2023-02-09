import axios from 'axios'

const NEWS = axios.create({
    baseURL: 'https://news.nedas.codes/api'
})

function handleSuccess(response) {
    if (response.status !== 200) return

    return response.data
}

function handleError(error) {
    if (error.code == "ERR_BAD_REQUEST")
        return new Error("Data does not exist")

    return new Error(error.message)
}

const getTopics = () =>
    NEWS.get('/topics')
        .then(handleSuccess);

const fetchAll = ({ topic, sort_by, order } = {}) =>
    NEWS.get('/articles', {
        params: {
            topic, sort_by, order
        }
    }).then(handleSuccess)


const fetch = (article_id) =>
    NEWS.get(`/articles/${article_id}`)
        .then(handleSuccess)
        .catch(handleError)

const comments = (article_id) =>
    NEWS.get(`/articles/${article_id}/comments`)
        .then(handleSuccess)

const updateVotes = (id, value) =>
    NEWS.patch(`/articles/${id}`, { inc_votes: value })
        .then(handleSuccess)

export default {
    getTopics,
    fetchAll,
    fetch,
    comments,
    updateVotes
}