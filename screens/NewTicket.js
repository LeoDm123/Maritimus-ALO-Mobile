import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, ScrollView, TouchableOpacity, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
//COMPONENTS
import NewTicketHeader from "../components/Headers/NewTicketHeader";
import { PriorSetter } from "../components/Indicators";
import ProjectPicker from "../components/ProjectPicker";
//DATABASE
import Materiales from "../constants/matsDB";
import Proyectos from "../constants/ticketsDB";
//STYLES
import styles from "../constants/styles";
import { COLORS } from "../constants";
import { TicketPlazoInput, TicketTitleInput } from "../components/Inputs";
import { Icon } from "react-native-elements";


const NewTicket = () => {
    const navigation = useNavigation();
    const [ticketName, setTicketName] = useState("");
    const [plazo, setPlazo] = useState(null);
    const [selectedProject, setSelectedProject] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedMaterial, setSelectedMaterial] = useState(null);
    const [selectedPresentation, setSelectedPresentation] = useState(null);
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedQuantity, setSelectedQuantity] = useState("");
    const [prioridad, setPrioridad] = useState(1)
    
    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setSelectedMaterial(null);
        setSelectedPresentation(null);
        setModalVisible(false);
    };

    const openMaterialPresentations = (material) => {
        setSelectedMaterial(material);
    };

    const selectPresentation = (presentation) => {
        setSelectedPresentation(presentation);
    };

    const handleQuantityChange = (value) => {
        setSelectedQuantity(value);
    };

    const saveSelectedItems = () => {
        if (selectedMaterial && selectedPresentation) {
        const newItem = {
            material: selectedMaterial.nombre,
            presentation: `${selectedPresentation.presentacion}-${selectedPresentation.unidad}`,
            quantity: selectedQuantity,
        };
        setSelectedItems((prevItems) => [...prevItems, newItem]);
        }
        setSelectedQuantity("");
        closeModal();
    };

    const clearSelectedItems = () => {
        setSelectedItems([]);
    };

    const clearAll = () => {
        setPlazo("");
        setPrioridad(1);
        setTicketName("");
        setSelectedProject("");
        clearSelectedItems();
    };

    const handleSelectProject = (project) => {
        setSelectedProject(project);
    };

    //-------------- PROCESO DE CREACION DE NUEVO TICKET------------------//
    let highestTicketNumber = 0;

    for (const proyecto of Proyectos) {
        for (const ticket of proyecto.tickets) {
            if (ticket.numero > highestTicketNumber) {
            highestTicketNumber = ticket.numero;
            }
        }
    }

    let highestTicketIdNumber = 0;

    for (const proyecto of Proyectos) {
        if (proyecto.id === selectedProject.id) {
            for (const ticket of proyecto.tickets) {
                if (ticket.TicketId > highestTicketIdNumber) {
                    highestTicketIdNumber = ticket.TicketId;
                }
            }
            break; 
        }
    }
    
    console.log("Highest ticket ID number for project", selectedProject.nombre, "is", highestTicketIdNumber);
    

    const createNewTicket = () => {
        const selectedProjectIndex = Proyectos.findIndex(
          (project) => project.nombre === selectedProject?.nombre
        );

        if (selectedProjectIndex !== -1) {
          const selectedProject = Proyectos[selectedProjectIndex];
      
          const newTicket = {
            TicketId:(highestTicketIdNumber + 0.1).toFixed(1),
            nombre: ticketName,
            solicitante: "Usuario Logeado",
            numero: highestTicketNumber+1,
            plazo: plazo,
            estado: 1,
            prioridad: prioridad,
            materiales: selectedItems,
          };
          
          selectedProject.tickets.push(newTicket);
          console.log(selectedProject.tickets)
          console.log(selectedProjectIndex);
          console.log(newTicket);
          clearAll();
        }
      };
    //-------------- PROCESO DE CREACION DE NUEVO TICKET------------------//

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor:COLORS.gray }}>
            <View style={{flex:1, marginHorizontal:25}}>
                <NewTicketHeader />
                <View style={styles.Divisor}/>
                <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                    <View>
                        {/* -------------------------Titulo del pedido-------------------------- */}
                        <View>
                            <View style={{flexDirection:"row", marginTop:5}}>
                                <Icon name="bookmark-border" color={COLORS.white} style={{marginRight:5}}/>
                                <Text style={styles.Title}>Titulo del pedido</Text>
                            </View>
                            <View>
                                <TicketTitleInput onChangeText={setTicketName}/>
                            </View>
                        </View> 
                        {/* -------------------------Titulo del pedido-------------------------- */}

                        <View style={styles.Divisor}/>
                        

                        {/* -------------------------Obra Asociada---------------------- */}
                        <View style={styles.TicketButtonLayout}>
                            <View style={{width:"65%"}}>
                                <View style={{flexDirection:"row"}}>
                                    <Icon name="folder-open" color={COLORS.white} style={{marginRight:5}}/>
                                    <Text style={styles.Title}>Proyecto Asociado</Text>
                                </View>
                                <Text style={styles.SmallText}>Seleccionar el proyecto asociado al pedido</Text>
                                <Text style={[styles.SmallText, {marginTop:15}]}>Proyecto asociado: {selectedProject?.nombre}</Text> 
                            </View>
                            <View style={{width:"35%", height:100, marginTop:20}}>
                                <ProjectPicker onSelectProject={handleSelectProject} />
                            </View>
                        </View>
                        {/* -------------------------Obra Asociada---------------------- */}

                        <View style={styles.Divisor}/>

                        {/* -------------------------Prioridad del pedido----------------------- */}
                        <View style={styles.TicketButtonLayout}>
                            <View style={{width:"70%"}}>
                                <View style={{flexDirection:"row"}}>
                                    <Icon name="timelapse" color={COLORS.white} style={{marginRight:5}}/>
                                    <Text style={styles.Title}>Plazo y Prioridad del Pedido</Text>
                                </View>
                                <Text style={styles.SmallText}>Seleccionar la prioridad y plazo del pedido</Text>
                                <View style={{flexDirection:"row", alignItems:"center"}}>
                                    <TicketPlazoInput onChangeText={setPlazo}/>
                                </View>
                            </View>
                            <View style={{width:"30%"}}>
                                <PriorSetter prioridad={prioridad} setPrioridad={setPrioridad}/>
                            </View>
                        </View>
                        {/* -------------------------Prioridad del pedido----------------------- */}

                        <View style={styles.Divisor}/>
                        
                    
                        {/* -------------------------Ingreso de Materiales---------------------- */}
                        
                            <View style={{flexDirection:"row"}}>
                                <View style={{width:"65%"}}>
                                <View style={{flexDirection:"row"}}>
                                    <Icon name="list-alt" color={COLORS.white} style={{marginRight:5}}/>
                                    <Text style={styles.Title}>Ingresar Materiales</Text>
                                </View>
                                    <Text style={styles.SmallText}>Seleccionar los materiales, presentacion y cantidades que desea pedir</Text>
                                </View>
                                
                                {/* ---------------------Materiales Picker--------------------------- */}
                                <View style={{width:"35%"}}>
                                    <View style={styles.ModalButtonLayout}>
                                        <TouchableOpacity
                                            style={styles.ModalOpenButton}
                                            onPress={openModal}
                                        >
                                            <Text style={styles.GMBottomText}>Agregar Materiales</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
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
                                            {!selectedMaterial && (
                                                <>
                                                <Text style={styles.ModalTitle}>Listado de Materiales</Text>
                                                <ScrollView>
                                                    {Materiales.map((material) => (
                                                    <TouchableOpacity
                                                        key={material.id}
                                                        onPress={() => openMaterialPresentations(material)}
                                                    >
                                                        <Text style={styles.ModalText}>{material.nombre}</Text>
                                                    </TouchableOpacity>
                                                    ))}
                                                </ScrollView>
                                                </>
                                            )}
                                            {selectedMaterial && (
                                                <>
                                                <Text style={styles.ModalTitle}>{selectedMaterial.nombre}</Text>
                                                <ScrollView>
                                                    {selectedMaterial.presentacion.map((presentacion) => (
                                                    <TouchableOpacity
                                                        key={presentacion.id}
                                                        onPress={() => selectPresentation(presentacion)}
                                                    >
                                                        <Text style={styles.ModalText}>
                                                        {presentacion.presentacion}-{presentacion.unidad}
                                                        </Text>
                                                    </TouchableOpacity>
                                                    ))}                  
                                                </ScrollView>
                                                <View style={styles.QtyInputLayout}>
                                                    <Text style={styles.ModalTitle}>Ingresar Cantidad</Text>
                                                    <TextInput
                                                        style={styles.QtyInput}
                                                        onChangeText={handleQuantityChange}
                                                        value={selectedQuantity}
                                                        placeholder="Agregar cantidad"
                                                        placeholderTextColor={COLORS.white}
                                                        keyboardType="numeric"
                                                    />
                                                </View>
                                                <TouchableOpacity
                                                    style={styles.AddMatButton}
                                                    onPress={saveSelectedItems}
                                                >
                                                    <Text style={styles.WMBottomText}>Agregar Material</Text>
                                                </TouchableOpacity>
                                                </>
                                            )}
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
                                
                                <View style={styles.Divisor}/>

                                <View>
                                    <Text style={styles.ListTitle}>Materiales a Solicitar</Text>
                                </View>      
                                <ScrollView style={{height:180}} showsVerticalScrollIndicator={false}>
                                    {selectedItems.map((item, index) => (
                                        <View key={index} style={styles.SelectedItemsContainer}>
                                        <Text style={styles.SelectedItemTitle}>{item.material}</Text>
                                        <Text style={styles.SelectedItemText}>Presentación: {item.presentation}</Text>
                                        <Text style={styles.SelectedItemText}>Cant.: {item.quantity}</Text>
                                        </View>
                                    ))}
                                </ScrollView>
                                <View style={styles.SendClearLayout}>
                                    <TouchableOpacity
                                    style={[styles.ClearButton, styles.buttonClose]}
                                    onPress={clearSelectedItems}
                                    >
                                        <Text style={styles.WMBottomText}>Borrar Lista</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[styles.SendButton, styles.buttonOpen]}
                                        onPress={createNewTicket}
                                    >
                                        <Text style={styles.GMBottomText}>Enviar solicitud</Text>
                                    </TouchableOpacity>
                                   
                                </View> 
                            {/* ---------------------Materiales Picker--------------------------- */}                    
                        </View>
                        {/* -------------------------Ingreso de Materiales---------------------- */}                                         
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default NewTicket;

