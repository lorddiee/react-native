import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
  ImageBackground,
  Image,
} from "react-native";
import firebase from "../database/firebase";

import bgImage from "../images/background1.jpg";
import logo from "../images/user.png";

export default class ProfileScreen extends Component {
  constructor() {
    super();
    this.state = {
      uid: "",
      email: "",
    };
  }

  signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.navigation.navigate("Login");
      })
      .catch((error) => this.setState({ errorMessage: error.message }));
  };

  render() {
    this.state = {
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid,
      email: firebase.auth().currentUser.email,
    };
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.head}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.headText}>{this.state.displayName}</Text>
        </View>
        <View style={styles.headget}>
          <Text style={styles.getdata}>Username: {this.state.displayName}</Text>
          <Text style={styles.getdata}>Email:{this.state.email}</Text>
          <Text style={styles.getdata}>
            UserID:<Text style={{ fontSize: 10 }}>{this.state.uid}</Text>
          </Text>
        </View>
        <View style={styles.Button}>
          <Button
            color="#3740FE"
            title="Logout"
            onPress={() => this.signOut()}
          />
        </View>
      </ImageBackground>
    );
    //   <Button color="#3740FE" title="Logout" onPress={() => this.signOut()} />
    // </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 35,
    backgroundColor: "#fff",
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20,
  },

  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 70,
    height: 70,
  },
  head: {
    alignItems: "center",
    marginTop: 10,
  },
  headText: {
    color: "#323232",
    fontSize: 20,
    fontWeight: "500",
    marginTop: 20,
    opacity: 0.5,
  },
  headget: {
    marginTop: 70,
  },
  getdata: {
    color: "#323232",
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 20,
    left: 20,
  },
  Button: {
    color: "#00195F",
    marginTop: 25,
    textAlign: "center",
  },
});
