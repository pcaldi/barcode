import { useEffect, useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";


import { Image, Text, TouchableOpacity, View } from "react-native";
import { IProduct, findProductByCode } from '../services/api'
import { styles } from './styles'

import { useAudio } from "../hook/useAudio";

export function Screen() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanning, setScanning] = useState(false);
  const [products, setProducts] = useState<IProduct | null | undefined>(null);
  const { playAudio } = useAudio();



  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);




  function onBarCodeScanned(payload: { data: string }) {
    // consultar o código de barras na API
    const product = findProductByCode(payload.data);

    // após o retorno da API salvar o produto em um estado.
    setProducts(product);

    // Se já leu o produto e pode fechar o scanner
    setScanning(false);

    // Reproduzir o som de beep somente se um produto for encontrado
    if (product) {
      playAudio()
    }
  }

  if (hasPermission === null) {
    return <Text style={styles.subtitle}>Obtendo permissões...</Text>;
  }

  if (hasPermission === false) {
    return <Text style={styles.subtitle}>Sem permissões para acessar a câmera</Text>;
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Easy Barcode Scanner!</Text>
      <Text style={styles.subtitle}>Encontre o preço dos items que você precisa </Text>

      {products === undefined && (
        <Text style={styles.subtitle}>Produto não encontrado... </Text>)}

      {products && (
        <View style={styles.productContainer}>
          <Text style={styles.productPrice}>{products?.price}</Text>
          <Text style={styles.productName}>{products?.name}</Text>

          <View style={styles.productContainerImage}>

            <Image style={styles.productImage} source={{
              uri: products?.image
            }} />

          </View>
        </View>
      )}


      {scanning && (
        <BarCodeScanner
          onBarCodeScanned={onBarCodeScanned}
          style={{ height: 300, width: '100%' }}
        />
      )}

      <TouchableOpacity style={styles.button} >
        <Text
          style={styles.buttonText}
          onPress={() => {
            setScanning(prev => !prev);
            setProducts(null);
          }
          }>
          {scanning ? "Cancelar" : "Consultar Preço"}</Text>
      </TouchableOpacity>
    </View >
  );




}

