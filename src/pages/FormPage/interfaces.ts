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
    city: string;
    addressDistrict: string;
    addressComplement: string | null;
    addressStreet: string;
    educationLevel: string;
    minimumWage: string;
    password: string;
    confirmPassword?: string;
}

export type TFormData = z.infer<typeof formSchema>;
