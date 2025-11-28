import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Collapsible } from '@/components/ui/collapsible';
import { Fonts } from '@/constants/theme';

export default function TabTwoScreen() {
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
            <View>
              <Image
                alt="imagen de logo finánzate"
                resizeMode="contain"
                source={require("@/assets/images/usuario-fin.png")}
                style={{ width: 350, height: 200, alignSelf: "center" }}
              />
            </View>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Nombre Usuario
        </ThemedText>
      </ThemedView>
      <ThemedText>Datos personales</ThemedText>
      <Collapsible title="Ganancias mensuales">
        <ThemedText>
          Aquí puedes ver un resumen de tus ganancias mensuales. Mantente al tanto de tu progreso
        </ThemedText>
      </Collapsible>
      <Collapsible title="Inversiones activas">
        <ThemedText>
          Revisa tus inversiones actuales y su rendimiento. Asegúrate de diversificar tu portafolio
        </ThemedText>
      </Collapsible>
      <Collapsible title="Datos perosnales">
        <ThemedText>
          Actualiza y gestiona tu información personal para mantener tu cuenta segura y al día.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Visita nuestra pagina web">
        <ExternalLink href="http://localhost:5173/">
          <ThemedText type="link">visitar</ThemedText>
        </ExternalLink>
      </Collapsible>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
    reactLogo: {
    height: 240,
    width: 350,
    bottom: 0,
    left: 30,
    position: "relative",
  },
});
