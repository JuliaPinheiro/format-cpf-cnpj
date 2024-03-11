import { jsx as _jsx } from "react/jsx-runtime";
import { formatCpfCnpj } from './formatCpfCnpj';
import { TextField } from '@mui/material';
export var CpfCnpjField = function (_a) {
    var value = _a.value, onChange = _a.onChange, error = _a.error, helperText = _a.helperText;
    var handleChange = function (event) {
        var rawValue = event.target.value.replace(/\D/g, '');
        if (rawValue.length > 14)
            return;
        var formattedValue = formatCpfCnpj(rawValue);
        onChange(formattedValue);
    };
    return (_jsx(TextField, { value: value, onChange: handleChange, label: 'CPF/CNPJ', placeholder: 'CPF/CNPJ', error: error, helperText: helperText, inputProps: { maxLength: 18 } }));
};
export { formatCpfCnpj };
