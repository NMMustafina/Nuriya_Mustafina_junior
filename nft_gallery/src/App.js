import {Route, Routes} from "react-router-dom";
import Layout from "./components/UI/Layout/Layout";
import NotFound from "./components/UI/NotFound/NotFound";
import Pictures from "./containers/Pictures/Pictures";

const App = () => (
    <div className="App">
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Pictures/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    </div>
);

export default App;