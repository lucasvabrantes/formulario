import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { StyledError, StyledInput, StyledLabel } from "./style";

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
                {label ? (
                    <StyledLabel htmlFor={rest.name}>{label}</StyledLabel>
                ) : null}
                <StyledInput
                    bordercolor={error ? "error" : ""}
                    {...rest}
                    ref={ref}
                />
                {error ? <StyledError>{error.message}</StyledError> : null}
            </>
        );
    }
);
