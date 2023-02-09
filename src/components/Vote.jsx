import { IconContext } from "react-icons";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";

function Vote({ size = '1.5em', votes, isLike = false }) {
    function formatVotes(value) {
        let count = Math.abs(value)
        let sign = Math.sign(value) == 1 ? 'Upvotes' : 'Downvotes'

        return `${count} ${sign}`
    }

    return (
        <IconContext.Provider value={{
            size
        }}>
            <div className="votes">
                <div>
                    <FaThumbsDown className={`vote ${isLike ? 'like' : ''}`} />
                    <FaThumbsUp className={`vote ${isLike ? 'like' : ''}`} />
                </div>
                <span>{formatVotes(votes)}</span>
            </div>
        </IconContext.Provider>
    )
}

export default Vote