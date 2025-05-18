import React, { forwardRef } from 'react';
import { InputContainer, StyledInput, ErrorMessage } from './Input.styles';
import { type FieldError, type FieldValues, type Path, type Control, Controller } from 'react-hook-form';

interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
  label?: string;
}

export const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  ({ error, ...props }, ref) => {
    const hasError = Boolean(error);
    return (
      <InputContainer>
        <StyledInput ref={ref} hasError={hasError} {...props} />
        {error?.message && <ErrorMessage>{error.message}</ErrorMessage>}
      </InputContainer>
    );
  }
);

BaseInput.displayName = 'BaseInput';


interface FormInputProps<T extends FieldValues> extends Omit<BaseInputProps, 'name'> {
  name: Path<T>;
  control: Control<T>;
  mask?: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
}

export function Input<T extends FieldValues = FieldValues>(
  props: FormInputProps<T> | BaseInputProps
) {
  if ('control' in props) {
    const { name, control, ...rest } = props;
    
    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <BaseInput
            {...rest}
            {...field}
            value={field.value}
            onChange={(e) => {
              field.onChange(e);
            }}
          />
        )}
      />
    );
  }
  
  return <BaseInput {...props} />;
}

export { BaseInput as InputRef };