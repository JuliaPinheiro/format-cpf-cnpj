"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCpfCnpj = exports.CpfCnpjField = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var formatCpfCnpj_1 = require("./formatCpfCnpj");
Object.defineProperty(exports, "formatCpfCnpj", { enumerable: true, get: function () { return formatCpfCnpj_1.formatCpfCnpj; } });
var material_1 = require("@mui/material");
var CpfCnpjField = function (_a) {
    var value = _a.value, onChange = _a.onChange, error = _a.error, helperText = _a.helperText;
    var handleChange = function (event) {
        var rawValue = event.target.value.replace(/\D/g, '');
        if (rawValue.length > 14)
            return;
        var formattedValue = (0, formatCpfCnpj_1.formatCpfCnpj)(rawValue);
        onChange(formattedValue);
    };
    return ((0, jsx_runtime_1.jsx)(material_1.TextField, { value: value, onChange: handleChange, label: 'CPF/CNPJ', placeholder: 'CPF/CNPJ', error: error, helperText: helperText, inputProps: { maxLength: 18 } }));
};
exports.CpfCnpjField = CpfCnpjField;
