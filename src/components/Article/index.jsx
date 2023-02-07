import Icons from './Icons'

import { formatDate } from '../../lib/functions'

function Article({ data }) {

    return (
        <article>
            <h3 title={data.title}>{data.title}</h3>
            <Icons votes={data.votes} comments={data.comment_count} />
            <h4>{data.author}</h4>
            <h4>{formatDate(data.created_at)}</h4>
        </article>

    )
}



export default Article