import { usePhoneMask } from "../../hooks";
import { BaseInput } from "./Input";
import {
    type FieldValues,
    type Path,
    type Control,
    type FieldError,
    Controller,
    useWatch,
} from "react-hook-form";

interface PhoneInputProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    placeholder?: string;
    error?: FieldError;
    required?: boolean;
    disabled?: boolean;
    className?: string;
}

export function PhoneInput<T extends FieldValues>({
    name,
    control,
    placeholder = "Phone Number",
    error,
    required,
    disabled,
    className,
}: PhoneInputProps<T>) {
    const fieldValue = useWatch({
        control,
        name,
    }) || "";
    const phoneMask = usePhoneMask(fieldValue);

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => {
                return (
                    <BaseInput
                        placeholder={placeholder}
                        error={error}
                        required={required}
                        disabled={disabled}
                        className={className}
                        {...field}
                        value={phoneMask.value}
                        onChange={(e) => {
                            const formatted = phoneMask.onChange(e);
                            field.onChange(formatted);
                        }}
                        onBlur={field.onBlur}
                    />
                );
            }}
        />
    );
}
