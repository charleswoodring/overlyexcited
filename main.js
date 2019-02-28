
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray, punctuation) {

    let buildMeUp = "" // Each time the for loop executes, you're going to add one more word to this string

    for (let i = 0; i < theWordArray.length; i++) { // index starts at 0 - the loop will run as long as index is less than the length of the array - then add 1 to the index

        if (i !== 0 &&  (i+1) % 3 === 0) { //if i is not = to zero and i+1 divided by 3 = 0 - did the i+1 to account for the i beginning at 0
            theWordArray[i] = theWordArray[i] + punctuation // if the above is true, add !
        }
        const words = theWordArray[i] // declare variable equal to the word at the specified index of the array


        buildMeUp += words + " " // add the current value of words to buildMeUp and add a space

        console.log(buildMeUp) // Print buildMeUp to the console
    }

}

// Invoke the function and pass in the array
addExcitement(sentence, "?")