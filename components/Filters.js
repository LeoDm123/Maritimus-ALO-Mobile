import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../constants/styles';
import { COLORS } from '../constants';

const FilterComponent = () => {
  const [searchText, setSearchText] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSearchText('');
  };

  const handleSearch = () => {
    console.log('Search Text:', searchText);
  };

  return (
    <View style={styles.SearchBarContainer}>
      <TouchableOpacity onPress={handleOpenModal}>
        <Icon name="filter" size={30} color={COLORS.lightGray} />
      </TouchableOpacity>

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.ModalContainer}>
          <View style={styles.SearchContainer}>
            <Text>VENTANA DE FILTROS EN CONSTRUCCIÓN</Text>
            <TouchableOpacity style={styles.CancelButton} onPress={handleCloseModal}>
                <Icon name="close" size={30} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default FilterComponent;
