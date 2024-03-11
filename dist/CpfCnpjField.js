"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCpfCnpj = exports.CpfCnpjField = void 0;
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var formatCpfCnpj_1 = require("./formatCpfCnpj");
Object.defineProperty(exports, "formatCpfCnpj", { enumerable: true, get: function () { return formatCpfCnpj_1.formatCpfCnpj; } });
var CpfCnpjField = function (_a) {
    var value = _a.value, onChange = _a.onChange, error = _a.error, helperText = _a.helperText;
    var handleChange = function (event) {
        var rawValue = event.target.value.replace(/\D/g, '');
        if (rawValue.length > 14)
            return;
        var formattedValue = (0, formatCpfCnpj_1.formatCpfCnpj)(rawValue);
        onChange(formattedValue);
    };
    return (react_1.default.createElement(core_1.TextField, { value: value, onChange: handleChange, label: 'CPF/CNPJ', placeholder: 'CPF/CNPJ', error: error, helperText: helperText, inputProps: { maxLength: 18 } }));
};
exports.CpfCnpjField = CpfCnpjField;
//# sourceMappingURL=CpfCnpjField.js.map