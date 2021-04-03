import { sendEmail } from "../api/api";


export async function notify() {
    sendEmail("Prueba de envío de email", "Esto es una prueba de Radarin_es3a", "thaliacf5c@gmail.com");
}
