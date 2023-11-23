import React from "react";
import { View, StyleSheet } from "react-native";

const StatusLine = ({ steps = 0 }) => {
  return (
    <View style={styles.status}>
      <View style={styles.line} />
      <View style={steps < 1 ? styles.box : styles.checked} />
      <View style={steps < 2 ? styles.box : styles.checked} />
      <View style={steps < 3 ? styles.box : styles.checked} />
    </View>
  );
};

const styles = StyleSheet.create({
  status: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 300,
    height: 80,
    position: 'relative',
  },
  box: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 5,
    backgroundColor: 'white',
    borderColor: "#7152EE",
    zIndex: 2,
    marginHorizontal: 10,
  },
  checked: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 5,
    backgroundColor: '#6336f7',
    borderColor: "#7152EE",
    zIndex: 2,
    marginHorizontal: 10,
  },
  line: {
    width: '100%',
    height: 5,
    backgroundColor: "#7152EE",
    position: 'absolute',
    zIndex: 1,
    borderRadius: 5,
    top: 37.5,
  }
});

export default StatusLine;
