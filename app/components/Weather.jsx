var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function(){
        return{
            isLoading: false
            // location: 'Jakarta',
            // temp: 34
        }
    },

    handleSearch : function(location){
        var that = this;
        
        this.setState({isLoading: true});

        openWeatherMap.getTemp(location).then(function(temp){
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            })
        },function(errorMessage){
            this.setState({isLoading: false});
            alert(errorMessage);
        })
    },

    render: function(){
        var {isLoading, temp, location} = this.state;

        function renderMesage(){
            if(isLoading){
                return <h3 className="text-center"> Fetching weather.... </h3>
            } else if (temp && location){
                return <WeatherMessage temp={temp} location={location}/>
            }
        }
        return(
            <div> 
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch = {this.handleSearch} />
                {renderMesage()}
                {/*<WeatherMessage temp={temp} location={location}/>*/}

            </div>
        )
    }
})

module.exports = Weather;
