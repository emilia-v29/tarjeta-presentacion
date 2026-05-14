import { ScrollView, View, Text, StyleSheet, Linking, Image, Pressable, Alert } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [hovered, setHovered] = useState(false);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.titulo}>TARJETA DE PRESENTACIÓN :)</Text>

          <View style={styles.section}>
            <Text style={styles.title}>Datos personales</Text>
            <Text>Nombre: Emilia Villalba</Text>
            <Text>Fecha de nacimiento: 29/07/2008</Text>
            <Text>Edad: 17</Text>
            <Text>Ciudad: Las Varillas, Cba.</Text>
            <Text>Número de celular: 3533-5880014</Text>
            <Text>Email: emiliavillalba29@gmail.com</Text>
            <Text>Email escolar: elvillalba@escuelasproa.edu.ar</Text>
          </View>

          <Image
            source={require('../assets/foto1.jpg')}
            style={styles.image}
          />

          <Pressable
            style={styles.button}
            onPressIn={() =>
              Alert.alert(
                'Abriendo Instagram...',
                'Vas a ser redirigido al Instagram de Emi: @emi__villalba'
              )
            }
            onPressOut={() =>
              Linking.openURL('https://www.instagram.com/emi__villalba')
            }
          >
            <Text style={styles.buttonText}>
              @emi__villalba
            </Text>
          </Pressable>

          <View style={styles.section}>
            <Text style={styles.title}>Estudios</Text>
            <Text style={styles.estudiosText}>
              Actualmente, además de estar cursando mi último año del secundario en la escuela PROA,
              estoy haciendo un curso de forma totalmente virtual de Asistente de Recursos Humanos.
              También, estoy cursando en el Nivel Superior del GMZ las materias:
              Problemáticas Socioantropológicas en Educación y Elementos de la Aritmética y el Álgebra.
              Decidí empezar a cursar estas dos materias porque el año próximo voy a estudiar
              Profesorado de Matemática en la Universidad Nacional de Villa María.
            </Text>
          </View>

          <Image
            source={require('../assets/foto2.jpg')}
            style={styles.image}
          />

          <Pressable
            style={styles.button}
            onPress={() =>
              Linking.openURL('https://www.unvm.edu.ar/')
            }
            onLongPress={() =>
              Linking.openURL('https://humanas.unvm.edu.ar/carreras/educacion/profesorado-en-matematica/')
            }
            delayLongPress={500}
          >
            <Text style={styles.buttonText}>
              UNVM
            </Text>
          </Pressable>

          <View style={styles.section}>
            <Text style={styles.title}>Hobbies</Text>
            <Text>• Jugar al voley</Text>
            <Text>• Salir a correr</Text>
            <Text>• Leer</Text>
          </View>

          <Image
            source={require('../assets/foto3.jpg')}
            style={styles.image}
          />

          <Pressable
            style={styles.button}
            onPress={() =>
              Linking.openURL('https://www.instagram.com/runningteamlv?igsh=MW91d2Mwc3Iyd3R1Mg==')
            }
            hitSlop={10}
          >
            <Text style={styles.buttonText}>
              @runningteamlv
            </Text>
          </Pressable>

          <View style={styles.section}>
            <Text style={styles.title}>Libros favoritos</Text>
            <Text>• Harry Potter</Text>
            <Text>• Caídos del Mapa</Text>
            <Text>• Renegados</Text>
          </View>

          <Image
            source={require('../assets/foto4.jpg')}
            style={styles.image}
          />

          <Pressable
            style={styles.button}
            onPress={() =>
              Linking.openURL('https://www.harrypotter.com/es')
            }
            onLongPress={() =>
              Linking.openURL('https://www.harrypotter.com/es/sorting-hat')
            }
            delayLongPress={500}
          >
            <Text style={styles.buttonText}>
              Sitio Oficial de Harry Potter
            </Text>
          </Pressable>

          <View style={styles.section}>
            <Text style={styles.title}>Películas favoritas</Text>
            <Text>• High School Musical</Text>
            <Text>• Harry Potter</Text>
            <Text>• Mamma Mia</Text>
          </View>

          <Image
            source={require('../assets/foto5.jpg')}
            style={styles.image}
          />

          <Pressable
            style={({ pressed }) => [
              styles.button,
              hovered && { backgroundColor: '#FF0000' },
              pressed && { backgroundColor: '#FF0000' },
            ]}
            onHoverIn={() => setHovered(true)}
            onHoverOut={() => setHovered(false)}
            onPress={() =>
              Linking.openURL('https://www.disneyplus.com/es-ar/browse/entity-07398fc3-ee21-4557-9956-00a7cdc6b9bd')
            }
          >
            <Text style={styles.buttonText}>
              High School Musical en Disney+
            </Text>
          </Pressable>

          <View style={styles.section}>
            <Text style={styles.title}>Bandas favoritas</Text>
            <Text>• Miranda!</Text>
            <Text>• The Neighbourhood</Text>
          </View>

          <Image
            source={require('../assets/foto6.jpg')}
            style={styles.image}
          />

          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && { opacity: 0.5 }
            ]}
            onPress={() =>
              Linking.openURL('https://open.spotify.com/intl-es/artist/2eEmsgWmUFMbtU7agJpnjY?si=XZ1JALQXTceGgG0O8H7wVA')
            }
          >
            <Text style={styles.buttonText}>
              Miranda!
            </Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && { opacity: 0.5 }
            ]}
            onPress={() =>
              Linking.openURL('https://open.spotify.com/intl-es/artist/77SW9BnxLY8rJ0RciFqkHh?si=5eMNvKm2QJe8Kmf5YXs0Hg')
            }
          >
            <Text style={styles.buttonText}>
              The Neighbourhood
            </Text>
          </Pressable>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: '#FAACBF',
  },
  titulo: {
  fontSize: 30,
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#000',
  fontFamily: 'Trebuchet MS',
  letterSpacing: 2,
  marginBottom: 24,
  },
  section: {
    marginBottom: 20,
    padding: 25,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#000',
    padding: 14,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Trebuchet MS'
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Trebuchet MS',
    textDecorationLine: 'underline',
  },
  estudiosText: {
  textAlign: 'justify',
  lineHeight: 22
}
});