import axios from 'axios'
import { toast } from 'react-toastify'

const NEWS = axios.create({
    baseURL: 'http://news.nedas.codes/api'
})

function handleSuccess(response) {
    if (![200, 201].includes(response.status)) return

    return response.data
}

function handleError(error) {
    let message = error.response.data.message || error.message

    toast(message, {
        theme: 'dark',
        type: 'error',
        position: 'top-right'
    })

    return new Error(message)
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

const addComment = (id, username, body) =>
    NEWS.post(`/articles/${id}/comments`, {
        username, body
    })
        .then(handleSuccess)
        .catch(handleError)

export default {
    getTopics,
    fetchAll,
    fetch,
    comments,
    updateVotes,
    addComment
}
