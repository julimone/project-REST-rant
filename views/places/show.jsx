const { text } = require('express')
const React = require('react')
const Def = require('../default')

function show(data) {
    let message = ''

    if (data.message) {
        message
            (
                <h4 className="alert-danger">
                    {data.message}
                </h4>
            )
    }
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                {message}
                <div className='row'>
                    <div className='col-sm-6' />
                    <img src={data.olace.pic} alt={data.place.name} />
                    <h1>{data.place.name}</h1>
                </div>
                <div className='row'>
                    <div className='col-sm-6' />
                    <h1>Rating</h1>
                    <p>
                        Not rated
                    </p>
                </div>
                <div className='row'>
                    <div className='col-sm-6' />
                    <h1>Description</h1>
                    <p>

                    </p>
                </div>
                <hr />
                <div className='row'>
                    <div className='col-sm-6' />
                    <h1>Comments</h1>
                    <p>No comments yet</p>
                </div>
                <div className='row'>
                    <div className='col-sm-6' />
                    <h3>
                        {data.place.showEstablished()}
                    </h3>
                    <h4>
                        Serving {data.place.cuisines}
                    </h4>
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

module.exports = show