"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCpfCnpj = void 0;
var formatCpfCnpj = function (value) {
    var cleanValue = value.replace(/\D/g, "");
    if (cleanValue.length <= 11) {
        return cleanValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }
    return cleanValue.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
};
exports.formatCpfCnpj = formatCpfCnpj;
//# sourceMappingURL=formatCpfCnpj.js.map