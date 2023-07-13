import React, { useState } from "react";
import { Modal, TouchableOpacity, View, Text, ScrollView } from "react-native";
import Proyectos from "../constants/ticketsDB";
import styles from "../constants/styles";

export default function ProjectPicker({ onSelectProject }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [project, setProject] = useState(null);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleSelectProject = (selectedProject) => {
    setProject(selectedProject);
    onSelectProject(selectedProject);
    closeModal();
  };

  return (
    <View>
      <View style={styles.ModalButtonLayout}>
        <TouchableOpacity
          style={styles.ModalOpenButton}
          onPress={openModal}
        >
          <Text style={styles.GMBottomText}>Selecionar Proyecto</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ModalCenteredView}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.ModalCenteredView}>
            <View style={styles.ModalView}>
              <Text style={styles.ModalTitle}>Lista de Proyectos</Text>
              <ScrollView>
                {Proyectos.map((project) => (
                  <TouchableOpacity
                    key={project.id}
                    onPress={() => handleSelectProject(project)}
                  >
                    <Text style={styles.ModalText}>{project.nombre}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
              <TouchableOpacity
                style={styles.CancelButton}
                onPress={closeModal}
              >
                <Text style={styles.GMBottomText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}
