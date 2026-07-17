export default function ProductCard(props) {
    return <>
        <div className="card hover-lift">
            <img
                src={props.images}
                className="card-img-top"
                alt={props.name}
            />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">${props.price}</p>
                <a href="#" className="btn btn-outline-dark d-inline-flex align-items-center">
                    <i className="bi bi-cart3 me-2"></i>
                    Add to Cart
                </a>
            </div>
        </div>
    </>
}