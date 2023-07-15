import { invoice } from "../data/invoice"

export const getInvoice = () => {
    const total = invoice.items
    .map(item => item.price * item.quantity)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return {...invoice, total};
}