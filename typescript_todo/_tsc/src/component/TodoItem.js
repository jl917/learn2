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
import './todoItem.styl';
var TodoItem = /** @class */ (function (_super) {
    __extends(TodoItem, _super);
    function TodoItem(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            checked: false
        };
        return _this;
    }
    TodoItem.prototype.render = function () {
        var _this = this;
        var checked = this.state.checked;
        return React.createElement("li", { className: checked ? 'checked' : '' },
            React.createElement("span", { className: "cb", onClick: function () { return _this.setState({
                    checked: !checked
                }); } }),
            React.createElement("b", { className: "tit" }, "sfasdf"));
    };
    return TodoItem;
}(Component));
export { TodoItem };
