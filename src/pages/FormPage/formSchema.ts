import { z } from "zod";

function convertToAmericanDate(birthdate: string) {
    const birthdateFormatted = birthdate.split("/");
    const newBirthDate =
        birthdateFormatted[1] +
        "/" +
        birthdateFormatted[0] +
        "/" +
        birthdateFormatted[2];

    return newBirthDate;
}

function isGreaterThan18(birthdate: string) {
    const userBirth = convertToAmericanDate(birthdate);
    const birthdateObject = new Date(userBirth);
    const currentDate = new Date();

    let age = currentDate.getFullYear() - birthdateObject.getFullYear();

    if (
        birthdateObject.getMonth() > currentDate.getMonth() ||
        (birthdateObject.getMonth() === currentDate.getMonth() &&
            birthdateObject.getDate() > currentDate.getDate())
    ) {
        age--;
    }

    return age >= 18;
}

export const formSchema = z
    .object({
        fullname: z
            .string()
            .min(1, "Nome é obrigatório")
            .max(100, "Nome não pode ter mais do que 100 caracteres."),
        documentNumber: z.string().min(11, "CPF precisa conter 11 dígitos."),
        birthdate: z
            .string()
            .min(10, "Data em formato inválido")
            .max(10, "Data em formato inválido")
            .refine((birthdate) => isGreaterThan18(birthdate), {
                message: "Você precisa ter mais de 18 anos para continuar",
            }),
        email: z.string().email("E-mail inválido").min(1, "E-mail inválido"),
        zipcode: z.string().max(9, "Precisa conter no mínimo 8 números"),
        phoneNumber: z.string().min(11, "Número de telefone inválido"),
        addressNumber: z
            .string()
            .min(1, "Necessário preencher este campo")
            .max(40),
        addressState: z
            .string()
            .min(1, "Você precisa escolher pelo menos uma opção."),
        city: z.string().min(1, "Você precisa escolher pelo menos uma opção."),
        addressDistrict: z.string(),
        addressComplement: z.string().nullable(),
        addressStreet: z.string(),
        educationLevel: z
            .string()
            .min(1, "Por favor selecione pelo uma opção de escolaridade"),
        minimumWage: z.string().min(1),
        password: z
            .string()
            .min(10, "A senha precisa conter pelo menos 10 caracteres"),
        confirmPassword: z
            .string()
            .min(10, "A senha precisa conter pelo menos 10 caracteres"),
    })
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
        path: ["confirmPassword"],
        message: "As senhas não correspondem",
    });

export type TFormSchema = z.infer<typeof formSchema>;
