import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PillList = ({ list }) => {
  return (
    <View style={styles.pillList}>
      {list.map((pill, index) => (
        <View key={index} style={styles.pillItem}>
          <Text style={styles.pillText}>{pill.pillName}</Text>
          <Text style={styles.pillText}>{pill.companyName}</Text>
          <Text style={styles.pillText}>{pill.symptoms}</Text>
          <Text style={styles.pillText}>{pill.timerValue}</Text>
        </View>
      ))}
    </View>
  );
};


const styles = StyleSheet.create({
  pillList: {
    marginTop: 20,
    alignItems: 'center',
  },
  listTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  pillItem: {
    backgroundColor: '#007088',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  pillText: {
    color: 'white',
  },
});

export default PillList;