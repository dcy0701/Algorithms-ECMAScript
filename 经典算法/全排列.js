let main = (array) => {
	let result = [];
	for (let [indexOfArray, insertItem] of array.entries()) {
		let childArrayLength = indexOfArray + 1

		if (childArrayLength == 1) {
			result = [
				[insertItem]
			]
		} else {
			result = result.reduce((pre, cur) => pre.concat(Array(childArrayLength).fill().map((_, ind) => {
				let temp = cur.slice()
				temp.splice(ind, 0, insertItem)
				return temp
			})), [])
		}
	}
	return result
}

console.log(main([1, 2, 3]));
