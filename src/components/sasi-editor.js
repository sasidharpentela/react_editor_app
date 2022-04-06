import { useState } from "react";
import { setTextRange } from "typescript";

function Editor () {
    const handleOnchange = e => {
        console.log('On Change')
        setText(e.target.value)
    }
    const [text, setText] = useState('')
    return(
        <div className="container">
            <h2 className="title">Sasi Editor</h2>
            <textarea className="text-input" placeholder= " Enter Your Text here ...." value={text} onChange={handleOnchange} autoFocus required></textarea>
            <strong>Word Count: </strong>
            <span className= "word-count">{text.length === 0 ? 0 : text.split(" ").length}</span>
            <br/>
            <br/>
            <strong>Character Count: </strong>
            <span className="character-count">{text.length}</span>
        </div>
    )

}

export default Editor;