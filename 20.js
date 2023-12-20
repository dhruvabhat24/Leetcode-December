/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    let min1 = Infinity;
    let min2 = Infinity;
    for (let i = 0 ; i < prices.length; ++i) {
        if (prices[i] < min2) {
            min2 = prices[i]
        }
        if (prices[i] < min1) {
            min2 = min1;
            min1 = prices[i];
        }
    }

    return min1 + min2 > money ? money : money - (min1 + min2);
};
