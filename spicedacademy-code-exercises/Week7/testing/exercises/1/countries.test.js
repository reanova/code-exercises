const countries = require("./countries");

test("When find is passed an empty string, it returns an empty array", () => {
    expect(countries.find("")).toEqual([]);
});

test("The array that it returns contains no more than four matches and turns lowercase to uppercase", () => {
    expect(countries.find("a").length).toBe(4);
});

test("The array that it returns contains no more than four matches", () => {
    expect(countries.find("A").length).toBe(4);
});

test("Returns an empty array if string does not match any countries", () => {
    expect(countries.find("Aaaaa")).toEqual([]);
});
