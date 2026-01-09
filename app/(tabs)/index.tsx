import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet
} from 'react-native';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  // Animations
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(slideAnim, {
        toValue: 0,
        friction: 6,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar barStyle="light-content" />

      {/* Header Section */}
      <ThemedView style={styles.header}>
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.logo}
        />
        <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
          <ThemedText type="title" style={styles.title}>
            Welcome to Alyorbek's Frontend Portfolio
          </ThemedText>
          <ThemedText type="subtitle" style={styles.subtitle}>
            Creative Frontend Developer | React & React Native Expert
          </ThemedText>
        </Animated.View>
      </ThemedView>

      {/* Interactive Steps */}
      <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
        <ThemedView style={styles.card}>
          <ThemedText type="subtitle">Step 1: Explore Projects</ThemedText>
          <ThemedText>
            Check out interactive components and animations I've built.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.card}>
          <Link href="/projects">
            <Link.Trigger>
              <ThemedText type="subtitle">Step 2: See My Work</ThemedText>
            </Link.Trigger>
          </Link>
          <ThemedText>
            Dive into my React and React Native projects with detailed explanations.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.card}>
          <ThemedText type="subtitle">Step 3: Contact Me</ThemedText>
          <ThemedText>
            Reach out for collaborations, freelancing, or job opportunities.
          </ThemedText>
        </ThemedView>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    backgroundColor: '#1D3D47',
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: width * 0.6,
    height: width * 0.35,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {
    color: '#B0E0E6',
    fontSize: 16,
    marginTop: 4,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
});
