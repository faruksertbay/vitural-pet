const { default: expect } = require("expect");
const Pet = require("./pets");

describe("constructor", () => {
  const Pet = require("./pets");
  it("returns an object", () => {
    expect(new Pet("Fido")).toBeInstanceof(Object);
  });
  it("sets the name property", () => {
    const pet = new Pet("Fido");
    expect(pet.name).toEqual("Fido");
  });
});

describe("constructor", () => {
  it("has a initial age of 0", () => {
    const pet = new Pet("Fido");
    expect(pet.age).toEqual(0);
  });
});

describe("growUp", () => {
  it("increments the age by 1", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.age).toEqual(1);
  });
  it("has an initial hunger of 0", () => {
    const pet = new Pet("Sophie");
    expect(pet.hunger).toEqual(0);
  });
  it("increments the hunger property by 5", () => {
    const pet = new Pet("Sophie");
    pet.growUp();
    expect(pet.hunger).toBe(5);
  });
  it("has a initial fitness of 10", () => {
    const pet = new Pet("Sophie");
    expect(pet.fitness).toEqual(10);
  });
  it("decrements the fitness property by 3", () => {
    const pet = new Pet("Sophie");
    pet.growUp();
    expect(pet.fitness).toBe(7);
  });
});

describe("walk", () => {
  it("increases fitness by 4", () => {
    const pet = new Pet("fido");
    pet.fitness = 4;
    pet.walk();
    expect(pet.fitness).toEqual(8);
  });
});

describe("walk", () => {
  it("increases fitness by to a maximum of 10", () => {
    const pet = new Pet("fido");
    pet.fitness = 8;
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });
});

describe("feed", () => {
  it("decreases the hunger level by 3", () => {
    const pet = new Pet("fido");
    pet.hunger = 0;
    expect(pet.hunger).toEqual(0);
  });
  it("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");
    pet.age = 30;
    expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
  });
});

describe("checkUp", () => {
  it("should check ıf pet is hungry or fit", () => {
    const pet = new Pet("fido");
    pet.fitness = 2;
    pet.hunger = 4;
    pet.checkUp();
    expect(pet.checkUp()).toEqual("I need a walk");
  });
  it("should check if pet is hungry or fit", () => {
    const pet = new Pet("fido");
    pet.fitness = 1;
    pet.hunger = 7;
    pet.checkUp();
    expect(pet.checkUp()).toEqual("I am Hungry AND I need a walk");
  });
  it('should return "I am Hungry" when pet\'s hunger is 5 or more ', () => {
    const pet = new Pet("fido");
    pet.hunger >= 5;
    pet.checkUp();
    expect(pet.checkUp()).toEqual("I am Hungry");
  });
  it("should check if pet is hungry or fit", () => {
    const pet = new Pet("fido");
    pet.hunger = 2;
    pet.fitness = 7;
    pet.checkup();
    expect(pet.checkup()).toEqual("I feel great!");
  });
  it("throws an error if the pet is not alive", () => {
    const pet = new Pet("fido");
    pet.age = 30;
    expect(() => pet.checkUp().toThrow("your pet is no longer alive :("));
  });
});
