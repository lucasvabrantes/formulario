import { ForwardedRef, SelectHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { StyledSelect } from "./style";
import { StyledLabel } from "../Input/style";

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
                {label ? (
                    <StyledLabel htmlFor={rest.name}>{label}</StyledLabel>
                ) : null}
                <StyledSelect {...rest} ref={ref}>
                    {children}
                </StyledSelect>
                {error ? <p>{error.message}</p> : null}
            </>
        );
    }
);
