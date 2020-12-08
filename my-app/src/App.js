//import logo from './logo.svg';
import './App.css';
//import App2 from './App2';
//import App3 from './App3';

function App() {
    return (
        /*<div className = "App">
            <p><strong><u>Schedule</u></strong></p>  <header className = "App-header">
            <div className = "d-flex p-3 bg-secondary text-white">
            <a href = "https://github.com/raisgood/Task-Management-Web-App/App.js"> <div className = "p-2 bg-info">About</div></a >
            <a href = "https://github.com/raisgood/Task-Management-Web-App/App2.js"> <div className = "p-2 bg-warning">To Do 's</div></a>  
            <a href = "https://github.com/raisgood/Task-Management-Web-App/App3.js"> <div className = "p-2 bg-primary">Contact</div></a >
            </div></header >
            <section className = "rect">
            <div class = "rectangle">
            <h1>"To Do List"</h1> <p>This is the ultimate List to Organize your schedule
            for work, play and beyond.</p></div></section> 
            <App2 />
            <App3 />
            </div>*/

        <
        div className = "App" >
        <
        div id = "myDIV"
        className = "header" >
        <
        h2 > My To Do List < /h2> <
        /div>

        <
        ul id = "myUL" >
        <
        li > < input type = "checkbox" / > Hit the gym < /li> <
        li > Pay bills < input type = "checkbox" / > < /li> <
        li > Meet Charlotte < input type = "checkbox" / > < /li> <
        li > Buy Groceries < input type = "checkbox" / > < /li> <
        li > Study < input type = "checkbox" / > < /li> <
        li > Organize my Room < input type = "checkbox" / > < /li> <
        li > Clean the Kitchen < input type = "checkbox" / > < /li> <
        li > Hit the Sack < input type = "checkbox" / > < /li> <
        /ul> <
        /div>
    );
}
export default App;