import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2ca58d',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 40,
    color: '#fff'

  },
  button: {
    marginVertical: 20,
    padding: 10,
    backgroundColor: "#0a2342",
    borderRadius: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 18,
    marginTop: 40,
    color: '#fff'
  },
  productContainer: {
    flex: 1,
    alignItems: 'center',
  },
  productPrice: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#0a2342'
  },
  productName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0a2342'
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  productContainerImage: {
    marginVertical: 30,
    width: 350,
    height: 350,

  }
});
