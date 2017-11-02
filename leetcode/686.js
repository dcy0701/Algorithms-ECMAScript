var repeatedStringMatch = function(A, B) {
    let time = 1
    const max_time = Math.ceil(B.length / A.length) + 2;
    console.log(max_time);
    while (true) {
        if (A.repeat(time).includes(B)) {
            return time
        } else if (time >= max_time) {
            return -1
        }
        time++
    }
}
console.log(repeatedStringMatch('abac', 'abcabcabcabc'));
