function getTypes(array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(typeof array[i]);
    }
    return result;
    }
    const myArray = [8, "Mabel", true];
    console.log(getTypes(myArray)); 
    