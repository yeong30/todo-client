import { ToDo } from "./todo.js";

class DashBoardBuilder {
  constructor() {}
  setDate(date) {
    this.date = date;
    return this;
  }
  setCalendar(calendar) {
    this.calendar = calendar;
    return this;
  }
  build() {
    return new DashBoard(this.date, this.calendar);
  }
}

class DashBoard {
  constructor(date, calendar) {
    this.activeDate = date;
    // this.dashBoard = document.querySelector(".dash-board-menu__list");
    this.todoList = new ToDo(date, calendar);
    this.calendar = calendar;
    this.activeMen;
    this.deleteModBtn = document.querySelector(".btn__delete-mod");
    // this.dashBoard.addEventListener("click", (e) => this.clickMenuBtns(e));
  }
  show() {
    this.linkComponents();
    this.calendar.showCalendar(this.activeDate);
    this.todoList.showTodo(this.activeDate);
    console.log(this.todoList);
  }
  linkComponents() {
    this.calendar.clickDateEventListener(this.todoList.showTodo);
  }
  clickMenuBtns(e) {
    let target = e.target.closest("li");
    if (!target) return;
    if (!this.activeMen) return;
    switch (target.dataset.btnType) {
      case "delete-mod":
        this.deleteMod(target);
    }
  }
}

export { DashBoardBuilder };
