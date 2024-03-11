"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@testing-library/react");
var CpfCnpjField_1 = require("./CpfCnpjField");
test('should call onChange with formatted value when input value changes', function () {
    var onChangeMock = jest.fn();
    var getByPlaceholderText = (0, react_2.render)(react_1.default.createElement(CpfCnpjField_1.CpfCnpjField, { value: '', onChange: onChangeMock })).getByPlaceholderText;
    var input = getByPlaceholderText('CPF/CNPJ');
    react_2.fireEvent.change(input, { target: { value: '12345678900' } });
    expect(onChangeMock).toHaveBeenCalledWith('123.456.789-00');
});
test('should call onChange with formatted value when input value changes', function () {
    var onChangeMock = jest.fn();
    var getByPlaceholderText = (0, react_2.render)(react_1.default.createElement(CpfCnpjField_1.CpfCnpjField, { value: '', onChange: onChangeMock })).getByPlaceholderText;
    var input = getByPlaceholderText('CPF/CNPJ');
    react_2.fireEvent.change(input, { target: { value: '59467795000195' } });
    expect(onChangeMock).toHaveBeenCalledWith('59.467.795/0001-95');
});
//# sourceMappingURL=CpfCnpjField.test.js.map