import './Products.css';

const Products = ({data}) => {
    const { pairImage, name, price, sideImage} = data;
    return (
        <div className='products'>
            <img src={pairImage} alt="" />
            <div className='products-info'>
                <h2>Name: {name}</h2>
                <p>Price: ${price}</p>
            </div>
            <div className='product-btn'>
                <button>Add To Cart</button>
            </div>
        </div>
    );
};

export default Products;