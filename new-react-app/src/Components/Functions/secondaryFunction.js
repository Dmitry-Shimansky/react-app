export const formatCurrency = (value) => {
    return value.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'});
}