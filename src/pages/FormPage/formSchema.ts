import { z } from "zod";

export const formSchema = z
    .object({
        fullname: z
            .string()
            .min(1, "Nome é obrigatório")
            .max(100, "Nome não pode ter mais do que 100 caracteres."),
        documentNumber: z.string().min(11),
        birthdate: z.string().min(9),
        email: z.string().email().nonempty(),
        zipcode: z.string().max(9, "Precisa conter no mínimo 8 números"),
        phoneNumber: z.string().min(11),
        addressNumber: z.string().min(1).max(40),
        addressState: z.string().max(2).nonempty(),
        country: z.string().nonempty(),
        city: z.string().nonempty(),
        addressDistrict: z.string().nonempty(),
        addressComplement: z.string().nullable(),
        street: z.string().nonempty(),
        educationLevel: z
            .string()
            .min(1, "Por favor selecione pelo uma opção de escolaridade"),
        addressStreet: z.string().nonempty(),
        minimumWage: z.string().min(1),
        password: z.string().nonempty().min(10),
        confirmPassword: z.string().min(10),
    })
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
        path: ["confirmPassword"],
    });

export type TFormSchema = z.infer<typeof formSchema>;
