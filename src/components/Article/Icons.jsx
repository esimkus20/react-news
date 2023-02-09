import { IconContext } from "react-icons";
import { FaCommentDots, FaThumbsDown, FaThumbsUp } from "react-icons/fa";

function Icons({ votes, comments }) {
    function Votes() {
        if (votes < 0) return (<FaThumbsDown />)

        return (<FaThumbsUp />)
    }

    return (
        <IconContext.Provider value={{
            size: "1.5em",
            className: "icon"
        }}>
            <div className="icons">
                <div className="icon">
                    <FaCommentDots />
                    <span>{comments}</span>
                </div>
                <div className="icon">
                    <Votes />
                    <span>{Math.abs(votes)}</span>
                </div>
            </div>
        </IconContext.Provider>
    )
}

export default Icons