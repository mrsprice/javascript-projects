// launchcode.test.js code:
const launchcode = require("../index.js");

describe("Testing launchcode", function () {
  it("organization should return nonprofit", function () {
    expect(launchcode.organization).toBe("nonprofit");
  });
  it("executiveDirector should return Jeff", function () {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });
  it("percentageCoolEmployees should return 100", function () {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });
  test("programsOffered should return web development, Data Analysis, Lifeoff", function () {
    expect(launchcode.programsOffered[0]).toBe("Web Development");
    expect(launchcode.programsOffered[1]).toBe("Data Analysis");
    expect(launchcode.programsOffered[2]).toBe("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3);
  });

  it("when passed a number divisible by 2", function () {
    expect(launchcode.launchOutout(2)).toBe("Launch");
  });
  it("when passed a number divisible by 3", function () {
    expect(launchcode.launchOutout(3)).toBe("Code");
  });
  it("when passed a number divisible by 5", function () {
    expect(launchcode.launchOutout(5)).toBe("Rocks");
  });
});
