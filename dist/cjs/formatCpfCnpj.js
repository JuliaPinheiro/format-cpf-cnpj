"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCpfCnpj = void 0;
function formatCpfCnpj(value) {
    if (!value)
        return '';
    var onlyNums = value.replace(/[^\d]/g, '');
    if (onlyNums.length <= 11) {
        return onlyNums.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }
    else {
        return onlyNums.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }
}
exports.formatCpfCnpj = formatCpfCnpj;
