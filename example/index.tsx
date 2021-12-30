import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../.';

const product = {
  id: '1',
  title: 'Cofee Mug',
}

const App = () => {
  return (
    <>
      <ProductCard 
          product={product}
          initialValues={{
              quantity: 5,
              maxQuantity: 7,
          }}
      >
          {
              ({ reset, quantity, increaseBy, isMaxQuantity }) => (
                  <>
                      <ProductImage />  
                      <ProductTitle />
                      <ProductButtons />
                  </>
              )
          }
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
