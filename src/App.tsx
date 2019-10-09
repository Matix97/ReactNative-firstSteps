import React, { Component } from "react";
import { Button, StyleSheet, View } from "react-native";
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
  _onPressButton() {
    console.log("tescik");
    alert("You tapped the button!");
  }
  render() {
    return (
      <View style={styles.app}>
        <Entry name="Login" />
        <Entry name="Password" />
        <Button
          onPress={this._onPressButton}
          title="Logowanie"
          style={styles.butt}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  butt: {
    //choja tam nie działa
    marginVertical: "100em",
    lineHeight: "600em"
  },
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
