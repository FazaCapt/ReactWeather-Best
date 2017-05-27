var React = require('react');
var {Link} = require('react-router')



var Examples = (props) => {
    return(
        <div>
            <h1 className="text-center">Examples</h1>
            <p>He are few Examples locations to try out</p>
            <ol>
                <li>
                    <Link to='/?location=Jakarta'>Jakarta</Link>
                </li>
                <li>
                    <Link to='/?location=Bandung'>Bandung</Link>
                </li>
            </ol>

        </div>
        )
};

module.exports = Examples;