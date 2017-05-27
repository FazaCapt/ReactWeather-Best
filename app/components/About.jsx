var React = require('react');

var About = (props) => {
    return(
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>
                this is a weather application bulid on React. 
                I Have built this for the complete React web app developer course
            </p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> This was Javascript framework used
                </li>
                <li>
                    <a href="https://openweathermap.org">Open Weather Map</a> I used open weather map to search for weather map to search for weather data by city name
                </li>
            </ul>
        </div>
        
    )
};

module.exports = About;