var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
        name: 'Faza',
        Location: 'Jakarta'
};

var objTwo = {
        age: 27,
        ...objOne
};

console.log(objTwo);

ReactDOM.render(
        <h1>React BoilerPlate!</h1>,
        document.getElementById('app') 
        );