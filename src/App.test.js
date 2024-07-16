import { jest, test } from "@jest/globals";

import * as obj from "./mock";
// jest.mock("./mock", () => ({
//   sum: () => {
//     console.log("fake sum");
//   },
// }));

test("f", () => {
  //   jest.spyOn(obj, "sum").mockImplementation(() => console.log("fake sum"));
  jest.resetModules();
  jest.mock("./mock", () => {
    const orig = jest.requireActual("./mock");
    return {
      __esModule: true,
      ...orig,
      sum: () => {
        console.log("fake sum");
      },
    };
  });
  obj.run();
  //   console.log(obj);
  //   jest.restoreAllMocks();

  obj.sum();
});
