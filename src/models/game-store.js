import { makeAutoObservable } from "mobx";
import { Tab } from "./tab";

export class GameStore {

    selectedTabIndex = 0;
    tabs = [];

    constructor() {
       makeAutoObservable(this);
       this.reset();
    }

    reset() {
        this.selectedTabIndex = 0;
        this.tabs = [new Tab(1), new Tab(2), new Tab(3)];
    }

    addNewTab() {
        if (this.canAddMoreTabs) {
            this.tabs.push(new Tab(this.tabs.length + 1));
        }
    }

    selectTab(tab) {
        if (tab >= 0 && tab < this.tabs.length) this.selectedTabIndex = tab;
    }

    clearAll() {
        this.tabs.forEach(t => t.clear());
    }

    quickPickAll() {
        this.tabs.forEach(t => t.quickPick());
    }

    get canAddMoreTabs() {
        return this.tabs.length < 6;
    }

    get isValid() {
        return this.tabs.some(t => t.isDirty) && this.tabs.every(t => t.isValid);
    }

    get price() {
        return `$${this.tabs.map(t => t.price).reduce((a,b) => a+b, 0).toFixed(2)}`;
    }

    get selectedTab() {
        return this.tabs[this.selectedTabIndex];
    }
}