import propTypes from 'prop-types'
import React, {useState} from 'react'

export default function TextForm(props)
{
    const convertToUCase = (event) =>
    {
        const newText = text.toUpperCase();
        setText(newText)
    }
    const clearTextForm = () =>
    {
        setText("Enter text here:");
    }
    const convertToLCase = () =>
    {
        const lText = text.toLowerCase();
        setText(lText);
    }
        const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text,setText] = useState("Enter text here:");
    
    return( 
    <>

        <div className = "mb-3" style={{color:(props.mode)==='light' ? 'black':'white' }}>
            <h3>{props.title}</h3>
            <textarea className="form-control" id="ta1"  style = {{backgroundColor: (props.mode) === 'light' ? 'white':'#212529',color:(props.mode) === 'light' ? 'black':'white'}}value = {text} onChange = {handleOnChange} rows="8"></textarea>
            <button className="btn mt-2 mr-2  pt-2 btn-primary"  onClick={convertToUCase}>Convert To UpperCase</button>
            <button className="btn mt-2 mx-2 pt-2 btn-primary" onClick={convertToLCase}>Convert To LowerCase</button>
            <button className="btn mt-2 mr-2 pt-2 btn-primary" onClick={clearTextForm}>Clear text form</button>
        

            <div className="  mt-4 check-words">
                <h2 className="h2">About text Area</h2>
                <p className="count">There are {text.length} characters and {text.split(" ").length} words</p>
                <p className="timeToRead">It Takes almost {(Math.floor(0.198/60 * text.split(" ").length ))} minutes to read this paragraph</p>
            </div>
        </div>
    </>);
}
TextForm.propTypes = 
{
    title: propTypes.string
}