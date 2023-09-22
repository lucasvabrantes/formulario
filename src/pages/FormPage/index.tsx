import { StyledBody } from "./style";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { TFormSchema, formSchema } from "./formSchema";
import { useForm } from "react-hook-form";
import { TFormData } from "./interfaces";
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

function FormPage() {
    const [isTypePassword, setIsTypePassword] = useState(true);
    const [inputValue, setInputValue] = useState<string>("");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<TFormSchema>({ resolver: zodResolver(formSchema) });

    const onSubmit = (formData: TFormData) => {
        console.log(formData);
    };

    const { data, error, isLoading } = useQuery({
        queryKey: ["cepData", inputValue],
        queryFn: async () => {
            if (inputValue.length === 8) {
                return await fetchData(inputValue);
            }
        },
    });

    if (isLoading) {
        <p> Carregando</p>;
    }

    if (error instanceof Error) {
        console.log(error);
    }

    return (
        <StyledBody>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                    onChange={(e) => {
                        const { value } = e.target;
                        e.target.value = normalizePhone(value);
                    }}
                />
                <Input
                    type="text"
                    label="CEP"
                    {...register("zipcode")}
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
                    <option value="">Selecione o seu Estado</option>
                    {<option value={data?.uf}>{data?.uf}</option>}
                </Select>
                <Select
                    label="Cidade"
                    error={errors.city}
                    {...register("city")}
                >
                    <option value="">Selecione sua cidade</option>
                    <option value={data?.localidade}>{data?.localidade}</option>
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
                <fieldset>
                    <label htmlFor="educationLevel">Escolaridade</label>
                    <div>
                        <Input
                            type="radio"
                            label="Ensino Fundamento Completo"
                            {...register("educationLevel")}
                            error={errors.educationLevel}
                            value="ensinoFundamental"
                        />
                        <Input
                            type="radio"
                            label="Ensino Médio Completo"
                            {...register("educationLevel")}
                            error={errors.educationLevel}
                            value="ensinoMedio"
                        />
                        <Input
                            type="radio"
                            label="Ensino Superior Completo"
                            {...register("educationLevel")}
                            error={errors.educationLevel}
                            value="ensinoSuperior"
                        />
                    </div>
                </fieldset>
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
                <button onClick={() => setIsTypePassword(!isTypePassword)}>
                    Ver senhas
                </button>
                <button type="submit">Cadastrar</button>
            </form>
        </StyledBody>
    );
}

export default FormPage;
