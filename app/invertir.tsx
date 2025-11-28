import { Link } from "expo-router";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function ModalScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" >
        📈✔️ Consejo para invertir correctamente
      </ThemedText>
      <ThemedText type="default">
        Invierte solo en aquello que entiendas. Antes de poner tu dinero en
        cualquier activo (acciones, criptomonedas, fondos, bienes raíces, etc.),
        asegúrate de comprender cómo funciona, cuáles son sus riesgos, su
        potencial de ganancias y su horizonte de tiempo. Muchos inversores
        pierden dinero porque invierten por moda o recomendaciones sin saber
        realmente en qué están entrando.
      </ThemedText>
      <Link href="/" dismissTo style={styles.link}>
        <ThemedText type="link">Regresar</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
