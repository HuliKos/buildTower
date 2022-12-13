// function tower (layer) {
//     let tree = []
//     let block = '*'

//     for(i=0; i<layer; i++){
//         tree.push(block)
//         block += '**'
//         for (n=0; n<i; n++){
//             tree[n] = ' ' + tree[n] + ' '
//         }
//     }
//     return tree
// }

function tower (layer){
    let tree = []
    for(i=0; i<layer; i++){
        tree.push(" ".repeat(layer-i-1)
            + "*".repeat((i*2)+1)
            + " ".repeat(layer-i-1))
    }
    return tree
}


console.log(tower (7))