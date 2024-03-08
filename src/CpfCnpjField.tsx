import React from 'react';
import { TextField } from '@material-ui/core';
import { formatCpfCnpj } from './formatCpfCnpj';

interface Props {
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  helperText?: string;
}

export const CpfCnpjField: React.FC<Props> = ({
  value,
  onChange,
  error,
  helperText,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatCpfCnpj(event.target.value);
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
    />
  );
};
