// var isValid = function(s) {
//     const map = Object.create(null)
//     const left = ['{', '[', '('];
//     const right = ['}', ']', ')'];
//
//     for (let char of s) {
//         if (right.includes(char) ) {
//             if (~~map[left[right.indexOf(char)]] === 0) {
//                 return false
//             } else {
//                 (map[left[right.indexOf(char)]])--
//                 if (map[left[right.indexOf(char)]] < 0) {
//                     return false
//                 }
//             }
//         } else if (left.includes(char)) {
//             map[char] = ~~map[char] + 1
//         } else {
//             return false
//         }
//     }
//
//     return Object.values(map).reduce((a,b) => a + b) === 0
// };

var isValid = function(s) {
    const map = Object.create(null)
    const correctMatch = ['{}','()','[]']

    let match = s.split(/([\{\}\[\]\(\)]{2})/)

    for (item of match) {
        if (item === '') {
            continue
        }

        if (!correctMatch.includes(item)) {
            return false
        }
    }

    return true
}

console.log(isValid('{}()'))
