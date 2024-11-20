
const BASE_URL = import.meta.env.VITE_REACT_URL; // main url

const URL = `${BASE_URL}/api`;

export default function projectApiList() {
    return {
        getApiJsonData: `${URL}/OpenAiApi/GetAiResponse`,
    }
}