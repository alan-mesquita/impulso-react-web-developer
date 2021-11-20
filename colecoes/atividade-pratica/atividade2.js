function newArray(arr) {
    const newArraySet = new Set(arr)
    console.log(arr)
    return console.log([...newArraySet]);
}

newArray([30, 30, 40, 5, 223, 2049, 3034, 5])
newArray([0, 30, 0, 15, 223, 2049, 3034, 5, 15, 6, 6 , 20])