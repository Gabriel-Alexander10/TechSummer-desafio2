import React, { createContext, useContext, useEffect, useState } from 'react';


interface ProductContextProps  {
    product: object;
    products: Array<object>;
    setProduct: (product: object) => void;
    selectedSKU: object;
    setSelectedSKU: (sku: object) => void;
}

interface ProductProviderProps {
    children:  React.ReactNode
}

export const ProductContext = createContext({} as ProductContextProps);

export const ProductProvider: React.FC<ProductProviderProps> = ({
    children
}) => {
    const [product, setProduct] = useState({});
    const [products, setProducts] = useState([]);
    const [selectedSKU, setSelectedSKU] = useState({});

    useEffect(() => {
        fetch("http://localhost:3000/products")
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
    }, []);

    
    return (
        <ProductContext.Provider 
            value={{
                product,
                products,
                setProduct,
                selectedSKU,
                setSelectedSKU
            }}
        >
            {children}
        </ProductContext.Provider>
    )
}

export const useProduct = () => {
    return useContext(ProductContext);
}