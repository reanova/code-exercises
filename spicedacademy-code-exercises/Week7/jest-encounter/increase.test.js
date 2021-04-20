const { increase } = require("./increase");

test("increase returns ERROR when passed NaN", () => {
    const result = increase(NaN);
    expect(result).toBe("ERROR");
});

test("passing 0 to increase returns ERROR", () => {
    const result = increase(0);
    expect(result).toBe("ERROR");
});

test("passing num less than 0 to increase returns ERROR", () => {
    const result = increase(-10);
    expect(result).toBe("ERROR");
});

test("passing num greater than 0 return that num multiplied by 10 UNTIL we reach at least 1M", () => {
    expect(increase(5)).toBe(5000000);
});

test("passing num greater than 1M  to increase will solely return that number", () => {
    expect(increase(8000000)).toBe(8000000);
});
