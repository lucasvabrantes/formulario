import { ForwardedRef, SelectHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: FieldError;
    children: React.ReactNode;
}

export const Select = forwardRef(
    (
        { children, label, error, ...rest }: ISelectProps,
        ref: ForwardedRef<HTMLSelectElement>
    ) => {
        return (
            <>
                {label ? <label htmlFor={rest.name}>{label}</label> : null}
                <select {...rest} ref={ref}>
                    {children}
                </select>
                {error ? <p>{error.message}</p> : null}
            </>
        );
    }
);
