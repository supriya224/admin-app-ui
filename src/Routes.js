import { Dashboard } from "@mui/icons-material";
import { Routes,Route } from "react-router-dom";
import Products from "./component/core/Products";
import Setting from "./component/core/Setting";

export default function AppRoutes(){
    return(
        <Routes>
            <Route exact path="/"  element={<Dashboard/>}  />
            <Route exact path="/products"  element={<Products />}  />
            <Route exact path="/setting"  element={<Setting/>}  />
            <Route exact path="/dashboard"  element={<Dashboard/>}  />

        </Routes>
    )
}