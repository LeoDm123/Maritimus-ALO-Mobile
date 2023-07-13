import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Modal, StyleSheet, SafeAreaView, Text } from 'react-native';
import styles from '../constants/styles';
import { COLORS } from '../constants';

//-------------------------SEARCH BAR------------------------//
export const SearchBar = () => {
  const [text, onChangeText] = useState('Buscar...');

  return (
        <TextInput
          style={styles.TextInput}
          onChangeText={onChangeText}
          value={text}
        />
  );
};
//-------------------------SEARCH BAR------------------------//

//-------------------------LOGIN MAIL------------------------//
export const LoginMail = () => {

  return (
        <TextInput
          style={styles.TextInput}
          placeholderTextColor={COLORS.lightGray}
          placeholder='Ingrese su dirección de mail'
          inputMode="email"
        />
  );
};
//-------------------------LOGIN MAIL------------------------//

//-------------------------LOGIN PASS------------------------//
export const LoginPass = () => {

  return (
        <TextInput
          style={styles.TextInput}
          placeholderTextColor={COLORS.lightGray}
          placeholder='Ingrese su contraseña'
          caretHidden={true}
        />
  );
};
//-------------------------LOGIN PASS------------------------//

//-------------------------TITULO DE PEDIDO------------------------//
export const TicketTitleInput = ({onChangeText}) => {

  return (
        <TextInput
          style={styles.TextInput}
          placeholderTextColor={COLORS.lightGray}
          placeholder='Escriba el titulo del pedido...'
          onChangeText={onChangeText}
        />
  );
};
//-------------------------TITULO DE PEDIDO------------------------//

//-------------------------PLAZO DE PEDIDO------------------------//
export const TicketPlazoInput = ({onChangeText}) => {

  return (
        <TextInput
          style={styles.TextInput}
          placeholder='Ingrese el plazo en días...'
          onChangeText={onChangeText}
          inputMode="numeric"
          placeholderTextColor={COLORS.lightGray}
        />
  );
};
//-------------------------PLAZO DE PEDIDO------------------------//