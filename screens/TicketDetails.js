import { View, Text, SafeAreaView, ScrollView } from "react-native";
import TicketHeader from "../components/Headers/TicketHeader";
import Proyectos from "../constants/ticketsDB";
import styles from "../constants/styles";
import { WordPriorIndicator, WordStateIndicator } from "../components/Indicators";
import { COLORS } from "../constants";
import { Icon } from "react-native-elements";

const TicketDetails = ({ route }) => {
    const { TicketId, projectName } = route.params;
  
    const getTicketById = (ticketId) => {
      let ticketData = null;
  
      Proyectos.some((proyecto) => {
        const ticket = proyecto.tickets.find(
          (ticket) => ticket.TicketId === ticketId
        );
        if (ticket) {
          ticketData = ticket;
          return true;
        }
      });
  
      return ticketData;
    };
  
    const ticket = getTicketById(TicketId);
  
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor:COLORS.gray }}>
            <View style={{flex:1, marginHorizontal:25}}>
                <TicketHeader/>

                <View style={styles.Divisor}/>

                <ScrollView showsVerticalScrollIndicator={false}>                    
                    {/* -------------------------Nombre del Ticket---------------------- */}
                    <View style={styles.TicketNameContent}>
                        <View style={styles.TitleVertDivisor}>
                            <Text style={styles.TicketName}>{ticket.nombre}</Text>
                        </View>
                    </View>
                    {/* -------------------------Nombre del Ticket---------------------- */}
                    
                    <View style={{paddingLeft:20, marginTop:30}}>
                        {/* -------------------------Prioridad del pedido----------------------- */}
                        <View style={styles.DetailsLayout}>
                            <Icon name="priority-high" color={COLORS.white} style={{marginRight:5}}/>
                            <View>
                                <Text style={styles.TextM}>Prioridad:</Text>
                            </View>
                            <View>
                                <WordPriorIndicator prioridad={ticket.prioridad}/>
                            </View>
                        </View>
                        {/* -------------------------Prioridad del pedido----------------------- */}
                  
                        {/* -------------------------Estadp del pedido----------------------- */}
                        <View style={styles.DetailsLayout}>
                            <Icon name="linear-scale" color={COLORS.white} style={{marginRight:5}}/>
                            <View>
                                <Text style={styles.TextM}>Estado:</Text>
                            </View>
                            <View>
                                <WordStateIndicator estado={ticket.estado}/>
                            </View>
                        </View>
                        {/* -------------------------Prioridad del pedido----------------------- */}
                    
                        {/* -------------------------Obra Asociada---------------------- */}
                        <View style={styles.DetailsLayout}>
                            <Icon name="folder-open" color={COLORS.white} style={{marginRight:5}}/>
                            <View>
                                <Text style={styles.TextM}>Proyecto Asociado:</Text>
                            </View>
                            <View>
                                <Text style={styles.TextMGray}>{projectName}</Text>
                            </View>
                        </View>
                        {/* -------------------------Obra Asociada---------------------- */}

                        {/* -------------------------Plazo---------------------- */}
                        <View style={styles.DetailsLayout}>
                            <Icon name="timelapse" color={COLORS.white} style={{marginRight:5}}/>
                            <View>
                                <Text style={styles.TextM}>Plazo:</Text>
                            </View>
                            <View>
                                <Text style={styles.TextMGray}>{ticket.plazo}</Text>
                            </View>
                        </View>
                        {/* -------------------------Plazo---------------------- */}

                        {/* -------------------------N° de Ticket---------------------- */}
                        <View style={styles.DetailsLayout}>
                            <Icon name="receipt-long" color={COLORS.white} style={{marginRight:5}}/>
                            <View>
                                <Text style={styles.TextM}>Ticket N°:</Text>
                            </View>
                            <View>
                                <Text style={styles.TextMGray}>{ticket.numero}</Text>
                            </View>
                        </View>
                        {/* -------------------------N° de Ticket---------------------- */}

                        <View style={styles.Divisor}/>

                        {/* -------------------------Listsado de Materiales---------------------- */}
                        <View style={styles.MatListLayout}>
                            <View style={styles.SubTitleVertDivisor}>
                                <Text style={styles.MatListTitle}>Materiales solicitados</Text>
                            </View>
                            <View style={{marginTop:10}}>
                                {ticket.materiales.map((item, index) => (
                                    <View key={index} style={styles.ItemsContainer}>
                                        <Text style={styles.ItemTitle}>{item.nombre}</Text>
                                        <Text style={styles.ItemText}>Presentación: {item.presentacion}</Text>
                                        <Text style={styles.ItemText}>Cant.: {item.cantidad} - {item.unidad}</Text>
                                    </View>
                                ))}
                            </View>                   
                        </View>
                        {/* -------------------------Listado de Materiales---------------------- */}                    
                    </View>
                </ScrollView>
            </View>        
        </SafeAreaView>
    );
  };
  
  export default TicketDetails;
  