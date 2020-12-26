console.log("React is running!!!")

//JSX-Javascript XML
const user = {
    //name: 'Olivia',
    age: 22,
    location: 'Seoul'
}
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    }
    //else{
    //    return undefined ->if location not there, it will not return anything
    //}

}

const template = (
    <div>
        <h1>UserName: {user.name ? user.name : 'Anonymous'}</h1>
        {/* First it checks if age exists, next sees if age>18 next */}

        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        <h1>{getLocation(user.location)}</h1>
    </div>);

//--------------------

let count = 0;
const addOne = () => {
    count = count + 1;
    //console.log(count);
    renderCounterApp();
}

const reset = () => {
    count = 0;
    //console.log(count);
    renderCounterApp();
}
// const templateTwo = (
//     <div>
//     <h1>Count: {count}</h1>
//     <button onClick={addOne}>+1</button>
//     </div>
// );

// ^
// |
// |

//here though count invcreaments but <h1> display
//is always 0 bcoz this code renders only once.

const appRoot = document.getElementById('app');
const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={reset}>Reset</button>

        </div>

    );

ReactDOM.render(templateTwo, appRoot);
    };

    renderCounterApp();

{/*  

    -----With var runs the same since we're not reassigning anything
    but better use const
    
//JSX-Javascript XML
var user = {
    //name: 'Olivia',
    age: 22,
    location: 'Seoul'
}
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    }
    //else{
    //    return undefined ->if location not there, it will not return anything
    //}

}

var template = (
    <div>
        <h1>UserName: {user.name ? user.name : 'Anonymous'}</h1>
        {/* First it checks if age exists, next sees if age>18 next 

        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        <h1>{getLocation(user.location)}</h1>
    </div>);


var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

*/
}