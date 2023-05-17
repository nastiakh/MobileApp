import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import Next from './next_button'

const RankingQuestion = ({ question }) => {
  const [ranking, setRanking] = useState(0);

  const handleRankingSelect = (value) => {
    setRanking(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      <View style={styles.rankContainer}>
        {[1, 2, 3, 4, 5].map((value) => (
          <TouchableOpacity
            key={value}
            style={[
              styles.rankButton,
              ranking === value && styles.selectedRankButton,
            ]}
            onPress={() => handleRankingSelect(value)}
          >
            <Text style={styles.rankButtonText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Next>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  rankContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rankButton: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  selectedRankButton: {
    backgroundColor: '#a8dadc',
  },
  rankButtonText: {
    fontSize: 16,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  next: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default RankingQuestion;
