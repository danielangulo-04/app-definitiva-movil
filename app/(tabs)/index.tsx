import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import { HelloWave } from "@/components/hello-wave";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Collapsible } from "@/components/ui/collapsible";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#2960b9ff", dark: "#182536ff" }}
      headerImage={
        <Image
          source={require("@/assets/images/logo-finanzate-sin-fondo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedText style={styles.formLink} type="subtitle">
        NUESTROS BENEFICIOS{" "}
      </ThemedText>

      <View >
        <Image
          alt="imagen de logo finánzate"
          resizeMode="contain"
          source={require("@/assets/images/ahorra.png")}
          style={styles.headerImg}

        />
      </View>
      <View>
        <Image
          alt="imagen de logo finánzate"
          resizeMode="contain"
          source={require("@/assets/images/gasta.png")}
          style={styles.headerImg}
        />
      </View>
      <View>
        <Image
          alt="imagen de logo finánzate"
          resizeMode="contain"
          source={require("@/assets/images/invierte.png")}
          style={styles.headerImg}
        />
      </View>


      <Collapsible title="Ahorra mas facil que nunca:">
        <ThemedText>
          Descubre formas simples de optimizar tus gastos.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Invierte mejor:">
        <ThemedText>Aprende cómo hacer crecer tu dinero.</ThemedText>
      </Collapsible>
      <Collapsible title="Planifica fácil:">
        <ThemedText>Organiza tus metas y cumple tus objetivos.</ThemedText>
      </Collapsible>
      <ThemedText style={styles.formLink} type="subtitle">
        DA EL PRIMER PASO HACIA TU LIBERTAD FINANCIERA{" "}
      </ThemedText>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold" style={styles.txtcenter}>¡No importa tu nivel de experiencia.
          Finánzate te acompaña en cada paso.!</ThemedText>
      </ThemedView>
      <ThemedText type="title" style={styles.formLink2}>• Conoce algunos de nuestros consejos •</ThemedText>
      <TouchableOpacity
        onPress={() => {
          alert("Crea un plan de gastos mensual basado en tus ingresos y obligaciones. Antes de comprar algo, aplica la regla de las 24 horas: si después de ese tiempo sigue siendo importante, cómpralo; si no, evita el gasto.");
        }}
      >
        <View style={styles.btn}>
          <Text style={styles.btnText}>“Gasta con estrategia”</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          alert("Programa un ahorro automático de entre el 10% y 20% del ingreso mensual apenas recibas tu salario. Esto evita tentaciones y crea disciplina financiera.");
        }}
      >
        <View style={styles.btn}>
          <Text style={styles.btnText}>Ahorra primero</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          alert("Diversifica: reparte tu dinero en instrumentos como fondos de inversión, CDT, ETFs o acciones. Comienza con montos bajos para entender cada producto.");
        }}
      >
        <View style={styles.btn}>
          <Text style={styles.btnText}>Invierte para crecer</Text>
        </View>
      </TouchableOpacity>








      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bienvenidos a nuestra App-Movil</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Paso 1: Descarga nuestra App desde tu tienda de aplicaciones</ThemedText>
        <ThemedText>
          Edit{" "}
          <ThemedText type="defaultSemiBold">Es totalmente gratis con una subscripcion mesual de 20 Dollares.</ThemedText>{" "}
          {" "}
          <ThemedText type="defaultSemiBold">

          </ThemedText>{" "}

        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="subtitle">Paso 2: Expora nuestra App y conoce todos sus beneficios</ThemedText>
          </Link.Trigger>
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction
              title="Action"
              icon="cube"
              onPress={() => alert("Action pressed")}
            />
            <Link.MenuAction
              title="Share"
              icon="square.and.arrow.up"
              onPress={() => alert("Share pressed")}
            />
            <Link.Menu title="More" icon="ellipsis">
              <Link.MenuAction
                title="Delete"
                icon="trash"
                destructive
                onPress={() => alert("Delete pressed")}
              />
            </Link.Menu>
          </Link.Menu>
        </Link>

        <ThemedText>
          Sumgerte en un la informacion que tenemos para ti, nunca olvides que saber invertir es saber administrar tu futuro.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Paso 3: Pon en practica todo lo aprendido </ThemedText>
        <ThemedText>

          <ThemedText type="defaultSemiBold">

          </ThemedText>{" "}
          <ThemedText type="defaultSemiBold"></ThemedText>{" "}
          Recuerda practicar todo lo visto en la App, no te quedes solo en la teoria, sal al mundo e intentalo mil veces mas hasta sentirte comodo con tu progreso.
          <ThemedText type="defaultSemiBold"></ThemedText> {" "}
          <ThemedText type="defaultSemiBold"></ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 240,
    width: 350,
    bottom: 0,
    left: 30,
    position: "absolute",
  },
  formLink: {
    fontSize: 16,
    fontWeight: "600",
    color: "#084cbaff",
    textAlign: "center",
  },
  formLink2: {
    fontSize: 19,
    fontWeight: "600",
    color: "#084cbaff",
    textAlign: "center",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: "#084cbaff",
    borderColor: "#075eec",
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "600",
    color: "#fff",
  },
  txtcenter: {
    textAlign: "center",
  },
  headerImg: {
    width: 380,
    height: 150,
    alignSelf: "center",
    marginBottom: 0,
  },

});
