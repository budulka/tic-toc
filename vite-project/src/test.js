




const id = 5


const getSeparateCoordinates = (id) => {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (id == i*3 + 1 + j) 
            return (i, j);
    }
}
}



console.log(
    getSeparateCoordinates(5) == (1, 1)
)

