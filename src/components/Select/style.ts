import styled from "styled-components";

export const StyledSelect = styled.select`
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
    background-color: var(--white);

    &:focus {
        background: var(--purple-1);
        color: var(--white);
        border-color: var(--purple-1);
        outline: none;
    }
`;
