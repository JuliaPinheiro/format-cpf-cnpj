import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CpfCnpjField } from './CpfCnpjField';

test('should call onChange with formatted value when input value changes', () => {
  const onChangeMock = jest.fn();

  const { getByPlaceholderText } = render(
    <CpfCnpjField value='' onChange={onChangeMock} />
  );

  const input = getByPlaceholderText('CPF/CNPJ');

  fireEvent.change(input, { target: { value: '12345678900' } });

  expect(onChangeMock).toHaveBeenCalledWith('123.456.789-00');
});

test('should call onChange with formatted value when input value changes', () => {
  const onChangeMock = jest.fn();

  const { getByPlaceholderText } = render(
    <CpfCnpjField value='' onChange={onChangeMock} />
  );

  const input = getByPlaceholderText('CPF/CNPJ');

  fireEvent.change(input, { target: { value: '59467795000195' } });

  expect(onChangeMock).toHaveBeenCalledWith('59.467.795/0001-95');
});
