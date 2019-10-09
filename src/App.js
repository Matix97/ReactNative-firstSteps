import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { Entry } from "./Entry";

// const Link = props => (
//   <Text
//     {...props}
//     accessibilityRole="link"
//     style={StyleSheet.compose(
//       styles.link,
//       props.style
//     )}
//   />
// );

class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <Entry name="Login" />
        <Entry name="Password" />
        <br />
        <Button onPress={() => {}} title="Logowanie" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  logo: {
    height: 80
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  }
});

export default App;
