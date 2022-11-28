import  React from 'react';
import  ReactDOM from 'react-dom/client';
const title = 'Hunger Hub'
const headingComponent= ()=>(
    <div id='title' className='title-class'>
        <h2>{title}</h2>
    </div>
)

    


const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(element);