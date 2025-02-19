import React from 'react';
import styled from 'styled-components';
import Product from '../assets/products.png';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
`;

const ProductImage = styled.img`
  max-width: 80%;
  height: auto;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ProductsHeading = styled.h2`
  margin-bottom: 1rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 columns */
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* 1 column on smaller screens */
  }
`;

const ProductItem = styled.div`
  position: relative;
  overflow: hidden;
  border: 1px solid #ccc;

  &:hover::before {
    content: "";
    position: absolute;
    bottom: 0; // Start at the bottom
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.14);
    transform: translateY(100%); // Initially hidden below
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: translateY(0); // Move to cover on hover
  }
`;

const ProductItemImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const ProductName = styled.h3`
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: black;
  transition: color 0.3s ease;

  ${ProductItem}:hover & {
    color: darkblue;
  }
`;

const Products = () => {
  const products = [
    { image: p1, name: "Product 1" },
    { image: p2, name: "Product 2" },
    { image: p3, name: "Product 3" },
    { image: p4, name: "Product 4" },
  ];

  return (
    <ProductsContainer>
      <ProductImage src={Product} alt="Products" />
      <ProductsHeading>Our Products</ProductsHeading>

      <ProductGrid>
        {products.map((product, index) => (
          <ProductItem key={index}>
            <ProductItemImage src={product.image} alt={product.name} />
            <ProductName>{product.name}</ProductName>
          </ProductItem>
        ))}
      </ProductGrid>
    </ProductsContainer>
  );
};

export default Products;