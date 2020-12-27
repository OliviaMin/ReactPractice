console.log("React is running!!!")
const app = {
    title: 'COVID Vaccine Recipent Decider',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const opt = app.options[randomNum];
    //const opt = app.options[0]; calling by the key
    alert(opt);
};
const onRemoveAll = () => {
    app.options = [];
    render();
}

let visibility = false
const toggleVisibillity = () => {

    visibility = !visibility;
    render();
}
const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.options.length > 0 ? 'Recipents Names' : 'No options provided'}</p>
            <p>Number of candidates: {app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>Who will get it?</button>

            <ol>
                {
                    //rendering dynamic number of elements based on array
                    app.options.map((x) => {
                        return <li key={x}>Candidate: {x}</li>;

                    })}

            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Person</button>
                <button onClick={onRemoveAll}>Remove All</button>
            </form>

            <button onClick={toggleVisibillity}>
                {visibility ? 'Hide Details' : 'Show Details'}
            </button>
            {visibility && (
                <p>Hello Recipent</p>
            )}
        </div>);
    ReactDOM.render(template, appRoot);
}
const appRoot = document.getElementById('app');
render();

