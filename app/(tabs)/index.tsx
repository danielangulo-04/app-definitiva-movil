import { Image } from "expo-image";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Collapsible } from "@/components/ui/collapsible";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#82a7deff", dark: "#182536ff" }}
      headerImage={
        <Image
          source={require("@/assets/images/logo-finanzate-sin-fondo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedText style={styles.formLink} type="title">
        SOBRE NOSOTROS{" "}
      </ThemedText>

      <View>
        <Image
          alt="imagen de logo finánzate"
          resizeMode="contain"
          source={require("@/assets/images/img-cerdito.jpeg")}
          style={{ width: 450, height: 350, alignSelf: "center" }}
        />
      </View>

      <Collapsible title="🧾 Quiénes somos">
        <ThemedText>
          En Finanzate somos una plataforma diseñada para ayudarte a tomar el
          control total de tus finanzas personales de forma simple, clara y
          segura. Nuestro objetivo es convertir la educación financiera en una
          herramienta accesible para todos, brindando soluciones que te permitan
          administrar tu dinero, ahorrar de manera inteligente e invertir con
          confianza.
        </ThemedText>
      </Collapsible>
      <Collapsible title="⭐ Nuestra experiencia">
        <ThemedText>
          En Finanzate, nuestra experiencia nace de años de analizar cómo las
          personas gestionan su dinero y qué herramientas realmente necesitan
          para mejorar su bienestar financiero. Hemos trabajado con expertos en
          economía, tecnología y educación financiera para construir una
          plataforma confiable, intuitiva y basada en datos reales.
        </ThemedText>
      </Collapsible>
      <Collapsible title="💬 Opiniones de nuestros clientes">
        <ThemedText>
          “Finanzate me ayudó a entender mis gastos y a mejorar mis hábitos de
          ahorro. Ahora tengo un plan financiero claro y resultados visibles.”
        </ThemedText>
      </Collapsible>

      <ThemedText style={styles.formLink} type="subtitle">
        NUESTROS BENEFICIOS{" "}
      </ThemedText>

      <View>
        <Image
          alt="imagen de logo finánzate"
          resizeMode="contain"
          source={require("@/assets/images/ahorra.png")}
          style={styles.headerImg}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          alert(
            "Programa un ahorro automático de entre el 10% y 20% del ingreso mensual apenas recibas tu salario. Esto evita tentaciones y crea disciplina financiera."
          );
        }}
      >
        <View style={styles.btn}>
          <Text style={styles.btnText}>“saber mas sobre ahorro”</Text>
        </View>
      </TouchableOpacity>
      <View>
        <Image
          alt="imagen de logo finánzate"
          resizeMode="contain"
          source={require("@/assets/images/gasta.png")}
          style={styles.headerImg}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          alert(
            "Crea un plan de gastos mensual basado en tus ingresos y obligaciones. Antes de comprar algo, aplica la regla de las 24 horas: si después de ese tiempo sigue siendo importante, cómpralo; si no, evita el gasto."
          );
        }}
      >
        <View style={styles.btn}>
          <Text style={styles.btnText}>“saber como gastar”</Text>
        </View>
      </TouchableOpacity>
      <View>
        <Image
          alt="imagen de logo finánzate"
          resizeMode="contain"
          source={require("@/assets/images/invierte.png")}
          style={styles.headerImg}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          alert(
            "Diversifica: reparte tu dinero en instrumentos como fondos de inversión, CDT, ETFs o acciones. Comienza con montos bajos para entender cada producto."
          );
        }}
      >
        <View style={styles.btn}>
          <Text style={styles.btnText}>“aprender a invertir”</Text>
        </View>
      </TouchableOpacity>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold" style={styles.txtcenter}>
          ¡No importa tu nivel de experiencia. Finánzate te acompaña en cada
          paso.!
        </ThemedText>
      </ThemedView>
      <ThemedText type="title" style={styles.formLink2}>
        • Oportunidades para ti •
      </ThemedText>

      <ThemedView style={styles.stepContainer}></ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Link href="/invertir">
          <Link.Trigger>
            <View style={styles.btn2}>
              <Text style={styles.btnText}>💲 Te interesa invertir?</Text>
            </View>
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
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <Link href="/acciones">
          <Link.Trigger>
            <View style={styles.btn2}>
              <Text style={styles.btnText}>📈 Mercado de Acciones</Text>
            </View>
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
      </ThemedView>

      <View>
        <Image
          alt="imagen de logo finánzate"
          resizeMode="contain"
          source={require("@/assets/images/tecla-finanzate.jpeg")}
          style={{ width: 450, height: 350, alignSelf: "center" }}
        />
      </View>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold" style={styles.txtcenter}>
          El futuro esta con finanzate.
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
    position: "relative",
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
  btn2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: "#084cbaff",
    borderColor: "#366fcaff",
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
