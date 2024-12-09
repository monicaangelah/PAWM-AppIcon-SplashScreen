import { Image, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <Image
        source={require('@/assets/images/icon.png')} // Replace with your logo
        style={styles.reactLogo}
      />
      <ThemedText type="title" style={styles.title}>Welcome to PeriodiChem!</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3C623', // Background color for the screen
  },
  reactLogo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    color: '#03346E', // Darker color for the title text
    fontSize: 24,
    fontWeight: 'bold',
  },
});
