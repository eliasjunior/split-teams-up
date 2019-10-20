import { sortMainList } from "./util";

describe("Teams", () => {
  it("should sort list, case 1", () => {
    const list = [
      {
        name: "Juju",
        type: 3
      },
      {
        name: "Bebe",
        type: 2
      },
      {
        name: "Messi",
        type: 1
      },
      {
        name: "Iniesta",
        type: 1
      }
    ];

    const expected = [
      {
        name: "Messi",
        type: 1
      },
      {
        name: "Iniesta",
        type: 1
      },
      {
        name: "Bebe",
        type: 2
      },
      {
        name: "Juju",
        type: 3
      }
    ];
    expect(sortMainList(list)[3]).toEqual(expected[3]);
    expect(sortMainList(list)[2]).toEqual(expected[2]);
  });

  it("should sort list, case 2", () => {
    const list = [
      {
        name: "Juju",
        type: 3
      },
      {
        name: "Bebe",
        type: 1
      },
      {
        name: "Messi",
        type: 1
      },
      {
        name: "Iniesta",
        type: 1
      }
    ];

    const expected = [
      {
        name: "Messi",
        type: 1
      },
      {
        name: "Bebe",
        type: 1
      },
      {
        name: "Iniesta",
        type: 1
      },
      {
        name: "Juju",
        type: 3
      }
    ];
    expect(sortMainList(list)[3]).toEqual(expected[3]);
  });
});
