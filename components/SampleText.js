
/**
 * Used across examples as a screen placeholder.
 */
import React from 'react';
import { Platform, Button, StyleSheet, Text } from 'react-native';
import type { Children } from 'react';

const SampleText = ({ children }: { children?: Children }) => (
  <Text style={styles.sampleText}>{children}</Text>
);

export default SampleText;

const styles = StyleSheet.create({
  sampleText: {
    margin: 14,
  }
});

