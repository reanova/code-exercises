/* Rewrite the following function to use destructuring assignment for the three variables it creates:

 function logInfo(city) {
     const name = city.name;
     const country = city.country;
     const numPeople = city.population;

     console.log(
         `${name} is in ${country} and has ${numPeople} in it.`
     );
 }
The three highlighted lines should be replaced with a single line. */

function logInfo(city) {
    const { name, country, population: numPeople } = city;

    console.log(`${name} is in ${country} and has ${numPeople} in it.`);
}

logInfo({ name: "Athens", country: "Greece", population: 4000000 + " people" });

// could shorten the code if we would not necessarily need the above to be stated as a function
