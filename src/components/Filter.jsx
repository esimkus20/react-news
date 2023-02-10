function Filter({ sortBy, orderBy }) {
    const sortable = [
        ['Date', 'created_at'],
        ['Votes', 'votes'],
        ['Comments', 'comment_count']
    ]

    let orderable = [
        ['Descending', 'desc'],
        ['Ascending', 'asc']
    ]

    return (
        <div className="space">
            <div className="sort">
                <label htmlFor="sortBy">Sort By</label>
                <select name="sortBy" onChange={e => sortBy(e.target.value)}>
                    {sortable.map(sort => (
                        <option key={sort[1]} value={sort[1]}>{sort[0]}</option>
                    ))}
                </select>
            </div>
            <div className="sort">
                <label htmlFor="order">Order</label>
                <select name="order" onChange={e => orderBy(e.target.value)}>
                    {orderable.map(order => (
                        <option key={order[1]} value={order[1]}>{order[0]}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default Filter