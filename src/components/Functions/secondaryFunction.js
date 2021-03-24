export const formatCurrency = (price) => {
    return (
        price.toLocaleString('ru-RU',
        {style: 'currency', currency: 'RUB'})
    )
}