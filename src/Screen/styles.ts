import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F6F6F5',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 40,
    color: '#1c4490'

  },
  button: {
    width: '100%',
    height: 56,
    marginTop: 30,
    marginBottom: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1c4490',
    borderRadius: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold'
  },
  subtitle: {
    margin: 10,
    alignContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    color: '#000'
  },
  productContainer: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center',
  },
  productPrice: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#1c4490'
  },
  productName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1c4490'
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  productContainerImage: {
    marginTop: 40,
    width: 350,
    height: 350,
  }
});
