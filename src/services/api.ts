import axios from "axios";
import { ICepResponse } from "../pages/FormPage/interfaces";

async function fetchData(cepNumber: string): Promise<ICepResponse> {
    const res = await axios
        .get(`https://viacep.com.br/ws/${cepNumber}/json/`)
        .then((response) => response.data);

    return res;
}

export { fetchData };
