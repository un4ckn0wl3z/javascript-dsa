function calculateTotalSalesWithTax(products, taxRate) {
    const totalSale = products.reduce((total, p) => {
        return total += (p.price * p.quantity)
    },0)

    const totalTax = totalSale * (taxRate / 100)
    return totalSale + totalTax
}

module.exports = calculateTotalSalesWithTax;
