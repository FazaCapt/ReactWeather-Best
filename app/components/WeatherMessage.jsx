var React = require('react');

var WeatherMessage = React.createClass({
    render: function(){
        var {temp, location} = this.props;

        return(
            <h1>It's it {temp} in {location} </h1>
        )
    }
})

module.exports = WeatherMessage;