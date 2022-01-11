//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/


function findDogNames(string, list){
    let my_list = string.split("");
    for (let x = 0; x < my_list.length; x++){
        res = list.includes(myList[x])
        if (res = true){
            console.log('Matched dog_name')
        } else{
            console.log('dog_name not matched')
        }

    }
    
}

let dog_string = "I am a dog named Willy!"
let dog_names = ["Max", "has", "blue", "dog"]

findDogNames(dog_string, dog_names)

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */
let array = ["Matias","Soccer","Happiness", "Coding"]

function replaceEvenNums(array){
    for (let x = 0; x < array.length; x++) {
        if(x % 2 === 0) { 
            array.splice(x,1,"even index");
        }
    }
}

replaceEvenNums(new_list)
console.log(new_list)