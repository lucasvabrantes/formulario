import styled from "styled-components";

export const StyledBody = styled.div`
    width: 100vw;
    padding: 25px;
    background-color: var(--purple-2);
`;

export const StyledForm = styled.form`
    display: flex;
    width: 100%;
    max-width: 760px;
    flex-direction: column;
    margin: 2rem;
    padding: 3rem 5rem;
    gap: 1rem;
    background-color: var(--white);
    margin: 0 auto;

    input,
    select {
        align-self: center;
    }

    .passwordButton {
        display: flex;
        width: 100%;
        max-width: 164px;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
        margin-left: 16px;

        span {
            font-size: 1rem;
            font-weight: 400;
            color: var(--grey-2);
        }
    }
`;

export const StyledFieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    font-size: 1rem;
    max-width: 564px;
    border: none;
    gap: 10px;

    label {
        margin-bottom: 10px;
    }

    .inputRadio {
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-end;
        align-items: center;
        align-content: center;
        margin-left: 20px;
        position: relative;

        label {
            margin-top: 11px;
            font-size: 1rem;
            color: var(--grey-2);
            font-weight: 400;
        }
        input[type="radio"] {
            appearance: none;
            border: 1px solid var(--grey-1);
            border-radius: 50%;
            display: flex;
            align-self: center;
            height: 24px;
            width: 24px;
            background-color: var(--white);
        }

        input[type="radio"]:checked::before {
            content: "";
            display: inline-block;
            align-self: center;
            border-radius: 50%;
            border: 7.5px solid var(--purple-1);
            position: absolute;
            left: 9.5px;
        }
    }
`;

export const StyledButton = styled.button`
    display: flex-inline;
    background-color: var(--purple-1);
    border-radius: 8px;
    color: var(--white);
    font-size: 1rem;
    width: 100%;
    max-width: 564px;
    height: 56px;
    align-self: center;
`;
