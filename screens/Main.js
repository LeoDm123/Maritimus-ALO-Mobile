import React, { useState } from "react";
import { View, Text, ScrollView, Image, FlatList } from "react-native";
import { SafeAreaView, TouchableOpacity  } from "react-native";
import MainHeader from "../components/Headers/MainHeader";
import { AddButton, FilterMenu, ProjectButton } from "../components/Buttons";
import Proyectos from "../constants/ticketsDB";
import styles from "../constants/styles";
import { COLORS, assets } from "../constants";
import { TicketCard } from "../components/Cards";
import { useNavigation } from "@react-navigation/native";
import FilterComponent from "../components/Filters";
import {SearchBar} from "../components/Inputs";

const Main = () => {
    const navigation = useNavigation();

    // --------- TICKETS FILTER BY PROJECT---------- //
    const [project, setProject] = useState(null);
    const [showAllTickets, setShowAllTickets] = useState(true);

    const handleProjectSelection = (selectedProject) => {
        setProject(selectedProject);
        setShowAllTickets(false);
    };

    const toggleShowAllTickets = () => {
        setShowAllTickets(!showAllTickets);
        setProject(null);
    };

    const filteredTickets = project
        ? Proyectos.find((p) => p.nombre === project)?.tickets || []
        : [];

    const allTickets = Proyectos.reduce((all, proyecto) => {
        return all.concat(proyecto.tickets);
    }, []);

    const ticketsToDisplay = showAllTickets
        ? allTickets
        : filteredTickets.filter(
            (ticket) => 
                ticket.nombre &&
                ticket.nombre.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // ---------TICKETS FILTER BY PROJECT---------- //

    //----------FIND TICKET ID NUMBER AND ASSOCIATED PROJECT---------------//
    const handleTicketPress = (ticketId) => {
        let projectName = '';
      
        Proyectos.forEach((proyecto) => {
          const ticket = proyecto.tickets.find((ticket) => ticket.TicketId === ticketId);
          if (ticket) {
            projectName = proyecto.nombre;
            return; 
          }
        });
      
        if (projectName) {
          navigation.navigate('TicketDetails', { TicketId: ticketId, projectName });
        } else {
          console.log(`Ticket with ID ${ticketId} not found in any project`);
        }
      };
    //----------FIND TICKET ID NUMBER AND ASSOCIATED PROJECT---------------//  
    
    //---------------SEARCH TICKET WITH SEARCH BAR----------------//
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchQueryChange = (query) => {
        setSearchQuery(query);
    };

    //---------------SEARCH TICKET WITH SEARCH BAR----------------//

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor:COLORS.gray }}>
            <View style={{ flex: 1, marginHorizontal:25 }}>
                <MainHeader />
                <View style={styles.Divisor}/>
                <View>
                    <View style={styles.TextContainer}>
                        <Text style={styles.Title}>Buscar Tickets</Text>
                    </View>
                    <View> 
                        <SearchBar/>
                        <View style={styles.Divisor}/>
                    </View>
                </View>
                <View>
                    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                        <View style={styles.TextContainer}>
                            <Text style={styles.Title}>Tickets por Proyectos</Text>
                        </View>
                        <View>
                            <FilterMenu/>
                        </View>
                    </View>    

                    {/* Comienzo Horizontal Display de Proyectos */}
                    <View style={styles.HorizontalDisplay}>
                        <View style={styles.ProjectButtonDisplay}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                {Proyectos.map((Proyecto) => (
                                <ProjectButton
                                    key={Proyecto.nombre}
                                    title={Proyecto.nombre.match(/\b(\w)/g)}
                                    color={Proyecto.color}
                                    icon={Proyecto.icono}
                                    handlePress={() => handleProjectSelection(Proyecto.nombre)}
                                />
                                ))}
                            </ScrollView>
                        </View>
                    </View>
                    <View style={styles.ShowAll}>
                        {!showAllTickets && (
                            <TouchableOpacity onPress={toggleShowAllTickets}>
                            <Text style={styles.ShowAllButton}>Mostrar todos</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                    {/* Final Horizontal Display de Proyectos */}
                </View>

                {/* Comienzo Vertical Display de Tickets */}
                <View style={{ height: 380 }}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={styles.TicketCardContainer}
                    >
                        <View>
                            {ticketsToDisplay.map((ticket, index) => (
                                <TicketCard
                                    key={index}
                                    handlePress={() => handleTicketPress(ticket.TicketId)}
                                    solicitante={ticket.solicitante}
                                    nombre={ticket.nombre}
                                    numero={ticket.numero}
                                    plazo={ticket.plazo}
                                    estado={ticket.estado}
                                    prioridad={ticket.prioridad}
                                />
                            ))}
                        </View>
                    </ScrollView>
                </View>
                {/* Final Vertical Display de Tickets */}
            </View>
            <AddButton handlePress={() => navigation.navigate("NewTicket")}/>
        </SafeAreaView>
        
    );
};

export default Main;
