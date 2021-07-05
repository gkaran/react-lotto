import { Tab } from "./tab";
import { validate as validateUUID } from "uuid";
import { getRandomInt, factorial } from "./utils";

test("new Tab creation", () => {
  const tab = new Tab(2);
  expect(validateUUID(tab.id)).toBeTruthy();
  expect(tab.index).toBe(2);
  expect(tab.system).toBe(6);
  expect(tab.numbers).toEqual([]);
  expect(tab.isValid).toBeTruthy();
  expect(tab.price).toBe(0);
  expect(tab.priceFormatted).toBe("$0.00");
  expect(tab.isDirty).toBeFalsy();
  expect(tab.errorMessage).toBeNull();
});

test("set system without having numbers selected", () => {
  const tab = new Tab(1);
  tab.setSystem(9);
  expect(tab.system).toBe(9);
  expect(tab.numbers).toEqual([]);
  expect(tab.isValid).toBeTruthy();
  expect(tab.price).toBe(0);
  expect(tab.priceFormatted).toBe("$0.00");
  expect(tab.isDirty).toBeFalsy();
  expect(tab.errorMessage).toBeNull();
});

test.each([
  [4, 6],
  [5, 6],
  [5, 7],
  [6, 7],
  [6, 8],
  [7, 8],
  [7, 9],
  [8, 9],
])(
  "select %i numbers for system %i and get corresponding error",
  (numbers, system) => {
    const tab = new Tab(1);
    tab.setSystem(system);

    while (tab.numbers.length !== numbers) {
      const number = getRandomInt(1, 49);
      if (!tab.isNumberSelected(number)) {
        tab.selectNumber(number);
      }
    }
    expect(tab.isValid).toBeFalsy();
    expect(tab.price).toBe(0);
    expect(tab.priceFormatted).toBe("$0.00");
    expect(tab.isDirty).toBeTruthy();
    const diff = system - tab.numbers.length;
    expect(tab.errorMessage).toBe(
      `Select ${diff} more number${diff > 1 ? "s" : ""}`
    );
  }
);

test.each([
  [6, 6],
  [7, 7],
  [8, 8],
  [9, 9],
])("select %i numbers for system %i and be valid", (numbers, system) => {
  const tab = new Tab(1);
  tab.setSystem(system);

  while (tab.numbers.length !== numbers) {
    const number = getRandomInt(1, 49);
    if (!tab.isNumberSelected(number)) {
      tab.selectNumber(number);
    }
  }

  const columnPrice = 1;
  const price =
    (factorial(system) / factorial(6)) * factorial(system - 6) * columnPrice;

  expect(tab.isValid).toBeTruthy();
  expect(tab.price).toBe(price);
  expect(tab.priceFormatted).toBe(`$${price.toFixed(2)}`);
  expect(tab.isDirty).toBeTruthy();
  expect(tab.errorMessage).toBeNull();
});

test.each([
  [7, 6],
  [8, 6],
  [8, 7],
  [9, 7],
  [9, 8],
  [10, 8],
  [10, 9],
  [11, 9],
])(
  "select %i numbers for system $i and get corresponding error",
  (numbers, system) => {
    const tab = new Tab(1);
    tab.setSystem(system);

    while (tab.numbers.length !== numbers) {
      const number = getRandomInt(1, 49);
      if (!tab.isNumberSelected(number)) {
        tab.selectNumber(number);
      }
    }
    expect(tab.isValid).toBeFalsy();
    expect(tab.price).toBe(0);
    expect(tab.priceFormatted).toBe("$0.00");
    expect(tab.isDirty).toBeTruthy();
    const diff = tab.numbers.length - system;
    expect(tab.errorMessage).toBe(
      `Remove ${diff} number${diff > 1 ? "s" : ""}`
    );
  }
);

test("toggle number verifying it gets added and removed", () => {
  const tab = new Tab(1);
  tab.selectNumber(5);
  expect(tab.isNumberSelected(5)).toBeTruthy();
  tab.deselectNumber(5);
  expect(tab.isNumberSelected(5)).toBeFalsy();
});

test("clear should reset tab to original state", () => {
  const tab = new Tab(1);
  tab.setSystem(8);
  tab.selectNumber(1);
  tab.selectNumber(2);
  tab.selectNumber(3);
  tab.selectNumber(4);
  tab.selectNumber(5);
  tab.selectNumber(6);
  tab.selectNumber(7);
  tab.clear();
  expect(tab.isValid).toBeTruthy();
  expect(tab.isDirty).toBeFalsy();
  expect(tab.price).toBe(0);
  expect(tab.priceFormatted).toBe("$0.00");
  expect(tab.errorMessage).toBeNull();
  expect(tab.numbers.length).toBe(0);
});

test.each([6, 7, 8, 9])(
  "quick pick should pick %i random numbers for the tab",
  (system) => {
    const tab = new Tab(1);
    tab.setSystem(system);
    tab.quickPick();

    const columnPrice = 1;
    const price =
      (factorial(system) / factorial(6)) * factorial(system - 6) * columnPrice;
    expect(tab.isValid).toBeTruthy();
    expect(tab.isDirty).toBeTruthy();
    expect(tab.price).toBe(price);
    expect(tab.priceFormatted).toBe(`$${price.toFixed(2)}`);
    expect(tab.errorMessage).toBeNull();
    expect(tab.numbers.length).toBe(system);
  }
);
