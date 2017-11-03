var wordPattern = function(pattern, str) {
    let strArr = str.split(' ')

    let map = Object.create(null)

    if (strArr.length !== pattern.length) {
        return false;
    }

    for (let [index, item] of strArr.entries()) {

        if (map[item]!==undefined && map[item] !== pattern[index]) {
            return false;
        }

        if (map[item]!==undefined && Object.values(map).includes(pattern[index])) {
            return false;
        }

        map[item] = pattern[index];
    }

    return true;

};

console.log(wordPattern('aab', '五 五 五'));
