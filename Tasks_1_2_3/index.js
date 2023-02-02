
function sortString(str) {
    if (!str) return '';
    const getDigit = (string) => {
        const getDigitsReg = /\D/g;
        return string.replace(getDigitsReg,'');
    }

   return  str.split(' ').sort((a, b) => {
        const aValue = getDigit(a);
        const bValue =  getDigit(b);

        return aValue - bValue;
    }).join(' ')
}

console.log(sortString('g5et ski3lls on6 use1 your2 to4 7top'));


function queueTime(queue, cashiers) {
    if (cashiers < 2) return queue.reduce((value, acc)=> value + acc, 0)

    let firstCashiers = queue.slice(0, cashiers).concat()
    const sortList = (list) => list.sort((a,b) => a - b)

    firstCashiers = sortList(firstCashiers)
    let index = 0;
    for (let i = cashiers; queue.length > i; i++ ) {

        if ( index < cashiers - 1 && index !== 0) {
            index = index + 1;
        } else {
            index = 0;
            firstCashiers = sortList(firstCashiers)
        }
        firstCashiers[index]+= queue[i];

    }

   return  Math.max(...firstCashiers)


}

console.log(queueTime([ 26, 42, 13, 18, 48, 38, 39, 25, 39, 6, 35, 11, 7, 38, 19, 14 ], 1))

console.log(queueTime([ 19, 1, 27, 35, 16, 4, 45, 49, 41, 25 ], 5) )

console.log(queueTime([ 34, 31, 40, 30, 48, 2, 19, 32, 37, 13, 30, 49, 3, 13, 12, 43, 39, 22, 47 ], 4))



function biggerNumber(number) {
    const splitNumber = number.toString().split('');

    const sortedNumberArr = splitNumber.sort((a,b)=> b - a)
    const result = sortedNumberArr.join('');
    if ( +result !== number && sortedNumberArr.length > 1) {
        return result
    } else  {
        return -1
    }
}

console.log(biggerNumber(23))
console.log(biggerNumber(624))
console.log(biggerNumber(2018))

console.log(biggerNumber(9))
console.log(biggerNumber(111))
console.log(biggerNumber(531))

