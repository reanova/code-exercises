const { dbl } = require("./dbl");

test("passing NaN to dbl returns bad number!", () => {
    return dbl("layla").catch((err) => {
        expect(err).toBe("bad number!");
    });
});

test("dbl returns argument times 2", () => {
    return dbl(6).then((dblNum) => {
        expect(dblNum).toBe(12);
    });
});
