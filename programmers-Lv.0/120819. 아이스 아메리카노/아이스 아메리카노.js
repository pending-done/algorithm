const solution = (money) => {
    const coffeePrice = 5500

    const canCount = Math.floor(money / coffeePrice)
    const remainderMoney = money % coffeePrice

    return [canCount, remainderMoney]
}
