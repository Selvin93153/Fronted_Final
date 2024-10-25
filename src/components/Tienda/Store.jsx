import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice"; // Asegúrate de importar el reducer correctamente

export const store = configureStore({
    reducer: {
        cart: CartReducer, // Usa el reducer importado
    }
});

export default store; // Exporta el store por defecto
