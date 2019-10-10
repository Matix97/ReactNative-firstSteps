import React, { Component } from "react";
import { Button, StyleSheet, View, TextInput, Text } from "react-native";
import { Entry } from "./Entry";

const Link = props => (
  <Text
    {...props}
    accessibilityRole="link"
    style={StyleSheet.compose(
      styles.link,
      props.style
    )}
    stat
  />
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  _onPressButton(name, pass) {
    console.log("name: " + name + " pass: " + pass);
    if (name === "admin" && pass === "admin") {
      //new page
      alert("Correct password and usernmae");
    } else {
      //error page
      alert("Incorrect password or username or both");
    }
  }
  render() {
    return (
      <View style={styles.app}>
        <Text style={styles.text}>Tak testowo Login</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => {
            this.setState({ username: text });
          }}
        />
        <Text style={styles.text}>Password</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => {
            this.setState({ password: text });
          }}
        />
        <Button
          onPress={this._onPressButton.bind(
            this,
            this.state.username,
            this.state.password
          )}
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

  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  }
});

export default App;
