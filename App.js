const heading = React.createElement(
    "h1", 
    {id:"head"}, 
    "Hello World from React!");

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const subhead = React.createElement("h2", {id:"subhead"}, "This is another component made using react!")

const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root2.render(subhead);

// Forming a nested structure of divs using react

const parent = React.createElement(
        "div" , 
        {id:"parent"}, 
    React.createElement(
        "div",
        {id:"child"},
    [React.createElement(
        "h1",
        "This is statement is passed in a nested h1 tag")
        //add multiple children or siblings = convert to array of children
    ,
    React.createElement("h2", {}, "This is a sibling of the above element")]
)
);
//This react element creates an HTML object which the browser understands

const a = ReactDOM.createRoot(document.getElementById("newid"));

a.render(parent); //render functions converts "parent" it into an HTML object