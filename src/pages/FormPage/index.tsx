import { StyledBody, StyledButton, StyledFieldset, StyledForm } from "./style";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { TFormSchema, formSchema } from "./formSchema";
import { useForm, SubmitHandler } from "react-hook-form";
import { ICepResponse, IFormData } from "./interfaces";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import {
    normalizeBirthdate,
    normalizeCpf,
    normalizeMinimumWage,
    normalizePhone,
    normalizeZipcode,
} from "./masks/masks";
import { useQuery } from "react-query";
import { fetchData } from "../../services/api";
import { StyledLabel } from "../../components/Input/style";
import togOn from "../../assets/toggleOn.svg";
import togOff from "../../assets/toggleOff.svg";

function FormPage() {
    const [isTypePassword, setIsTypePassword] = useState(true);
    const [inputValue, setInputValue] = useState<string>("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TFormSchema>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
    });

    const onSubmit: SubmitHandler<TFormSchema> = (data: IFormData) => {
        data.birthdate = data.birthdate.replace("/", "").replace("/", "");
        data.phoneNumber = data.phoneNumber
            .replace("(", "")
            .replace(")", "")
            .replace("-", "");
        data.documentNumber = data.documentNumber
            .replace(".", "")
            .replace(".", "")
            .replace("-", "");
        const newMinimumWage = Number(
            data.minimumWage.replace("R$", "")
        ).toFixed(3);
        const newObject = {
            ...data,
            zipcode: inputValue,
            minimumWage: newMinimumWage,
        };
        delete newObject.confirmPassword;

        alert(JSON.stringify(newObject));
    };

    const { data, error, isLoading } = useQuery<ICepResponse | void>({
        queryKey: ["cepNumber", inputValue],
        queryFn: async () => {
            return await fetchData(inputValue);
        },
    });

    if (error instanceof Error) {
        console.log(error);
    }

    return (
        <StyledBody>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <Input
                    type="text"
                    label="Nome completo"
                    {...register("fullname")}
                    error={errors.fullname}
                />
                <Input
                    type="text"
                    label="CPF"
                    {...register("documentNumber")}
                    error={errors.documentNumber}
                    onChange={(e) => {
                        const { value } = e.target;
                        e.target.value = normalizeCpf(value);
                    }}
                />
                <Input
                    type="text"
                    label="Data de Nascimento"
                    {...register("birthdate")}
                    error={errors.birthdate}
                    maxLength={10}
                    onChange={(e) => {
                        const { value } = e.target;
                        e.target.value = normalizeBirthdate(value);
                    }}
                />
                <Input
                    type="text"
                    label="Contato"
                    {...register("phoneNumber")}
                    error={errors.phoneNumber}
                    maxLength={15}
                    onChange={(e) => {
                        const { value } = e.target;
                        e.target.value = normalizePhone(value);
                    }}
                />
                <Input
                    type="text"
                    label="CEP"
                    {...register("zipcode")}
                    maxLength={9}
                    error={errors.zipcode}
                    onChange={(e) => {
                        const { value } = e.target;
                        e.target.value = normalizeZipcode(value);
                    }}
                    onBlur={(e) => {
                        const inputFormatted = e.target.value.replace("-", "");
                        setInputValue(inputFormatted);
                    }}
                />
                <Select
                    label="Estado"
                    error={errors.addressState}
                    {...register("addressState")}
                >
                    <option value="">
                        {isLoading ? "Carregando" : "Selecione o seu Estado"}
                    </option>
                    {
                        <option defaultValue={data?.uf} value={data?.uf}>
                            {data?.uf}
                        </option>
                    }
                </Select>
                <Select
                    label="Cidade"
                    error={errors.city}
                    {...register("city")}
                >
                    <option value="">Selecione sua cidade</option>
                    <option
                        defaultValue={data?.localidade}
                        value={data?.localidade}
                    >
                        {data?.localidade}
                    </option>
                </Select>
                <Input
                    type="text"
                    label="Endereço"
                    {...register("addressStreet")}
                    error={errors.addressStreet}
                    value={data?.logradouro}
                />
                <Input
                    type="text"
                    label="Bairro"
                    {...register("addressDistrict")}
                    error={errors.addressDistrict}
                    value={data?.bairro}
                />
                <Input
                    type="text"
                    label="Número"
                    {...register("addressNumber")}
                    error={errors.addressNumber}
                />
                <Input
                    type="text"
                    label="Complemento"
                    {...register("addressComplement")}
                    error={errors.addressComplement}
                    placeholder="Opcional"
                />
                <Input
                    type="email"
                    label="Email"
                    {...register("email")}
                    error={errors.email}
                />
                <Input
                    type="text"
                    label="Renda Mensal"
                    {...register("minimumWage")}
                    error={errors.minimumWage}
                    onChange={(e) => {
                        const { value } = e.target;
                        e.target.value = normalizeMinimumWage(value);
                    }}
                />
                <StyledFieldset>
                    <StyledLabel htmlFor="educationLevel">
                        Escolaridade
                    </StyledLabel>
                    <div className="inputRadio">
                        <Input
                            defaultChecked
                            type="radio"
                            label="Ensino Fundamental Completo"
                            {...register("educationLevel")}
                            error={errors.educationLevel}
                            value="ensinoFundamental"
                        />
                    </div>
                    <div className="inputRadio">
                        <Input
                            type="radio"
                            label="Ensino Médio Completo"
                            {...register("educationLevel")}
                            error={errors.educationLevel}
                            value="ensinoMedio"
                        />
                    </div>
                    <div className="inputRadio">
                        <Input
                            type="radio"
                            label="Ensino Superior Completo"
                            {...register("educationLevel")}
                            error={errors.educationLevel}
                            value="ensinoSuperior"
                        />
                    </div>
                </StyledFieldset>
                <Input
                    type={isTypePassword ? "password" : "text"}
                    label="Senha"
                    {...register("password")}
                    error={errors.password}
                />
                <Input
                    type={isTypePassword ? "password" : "text"}
                    label="Confirmar Senha"
                    {...register("confirmPassword")}
                    error={errors.confirmPassword}
                />
                <button
                    type="button"
                    className="passwordButton"
                    onClick={() => setIsTypePassword(!isTypePassword)}
                >
                    <img
                        src={isTypePassword ? togOn : togOff}
                        alt="Botão para revelar ou esconder a senha"
                    />
                    <span>Ver senhas</span>
                </button>
                <StyledButton type="submit">Cadastrar</StyledButton>
            </StyledForm>
        </StyledBody>
    );
}

export default FormPage;
