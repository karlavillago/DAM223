import react from "react";
import { Text, Stylesheet } from 'react-native';
export default function Encabezado () {
    return (
        <Text style={styles.titulo}>Dia de un universitario</Text>
    ); 
}
const styles = Stylesheet.create({
    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 16,
        color: "#333",
    },
});