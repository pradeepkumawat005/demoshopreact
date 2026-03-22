import { useState } from "react";

function Item(props){
     const [title , settitle] = useState(props.Itemname)
    function clickhandler(){
        settitle('change us');
    }
    return (
        <p name="deepu" >
            <p>{title}</p>
           <button onClick={clickhandler}>change content</button>
        </p>
    )
}

export default Item;