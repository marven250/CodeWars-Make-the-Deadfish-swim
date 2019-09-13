// Return the output array, and ignore all non-op characters
function parse(data) {
    let sum = 0
    let arr = []

    for (let g = 0; g < data.length; g++) {


        if (data[g] == "i") {
            sum++
        }
        if (data[g] == "d") {
            sum -= 1
        }
        if (data[g] == "s") {
            sum *= sum
        }
        if (data[g] == "o") {
            arr.push(sum)
        }

    }
    return arr
}