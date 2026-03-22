import ProductForm from "./ProductForm";
function NewProduct(props){
    function saveProduct(product){
        console.log('i am inside new Product');
        console.log(product , 'inside newproduct');
        props.printProduct(product);
    }
    
    return (
        <div className="NewProduct">
          <ProductForm onSaveProduct={saveProduct}></ProductForm>
        </div>
    )
}

export default NewProduct;