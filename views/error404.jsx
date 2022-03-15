const React = require('react')
const Def = require('./default')

function error404() {
    return (
        <Def>
            <main>
                <h1> 404: PAGE NOT FOUND</h1>
                <p> Oops, sorry, we can´t find this page!</p>
                <img src='/images/cute-puppy.jpg' alt='Chia Fruit Shake' height={500} width={300} />
                <div>
                    Photo by <a href="AUTHOR_LINK"> Brenda Godinez </a> on <a href='"UNSPLASH_LINK'> Unsplash</a>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404
