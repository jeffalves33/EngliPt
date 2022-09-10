import react from "react";
import { 
View, 
Text,
Image,
} from "react-native";

import styles from "./styles";

const Header = () => {
    return(
        <View style={styles.container}>
            <View style={styles.containerAux}></View>
            <Text style={styles.logo}>EngliPt</Text>
            <View style={styles.containerMenu}>
                <Image style={styles.menuImage} source={require("../../assets/images/menu.png")}/>
            </View>
        </View>
    );
}

export default Header;
