import { useState } from "react";
import { IconContext } from "react-icons";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";

import API from '../lib/endpoints'

function Vote({ id, votes, isLike = false }) {
    let [total, setTotal] = useState(votes)

    function formatVotes(value) {
        let count = Math.abs(value)
        let sign = Math.sign(value) == 1 ? 'Upvotes' : 'Downvotes'

        return `${count} ${sign}`
    }

    function increaseVotes(num) {
        if (!isLike) return

        setTotal(total + num)
        API.updateVotes(id, num)
            .then(console.log)
    }

    return (
        <IconContext.Provider value={{
            size: '1.5em'
        }}>
            <div className="votes">
                <div>
                    <FaThumbsDown onClick={() => increaseVotes(-1)} className={`vote ${!isLike || 'like'}`} />
                    <FaThumbsUp onClick={() => increaseVotes(1)} className={`vote ${!isLike || 'like'}`} />
                </div>
                <span>{formatVotes(total)}</span>
            </div>
        </IconContext.Provider>
    )
}

export default Vote