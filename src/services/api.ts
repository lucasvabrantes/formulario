import axios from "axios";

async function fetchData(cepNumber: string): Promise<void> {
    if (!cepNumber) return;

    const res = await axios
        .get(`https://viacep.com.br/ws/${cepNumber}/json/`)
        .then((response) => response.data);

    return res;
}

export { fetchData };
