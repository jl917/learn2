var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from "react";
import { Component } from "react";
import { TodoItem } from './TodoItem';
import './todoList.styl';
var TodoList = /** @class */ (function (_super) {
    __extends(TodoList, _super);
    function TodoList(props) {
        return _super.call(this, props) || this;
    }
    TodoList.prototype.render = function () {
        return React.createElement("ul", { className: 'todo_list' },
            React.createElement(TodoItem, null),
            React.createElement(TodoItem, null));
    };
    return TodoList;
}(Component));
export { TodoList };
