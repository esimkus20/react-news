import { formatDate } from '../../lib/functions'

import Vote from '../Vote'

function Comment({ data }) {

    return (
        <div className="comment">
            <div className="space">
                <div>
                    <h3>{data.author}</h3>
                    <span>{formatDate(data.created_at)}</span>
                </div>
                <Vote type="comment" votes={data.votes}/>
            </div>
            <p>{data.body}</p>
        </div>
    )
}

export default Comment