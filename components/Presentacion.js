import { ScrollView, View, Text, StyleSheet, Linking, Image, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          
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
          Alert.alert('onPressIn', 'Dedo apoyado')
          }

          onPressOut={() =>
          Alert.alert('onPressOut', 'Dedo levantado')
          }

          onPress={() =>
          Linking.openURL('https://www.instagram.com/emi__villalba')
          }
        >
  <Text style={styles.buttonText}>
    Ir a mi Instagram
  </Text>
</Pressable>

          <View style={styles.section}>
            <Text style={styles.title}>Estudios</Text>
            <Text>
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

          <View style={styles.section}>
            <Text style={styles.title}>Bandas favoritas</Text>
            <Text>• Miranda!</Text>
            <Text>• The Neighbourhood</Text>
          </View>

          <Image
            source={require('../assets/foto6.jpg')}
            style={styles.image}
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FAACBF',
  },
  section: {
    marginBottom: 20,
    padding: 15,
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
  backgroundColor: '#FAACBF',
  padding: 14,
  borderRadius: 8,
  marginBottom: 20,
},

buttonText: {
  color: '#fff',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 16,
},
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});