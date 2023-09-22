import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: FieldError;
}
export const Input = forwardRef(
    (
        { label, error, ...rest }: IInputProps,
        ref: ForwardedRef<HTMLInputElement>
    ) => {
        return (
            <>
                {label ? <label htmlFor={rest.name}>{label}</label> : null}
                <input {...rest} ref={ref} />
                {error ? <p>{error.message}</p> : null}
            </>
        );
    }
);
