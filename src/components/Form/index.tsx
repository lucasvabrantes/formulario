import { StyledForm } from "./style";

interface IFormProps {
    children: React.ReactNode;
}
export const Form = ({ children }: IFormProps) => {
    return <StyledForm>{children}</StyledForm>;
};
