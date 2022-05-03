import * as wasm from "rust-list-sorting";


function generateScrambledArray(length) {
    const newArray = [];
    for (let i = 1; i <= length; i++) {
        newArray.push(i);
    }
    return shuffle(newArray)
}


// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function jsSort(array) {
    let start = Date.now();
    const sorted = array.sort()
    let end = Date.now();
    const ms = end - start
    document.getElementById('jsResult').textContent = ms + " Milliseconds"
    console.log('Sorted with WASM in ' + ms + ' milliseconds')
    return ms
}

function wasmSort(array) {
    let start = Date.now();
    const sorted = wasm.sort_array(array)
    let end = Date.now();
    const ms = end - start
    document.getElementById('wasmResult').textContent = ms + " Milliseconds"
    console.log('Sorted with WASM in ' + ms + ' milliseconds')
    return ms

}

let scrambledArray = generateScrambledArray(document.getElementById("arraySize").value)


document.getElementById("jsButton").onclick = () => jsSort([...scrambledArray])
document.getElementById("wasmButton").onclick = () => wasmSort([...scrambledArray])

document.getElementById("arraySize").oninput = () => {
    const newValue = document.getElementById("arraySize").value
    scrambledArray = generateScrambledArray(newValue)
    document.getElementById('jsResult').textContent = "Press sort..."
    document.getElementById('wasmResult').textContent = "Press sort..."
}
