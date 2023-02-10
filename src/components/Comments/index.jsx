import { useEffect, useState } from "react"

import API from '../../lib/endpoints'
import Comment from "./Comment";
import Form from './Form'

function Comments({ article }) {
    let [comments, setComments] = useState([]);

    useEffect(() => {
        API.comments(article.article_id)
            .then(c => setComments(c.comments))
    }, [])

    function addComment(comment) {
        setComments([comment, ...comments])
    }

    if (!article.comment_count) return (
        <h1 style={{ textAlign: 'center' }}>
            No comments
        </h1>
    )

    return (
        <section className="comments">
            <Form id={article.article_id} add={addComment} />
            {comments?.map(comment => (
                <Comment
                    key={comment.comment_id}
                    data={comment}
                />
            ))}
        </section>
    )
}

export default Comments