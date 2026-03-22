import { useState } from "react";

function ProductForm(props){



    const [titleName , setTitle] = useState('');
    const [dateis , setDate] = useState('');

    function settitleis(event){
       setTitle(event.target.value)
    }

    function setdateis(event){
       setDate(event.target.value);
    }

    function onSubmit(event){
       event.preventDefault();
      
       const productData = {
        title:titleName,
        date:dateis
       }
       props.onSaveProduct(productData);
    }
    return (
        <form className="productForm" onSubmit={onSubmit}>
           <div>
              <label>Title </label>
              <input type="text" value={titleName} onChange={settitleis} />
           </div>
           <br/>
            <div>
              <label>Date </label>
              <input type="date"  value={dateis} onChange={setdateis} />
           </div>
           <br/>
           <div>
              <button type="submit" >Add Product</button>
           </div>
        </form>
    )
}

export default ProductForm;