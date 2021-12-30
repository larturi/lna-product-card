# LNA-Product-Card

### Este es un paquete de pruebas de despliegue en npm.

<br />

### Ejemplo:

```
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from 'lna-product-card';
```

```
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
```

<br />

#### Made with ❤️ by Leandro Arturi.
