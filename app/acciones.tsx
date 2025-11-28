import { Link } from "expo-router";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function ModalScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.txtcenter}>🏢 Acciones Destacadas del Día</ThemedText>
      <ThemedText type="subtitle"> 1. TechNova Corp — (TNV)</ThemedText>
      <ThemedText type="default">
        Empresa líder en tecnología avanzada. 📊 Tendencia actual: +3.2% 💡
        Ideal para quienes buscan crecimiento a mediano plazo.
      </ThemedText>
      <ThemedText type="subtitle"> 2. GreenFuture Energy — (GFE)</ThemedText>
      <ThemedText type="default">
        Compañía especializada en energías renovables. 📉 Tendencia actual:
        -1.1% 💡 Oportunidad para compras estratégicas a bajo precio
      </ThemedText>
      <ThemedText type="subtitle">
        {" "}
        3. GlobalMarket Logistics — (GML)
      </ThemedText>
      <ThemedText type="default">
        Corporación internacional de transporte y logística. 📊 Tendencia
        actual: +0.8% 💡 Perfecta para portafolios estables y diversificados.
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
    txtcenter: {
    textAlign: "center",
  },
});
