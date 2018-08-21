import axios from 'axios';

export const putInventory = (id, name, sellprice, stock, buyPrice) => {
    axios.put(`/api/ingredient/${id}`, {
        name: name,
        sellprice: sellprice,
        stock: stock,
        buyPrice: buyPrice
    })
        .then(response => {
            console.log(response);
        })
};