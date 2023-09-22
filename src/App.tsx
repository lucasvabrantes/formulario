import { ReactQueryDevtools } from "react-query/devtools";
import FormPage from "./pages/FormPage";

function App() {
    return (
        <>
            <FormPage />
            <ReactQueryDevtools initialIsOpen={false} />
        </>
    );
}

export default App;
