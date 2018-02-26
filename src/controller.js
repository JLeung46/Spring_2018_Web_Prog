"use strict";
exports.__esModule = true;
var model_1 = require("./model");
var $ = require("jquery");
var m = new model_1.Alerts();
m.Messages = ['Great new feature'];
function DisplayAlerts() {
    $("#alerts").append(m.Messages.join());
}
exports.DisplayAlerts = DisplayAlerts;
