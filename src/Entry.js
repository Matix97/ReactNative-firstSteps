import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export class Entry extends Component {
  render() {
    return (
      <View style={styles.app}>
        <Text style={styles.text}>{this.props.name}</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  }
});
