var React = require('react');

// var WeatherMessage = React.createClass({
//     render: function(){
//         var {temp, location} = this.props;

//         return(
//             <h1>It's it {temp} in {location} </h1>
//         )
//     }
// });

// var WeatherMessage = (props) => {
//     var {temp, location} = props;

//     return(
//         <h1>It's it {temp} in {location} </h1>
//         )
// }

// ini dimodif lebih baru lagi

var WeatherMessage = ({temp, location}) => {

    return(
        <h1>It's it {temp} in {location} </h1>
        )
}


module.exports = WeatherMessage;