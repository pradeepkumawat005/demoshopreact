import { useState } from "react";

function Card({id, name , info , image , price , removeTour},){
    const [readmore , setreadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0,200)}...`;

    function handlereadmore(){
        setreadmore(!readmore);
    }


    return (
        <div className="tour-card">
           <div className="image-wrraper">
              <img src={image} className="image"/>
           </div>
           
           <h4 className="tour-price">{price}</h4>
           <h2 className="card_heading">{name}</h2> 
           <div className="tour-description">
             {description}
             <span className="readmorebtn" onClick={handlereadmore}>
                {readmore ? 'show less' : 'show more'}
             </span>
           </div>

          <button onClick={() => removeTour(id)}>Not Interested</button>

        </div>
    )
}

export default Card;