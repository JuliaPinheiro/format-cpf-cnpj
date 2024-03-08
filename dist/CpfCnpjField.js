"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CpfCnpjField = void 0;
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var formatCpfCnpj_1 = require("./formatCpfCnpj");
var CpfCnpjField = function (_a) {
    var value = _a.value, onChange = _a.onChange, error = _a.error, helperText = _a.helperText;
    var handleChange = function (event) {
        var formattedValue = (0, formatCpfCnpj_1.formatCpfCnpj)(event.target.value);
        onChange(formattedValue);
    };
    return (react_1.default.createElement(core_1.TextField, { value: value, onChange: handleChange, label: 'CPF/CNPJ', placeholder: 'CPF/CNPJ', error: error, helperText: helperText }));
};
exports.CpfCnpjField = CpfCnpjField;
//# sourceMappingURL=CpfCnpjField.js.map