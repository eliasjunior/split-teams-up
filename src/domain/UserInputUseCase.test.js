import UseCase from "./UserInputUseCase";

const { shuffle, convertEmailsToListOfNames } = UseCase({});

describe("Teams", () => {
  it("should 2 teams return same numbers of players", () => {
    const list = [
      {
        name: "Messi",
        type: 1,
      },
      {
        name: "Iniesta",
        type: 1,
      },
      {
        name: "Ronaldo",
        type: 1,
      },
      {
        name: "Elias",
        type: 3,
      },
    ];
    const { orange, red } = shuffle(list);
    expect(orange.length).toBe(2);
    expect(red.length).toBe(2);
  });

  it("should split levels in different teams", () => {
    const list = [
      {
        name: "Messi",
        type: 1,
      },
      {
        name: "Ronaldo",
        type: 1,
      },
      {
        name: "Iniesta",
        type: 2,
      },
      {
        name: "Casemiro",
        type: 2,
      },
    ];
    const { orange, red } = shuffle(list);
    const p1 = orange.find((player) => player.name === "Messi");
    const p2 = red.find((player) => player.name === "Ronaldo");

    const p3 = orange.find((player) => player.name === "Iniesta");
    const p4 = red.find((player) => player.name === "Casemiro");

    expect(p1).not.toBeNull();
    expect(p2).not.toBeNull();

    expect(p3).not.toBeNull();
    expect(p4).not.toBeNull();
  });

  it("should type null be add to the teams equally", () => {
    const list = [
      {
        name: "Messi",
        type: 1,
      },
      {
        name: "Iniesta",
        type: 2,
      },
      {
        name: "Ronaldo",
        type: 3,
      },
      {
        name: "Elias",
        type: null,
      },
    ];
    const { orange, red } = shuffle(list);
    expect(orange.length).toBe(2);
    expect(red.length).toBe(2);
  });

  it("should odd number split up teams by 1 minus", () => {
    const list = [
      {
        name: "Messi",
        type: 1,
      },
      {
        name: "Iniesta",
        type: 1,
      },
      {
        name: "Ronaldo",
        type: 2,
      },
      {
        name: "Chico",
        type: 2,
      },
      {
        name: "Jon",
        type: 2,
      },
    ];
    const { orange, red } = shuffle(list);
    expect(orange.length).toBe(3);
    expect(red.length).toBe(2);
  });

  it("should convert a email string list into names", () => {
    const emailsString =
      "Jon snow<snow@mycompany.com>;Aria<aria@mycompany.com>;";
    expect(convertEmailsToListOfNames(emailsString).length).toBe(2);

    const emailsString2 =
      "Jon snow<snow@mycompany.com>;Aria<aria@mycompany.com>;Jon snow<snow@mycompany.com>;\n";
    expect(convertEmailsToListOfNames(emailsString2).length).toBe(3);

    const emailsString3 = "Jon snow\nAria\n";

    expect(convertEmailsToListOfNames(emailsString3).length).toBe(2);

  });
});
