
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) { // index starts at 0 - the loop will run as long as index is less than the length of the array - then add 1 to the index

        const words = theWordArray[i] // declare variable equal to the word at the specified index of the array
        buildMeUp += words + " " // add the current value of words to buildMeUp and add a space

        // Print buildMeUp to the console
        console.log(buildMeUp) // display in console the current value of build me up
    }

}

// Invoke the function and pass in the array
addExcitement(sentence)