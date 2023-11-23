import { Image, Text, View, StyleSheet } from "react-native";
import mastercard from './assets/mastercard.png';
import visa from './assets/visa.png';

export const Card = ({ type, color }) => {

    const styles = StyleSheet.create({
        card: {
            width: 180,
            height: 280,
            backgroundColor: color,
            borderRadius: 10,
            marginHorizontal: 20,
            position:'relative',
            zIndex:2,
            bottom:100,
            left:100
           
        },
        imageCard: {
            width: 50,
            height: 30,
            margin: 10
        }
    });

    let cardImage;
    if (type === "visa") {
        cardImage = visa;
    } else if (type === "master_card") {
        cardImage = mastercard;
    } else {
       cardImage = mastercard
    }

    return (
        <View style={styles.card}>
            <Image source={cardImage} style={styles.imageCard} />
            <Text></Text>
            <Text></Text>
            <Text></Text>
        </View>
    )
}

export default Card;
