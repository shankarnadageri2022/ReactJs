import React from "react";
function Details(){
    const [service, setService] = useState(null);

    const { id } = useParams();

    const fetchServiceById = () => {

        Axios.get("http://localhost:8081/product/find/" + id).then(resp => setProduct(resp.data));

    }

    useEffect(fetchProductById, [id]);

    return (

        <div>

            {

                product != null &&

                <div className="row">

                    <div className="col">

                        <img src={img1} alt="Card image" />

                    </div>

                    <div className="col">

                        <h2>Product Details</h2>

                        <p>ProductId : {product.productId}</p>

                        <p>Name : {product.productName}</p>

                        <p>Price : {product.productPrice}</p>

                        <p>Category : {product.category}</p>

                    </div>



                </div>



            }

            <div>

                <Link to="/product/all" className="btn btn-secondary">Back to list of products</Link>

            </div>

        </div>

    )

}
export default Details;