import { GameStore } from "./game-store";

test("new Game creation", () => {
  const game = new GameStore();

  expect(game.tabs.length).toBe(3);
  expect(game.selectedTabIndex).toBe(0);
  expect(game.isValid).toBeFalsy();
  expect(game.canAddMoreTabs).toBeTruthy();
  expect(game.price).toBe("$0.00");
  expect(game.selectedTab).toBe(game.tabs[0]);
});

test("can add up to 3 additional tabs", () => {
  const game = new GameStore();

  expect(game.canAddMoreTabs).toBeTruthy();
  expect(game.tabs.length).toBe(3);

  game.addNewTab();
  expect(game.canAddMoreTabs).toBeTruthy();
  expect(game.tabs.length).toBe(4);

  game.addNewTab();

  expect(game.canAddMoreTabs).toBeTruthy();
  expect(game.tabs.length).toBe(5);

  game.addNewTab();
  expect(game.canAddMoreTabs).toBeFalsy();
  expect(game.tabs.length).toBe(6);

  game.addNewTab();
  expect(game.canAddMoreTabs).toBeFalsy();
  expect(game.tabs.length).toBe(6);
});

test('select invalid tab index', () => {
    const game = new GameStore();
    game.selectTab(-1);
    expect(game.selectedTabIndex).toBe(0);
    expect(game.selectedTab).toBe(game.tabs[0]);

    game.selectTab(3);
    expect(game.selectedTabIndex).toBe(0);
    expect(game.selectedTab).toBe(game.tabs[0]);
});

test('select valid tab index', () => {
    const game = new GameStore();
    game.selectTab(1);
    expect(game.selectedTabIndex).toBe(1);
    expect(game.selectedTab).toBe(game.tabs[1]);
});

test('quick pick all tabs', () => {
    const game = new GameStore();
    for(let i = 0; i < 3; i++) {
        game.tabs[i].setSystem(6+i);
    }
    game.quickPickAll();

    expect(game.isValid).toBeTruthy();
    expect(game.price).toBe(`$${game.tabs.map(t => t.price).reduce((a,b)=> a+b, 0).toFixed(2)}`);
});

test('clearAll tabs', () => {
    const game = new GameStore();
    for(let i = 0; i < 3; i++) {
        game.tabs[i].setSystem(6+i);
    }

    game.quickPickAll();
    game.clearAll();
    expect(game.isValid).toBeFalsy();
    expect(game.price).toBe('$0.00');
    expect(game.tabs.every(t => t.system === 6)).toBeTruthy();
    expect(game.tabs.every(t => t.numbers.length === 0)).toBeTruthy();
});

test('reset game', () => {
    const game = new GameStore();
    game.addNewTab();
    game.addNewTab();
    game.addNewTab();

    for(let i = 0; i < game.tabs.length; i++) {
        game.tabs[i].setSystem(6 + (i % 4));
    }

    game.quickPickAll();

    game.reset();

    expect(game.isValid).toBeFalsy();
    expect(game.price).toBe('$0.00');
    expect(game.tabs.length).toBe(3);
    expect(game.tabs.every(t => t.system === 6)).toBeTruthy();
    expect(game.tabs.every(t => t.numbers.length === 0)).toBeTruthy();
})