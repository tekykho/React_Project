import ProductCard from "./ProductCard";

export default function HomePage() {
    return <>
        <div className="container">
            {/* header */}
            <header className="text-white text-center py-5" style={{ backgroundColor: '#2d2c2a' }}>
                <div className="container">
                    <h1 className="display-4">Welcome to OMO (HANDMADE CRAFTS)</h1>
                    <p className="lead">Objects that speak softly</p>
                    <a href="#" className="btn btn-light btn-lg">Shop Now</a>
                </div>
            </header>

            {/* main  */}
            <main className="container my-5">
                <h2 className="text-center mb-4">Featured Products</h2>
                <div className="row">
                    <div className="col-md-3 mb-4">
                        <ProductCard
                            images="/images/ceramic_cup.png"
                            name="Ceramic Cup"
                            price={29.99}
                        />
                    </div>
                    <div className="col-md-3 mb-4">
                        <ProductCard
                            images="/images/coffee_cup.png"
                            name="Coffee Cup"
                            price={9.99} />
                    </div>
                    <div className="col-md-3 mb-4">
                        <ProductCard
                            images="/images/glass_jug.png"
                            name="Glass Jug"
                            price={39.99} />
                    </div>
                    <div className="col-md-3 mb-4">
                        <ProductCard
                            images="/images/porcelain_coffeeCup.png"
                            name="Porcelain Coffee Cup"
                            price={49.99} />
                    </div>
                </div>
            </main>
        </div>

    </>
}