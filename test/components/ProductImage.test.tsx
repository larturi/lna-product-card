import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {

    test('debe mostrar el componente con la imagen personalizada', () => {
        const wrapper = renderer.create(
            <ProductCard
                product={product2}
            >
                {
                    () => (
                        <ProductImage img='http://imagen.jpg' />
                    )
                }
            </ProductCard>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('debe mostrar el componente con la imagen default', () => {
        const wrapper = renderer.create(
            <ProductCard
                product={product2}
            >
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    });
    
});
