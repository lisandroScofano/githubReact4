import { useEffect, useState } from "react";

export const FormItemsView = ({ handler }) => {
    const [formItemsState, setFormItemsState] = useState({
        product: '',
        price: '',
        quantity: ''
    })

    const { product, price, quantity } = formItemsState;

    useEffect(() => {
        // console.log('El precio cambio!')
    }, [price]);

    useEffect(() => {
        // console.log('El formItemsState cambio!')
    }, [formItemsState]);

    const onInputChange = ({ target: { name, value } }) => {
        setFormItemsState({
            ...formItemsState,
            [name]: value
        });
    }

    const onInvoiceItemsSubmit = (event) => {
        event.preventDefault();

        if (product.trim().length <= 1) return;
        if (price.trim().length <= 1) return;
        if (isNaN(price.trim())) return;
        if (quantity.trim().length < 1) return;
        if (isNaN(quantity.trim())) return;
        
        handler(formItemsState);
        
        setFormItemsState({
            product: '',
            price: '',
            quantity: ''
        });
    }

    return (<>
        <form className="w-50" onSubmit={event => onInvoiceItemsSubmit(event)}>
            <input
                type="text"
                name="product"
                value={product}
                placeholder="Producto"
                className="form-control m-3"
                onChange={event => onInputChange(event)} />
            <input
                type="text"
                name="price"
                value={price}
                placeholder="Precio"
                className="form-control m-3"
                onChange={onInputChange} />
            <input
                type="text"
                name="quantity"
                value={quantity}
                placeholder="Cantidad"
                className="form-control m-3"
                onChange={event => onInputChange(event)} />
            <button type="submit"
                className="btn btn-primary m-3">
                Nuevo Item</button>
        </form>
    </>)
}