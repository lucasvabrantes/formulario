import { z } from "zod";
import { formSchema } from "./formSchema";

export interface ICepResponse {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
}

export interface IFormData {
    fullname: string;
    documentNumber: string;
    birthdate: string;
    email: string;
    zipcode: string;
    phoneNumber: string;
    addressNumber: string;
    country: string;
    city: string;
    addressDistrict: string;
    addressComplement: string | null;
    street: string;
    educationLevel: string;
    minimumWage: number;
    password: string;
}

export type TFormData = z.infer<typeof formSchema>;
