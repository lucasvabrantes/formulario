export function normalizeZipcode(value: string) {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
    return value;
}

export function normalizePhone(value: string) {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
}

export function normalizeCpf(value: string) {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})/, "$1-$2");
    value = value.replace(/(-\d{2})\d+?$/, "$1");
    return value;
}

export function normalizeBirthdate(value: string) {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "$1/$2");
    value = value.replace(/(\d{2})(\d)/, "$1/$2");
    return value;
}

export function normalizeMinimumWage(value: any) {
    const currentValue: string = value.replace(/[^\d,]/g, "");

    const currentValueNumber: number = parseFloat(
        currentValue.replace(",", ".")
    );

    if (!isNaN(currentValueNumber)) {
        const formatterValue = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            minimumSignificantDigits: 1,
        });

        const formattedValue = formatterValue.format(currentValueNumber);
        return formattedValue;
    } else {
        return "";
    }
}
