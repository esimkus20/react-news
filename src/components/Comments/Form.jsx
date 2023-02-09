import { useState } from "react"

import NEWS from '../../lib/endpoints'

function Form({ id, add }) {
    const [username, setUsername] = useState('')
    const [comment, setComment] = useState('')

    function submit() {
        NEWS.addComment(id, username, comment)
            .then(data => {
                add(data.comment)
                setUsername('')
                setComment('')

                document
                    .getElementsByClassName('form')[0]
                .reset()
            })
    }

    return (
        <>
            <h3>Comment</h3>
            <form class='form'>
                <div className="username">
                    <input required type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
                    <input type="button" value="Submit" onClick={submit} />
                </div>
                <textarea required id="text" rows="4" placeholder="Comment" onChange={e => setComment(e.target.value)} ></textarea>
            </form>
        </>
    )
}

export default Form