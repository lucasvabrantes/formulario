import { ReactQueryDevtools } from "react-query/devtools";
import FormPage from "./pages/FormPage";
import { GlobalStyle } from "./styles/global";

function App() {
    return (
        <>
            <GlobalStyle />
            <FormPage />
            <ReactQueryDevtools initialIsOpen={false} />
        </>
    );
}

export default App;
