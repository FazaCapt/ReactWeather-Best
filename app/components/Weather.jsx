var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
    getInitialState: function(){
        return{
            location: 'Jakarta',
            temp: 34
        }

    },

    handleSearch : function(location){
        this.setState({
            location: location,
            temp:23
        });
        // alert(location);
    },

    render: function(){
        var {temp, location} = this.state;
        return(
            <div> 
                <h2>Weather Component</h2>
                <WeatherForm onSearch = {this.handleSearch} />
                <WeatherMessage temp={temp} location={location}  />
            </div>
        )
    }
})

module.exports = Weather;