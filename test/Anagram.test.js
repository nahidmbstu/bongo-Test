const Ana = require("../Anagram");

test("check anagram", () => {
    let res = Ana(["M", "U", "M"], ["M", "U", "M"]);
    console.log(res)
    expect(res).toBe(true);
});
