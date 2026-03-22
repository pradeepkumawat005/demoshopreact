import Card from "./Card";

function Tours({tours , removeTour}){
    return (
        <div className="Tours-wrapper">
          {
            tours.map((tour) =>{
                return <Card {...tour} removeTour={removeTour}/>
            })
          }
        </div>
    )
}

export default Tours;