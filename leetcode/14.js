var longestCommonPrefix = function(strs) {
    return strs.reduce((prefix, cur) =>{
        while (true) {
            if (prefix == '') {
                return '';
            }

            if(cur.startsWith(prefix)) {
                break;
            }

            prefix = prefix.slice(0, prefix.length - 1);
        }

        return prefix
    } , strs[0]) || '';
};

console.log(longestCommonPrefix([]));
