var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');


// var Route = require('react-router').Route; ||=> ini cara panjangnya Object

// var obj = {
//         name: 'Faza'
// }

// var {name} = obj;

 

ReactDOM.render(
        <Router history = {hashHistory}>
        <Route path="/" component={Main}></Route>
        </Router>,
        document.getElementById('app') 
        );