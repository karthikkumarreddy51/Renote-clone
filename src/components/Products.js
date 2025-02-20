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
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
`;

const ProductsHeading = styled.h2`
  margin-bottom: 1rem;
`;

const ProductGrid = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 1rem;
  padding: 1rem;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 4px;
  }
`;

const ProductItem = styled.div`
  position: relative;
  overflow: hidden;
  border: 1px solid #ccc;
  width: 200px;
  flex-shrink: 0;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0);
    opacity: 0;
    transition: opacity 0.3s ease, background-color 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.2);
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
    { image: p1, name: "" }, // Empty string for name
    { image: p2, name: "" }, // Empty string for name
    { image: p3, name: "" }, // Empty string for name
    { image: p4, name: "" }, // Empty string for name
  ];

  return (
    <ProductsContainer>
      <ProductImage src={Product} alt="Products" />
      <ProductsHeading>Our Products</ProductsHeading>

      <ProductGrid>
        {products.map((product, index) => (
          <ProductItem key={index}>
            <ProductItemImage src={product.image} alt={`Product ${index + 1}`} />
            <ProductName>{product.name}</ProductName>
          </ProductItem>
        ))}
      </ProductGrid>
    </ProductsContainer>
  );
};

export default Products;