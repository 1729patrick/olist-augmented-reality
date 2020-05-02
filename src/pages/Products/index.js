import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { products } from '../../services/api';

const Products = ({ navigation }) => {
  const openARNavigator = ({ productId }) => {
    navigation.navigate('ARNavigator', { productId });
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingVertical: 40 }}
      showsVerticalScrollIndicator={false}>
      {products.map((product) => (
        <RectButton
          style={styles.card}
          key={product.productId}
          onPress={() => openARNavigator(product)}>
          <Image style={styles.image} source={product.image} />
          <Text style={styles.title}>{product.title}</Text>
        </RectButton>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eaeaea',
    elevation: 10,
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 6,
    marginVertical: 5,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  image: {
    height: 200,
    borderRadius: 6,
    width: '100%',
  },
  title: {
    paddingVertical: 10,
    paddingLeft: 5,
    color: '#000',
  },
});

export default Products;
