import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {

  constructor(props)
  {
    super(props)
    this.state = {
      response: "Esperando..."
    }
  }

  async componentDidMount()
  {
    let response = await this.iniciarSesion();
    if(response !== null && response !== undefined)
    {
      this.setState({response});
    }
    else
    {
      this.setState({response: "Falló"})
    }
  }

  iniciarSesion = async () =>
  {
    try {
      const response = await fetch("https://srucab-dev.okd.ucab.edu.ve/api/v1/Auth/login", {
        method: 'POST',
        body: JSON.stringify({
          user: "lazocarg",
          password: "Mfp23UCAB*"
        }),
      });
      return await (response.status === 200 ? response.json() : null);
    } catch (error) {
      console.log(error);
    }
  }

  render()
  {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>{this.state.response}</Text>
      </View>
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
