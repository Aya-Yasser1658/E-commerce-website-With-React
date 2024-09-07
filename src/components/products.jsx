import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(false);
    const componentMounted = useRef(true);

    useEffect(() => {
        const getProducts = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            if (response.ok) {
            const products = await response.json();
            if (componentMounted.current) {
                setData(products);
                setFilter(products);
            }
            } else {
            console.error('Failed to fetch products:', response.statusText);
            }
        } catch (error) {
            console.error('Failed to fetch products:', error);
        } finally {
            setLoading(false);
        }
        };

        getProducts();

        return () => {
        componentMounted.current = false;
        };
    }, []);

    const Loading = () => {
        return (
        <>
            <div className="col-md-3">
            <Skeleton height={350} />
            </div>
            <div className="col-md-3">
            <Skeleton height={350} />
            </div>
            <div className="col-md-3">
            <Skeleton height={350} />
            </div>
            <div className="col-md-3">
            <Skeleton height={350} />
            </div>
        </>
        );
    };

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    };

    const ShowProducts = () => (
        <>
        <div className="buttons d-flex justify-content-center mb-5 pd-5">
            <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>
            All
            </button>
            <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>
            Men's Clothing
            </button>
            <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>
            Women's Clothing
            </button>
            <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>
            Jewelery
            </button>
            <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>
            Electronics
            </button>
        </div>
        <div className="row">
            {filter.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
                <div className="card h-100 text-center p-4">
                <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                <div className="card-body">
                    <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">
                    Buy Now
                    </NavLink>
                </div>
                </div>
            </div>
            ))}
        </div>
        </>
    );

    return (
        <div>
        <div className="container my-5 py-5">
            <div className="row">
            <div className="col-12 mb-5">
                <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                <hr />
            </div>
            </div>
            <div className="row justify-content-center">
            {loading ? <Loading /> : <ShowProducts />}
            </div>
        </div>
        </div>
    );
    };

    export default Products;
