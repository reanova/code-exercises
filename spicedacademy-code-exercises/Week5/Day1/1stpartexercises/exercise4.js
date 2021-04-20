/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/*Pretend that it is 2002 and rewrite the following hipster (why hipster?!) Javascript so it will work 
in Internet Explorer 5 and Netscape 4 

 let getNameAndCountry = ({name, country}) => [name, country];

 let getRelocatedCity = (city1, city2={country: 'Germany'}) => {
     let [, country] = getNameAndCountry(city2);
     return {
         ...city1,
         country
     };
 };*/

function getNameAndCountry(obj) {
    return [obj.name, obj.country];
}

function getRelocatedCity(city1, city2) {
    var newDestination = Object.create(city1);
    if (city2 === undefined) {
        city2 = { country: "Germany" };
        newDestination.country = getNameAndCountry(city2)[0];
    } else {
        city2.country = "Germany";
        newDestination.country = getNameAndCountry(city2)[1];
    }
    return newDestination;
}

//// WHY WOULD WE HAVE TO ADD ALL THE FUNCTIONS TO SIMPLY DECLARE THE STRING GERMANY????
//// A finer idea would just be to set the string "Germany" above, no need for the function getNameAndCountry
//// and also no need for it in the next function.
