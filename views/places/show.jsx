const { text } = require('express')
const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>

                <div>
                    <h1>Rating</h1>
                    <p>
                        Not rated
                    </p>
                </div>
                <div>
                    <h1>Description</h1>
                    <p>

                    </p>
                </div>
                <hr />
                <div>
                    <h1>Comments</h1>
                    <p>No comments yet</p>

                </div>
                <div>
                    <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                        Edit
                    </a>
                    <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                        <button type="submit" className="btn btn-danger">
                            Delete
                        </button>
                    </form>
                </div>
            </main>
        </Def>
    )
}
// rating

module.exports = show