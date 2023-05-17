import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';

const RankingQuestion = ({ question }) => {
  const [ranking, setRanking] = useState(0);

  const handleRankingSelect = (value) => {
    setRanking(value);
  };

  return (
    <View style={styles.container}>
     
      <Pressable style={styles.btn}>
      <Text style={styles.next}>Next</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
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
