import { ScrollView, View, Text, StyleSheet, Linking, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.section}>
        <Text style={styles.title}>Datos personales</Text>
        <Text>Nombre: Emilia Villalba</Text>
        <Text>Fecha de nacimiento: 29/07/2008</Text>     
        <Text>Edad: 17</Text>
        <Text>Ciudad: Las Varillas, Cba.</Text>
        <Text>Email: emiliavillalba29@gmail.com</Text>
        <Text>Email escolar: elvillalba@escuelasproa.edu.ar</Text>
        <Text 
          style={styles.link}
          onPress={() => Linking.openURL('https://wa.me/5493533580014')}
        >
        WhatsApp
        </Text>
        <Text 
          style={styles.link}
          onPress={() => Linking.openURL('https://www.instagram.com/emi__villalba')}
        >
        Instagram
      </Text>
      </View>

      <Image 
        source={require('../assets/foto1.jpg')}
        style={styles.image}
      />


      <View style={styles.section}>
        <Text style={styles.title}>Estudios</Text>
        <Text>
        Actualmente, además de estar cursando mi último año del secundario en la escuela PROA, estoy haciendo un curso de forma totalmente virtual de Asistente de Recursos Humanos. También, estoy cursando en el Nivel Superior del GMZ las materias: Problemáticas Socioantropológicas en Educación y Elementos de la Aritmética y el Álgebra. 
        Decidí empezar a cursar estas dos materias porque el año próximo voy a estudiar Profesorado de Matemática en la Universidad Nacional de Villa María.
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
  link: {
  color: '#FAACBF',
  textDecorationLine: 'underline',
  marginTop: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
