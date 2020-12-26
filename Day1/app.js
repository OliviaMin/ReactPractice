console.log("React is running!!!")

const app ={
    title: 'Olivia Indecision app',
    options: []
};

const onFormSubmit =(e) =>{
e.preventDefault();
const option =e.target.elements.option.value;

if(option){
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
}
};


const onRemoveAll =() =>{
app.options = [];
render();
}

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.options.length>0 ? 'Here are the options' :'No options provide'}</p>
            <p>{app.options.length}</p>
            <form onSubmit={onFormSubmit}>
            <input type= "text" name="option"/>
            <button>Add</button>
            <button onClick={onRemoveAll}>Remove All</button>
            </form>
    
    
    
    
        </div>);
        ReactDOM.render(template, appRoot);

}


const appRoot = document.getElementById('app');


render();

