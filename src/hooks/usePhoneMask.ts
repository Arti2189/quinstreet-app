import { useEffect, useState } from "react";

export const usePhoneMask = (initialValue = "") => {
    const [value, setValue] = useState(initialValue);
    
    useEffect(() => {
        setValue(formatPhoneNumber(initialValue));
    }, [initialValue]);

    const formatPhoneNumber = (value: string) => {
        const digits = value.replace(/\D/g, "").slice(0, 10);

        if (digits.length === 0) return "";
        if (digits.length <= 3) return `(${digits}`;
        const areaCode = `(${digits.slice(0, 3)})`;
        if (digits.length <= 6) {
            return `${areaCode} ${digits.slice(3)}`;
        }
        return `${areaCode} ${digits.slice(3, 6)}-${digits.slice(6)}`;
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        const formatted = formatPhoneNumber(input);
        setValue(formatted);
        return formatted;
    };
    return {
        value,
        setValue,
        onChange: handlePhoneChange,
    };
};
