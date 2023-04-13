import React from 'react';
import ReactDOM from 'react-dom/client';

//React without JSX
const root = ReactDOM.createRoot(document.getElementById('root'));
const ele = React.createElement('h1', {style:{color:'red'}}, 'Rendered using React');


//React with JSX

const Heading = ({text})=> (<h1>{text}</h1>)

const MainSection =()=>{
    return (
        <React.Fragment>
            <Heading text='Random Number Generator' />
        <div className='container'>
            <h2 style={{color:'darkBlue'}}>Refresh page to get a random number</h2>
            <h3 style={{color:'purple'}}>{Math.floor(Math.random()*100)}</h3>
        </div>
        </React.Fragment>
    )
}
root.render(<MainSection />);