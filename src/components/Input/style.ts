import styled from "styled-components";

interface StyledInputProps {
    bordercolor: string;
}

export const StyledInput = styled.input<StyledInputProps>`
    height: 56px;
    width: 100%;
    font-size: 1rem;
    max-width: 564px;
    color: var(--grey-3);
    border-radius: 8px;
    border: 1px solid var(--grey-1);
    font-weight: 400;
    padding: 16px;
    gap: 10px;
    align-self: center;

    &:focus {
        border: 2px solid var(--purple-1);
        border-color: ${({ bordercolor }) =>
            bordercolor === "error" ? "var(--red-1)" : "var(--purple-1)"};
        outline: none;
    }
`;

export const StyledError = styled.p`
    color: var(--red-1);
    font-size: 0.75rem;
    font-weight: 400;
    margin-left: 20px;
`;

export const StyledLabel = styled.label`
    max-width: 400px;
    font-weight: 600;
    font-size: 0.75rem;
    color: var(--grey-2);
    margin-left: 20px;
    margin-bottom: -10px;
`;
