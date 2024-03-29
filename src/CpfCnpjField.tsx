import React from 'react';
import { formatCpfCnpj } from './formatCpfCnpj';
import { Props } from './types';
import { TextField } from '@mui/material';

export const CpfCnpjField: React.FC<Props> = ({
  value,
  onChange,
  error,
  helperText,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = event.target.value.replace(/\D/g, '');
    if (rawValue.length > 14) return;
    const formattedValue = formatCpfCnpj(rawValue);
    onChange(formattedValue);
  };

  return (
    <TextField
      value={value}
      onChange={handleChange}
      label='CPF/CNPJ'
      placeholder='CPF/CNPJ'
      error={error}
      helperText={helperText}
      inputProps={{ maxLength: 18 }}
    />
  );
};

export { formatCpfCnpj };
