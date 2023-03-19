import { View ,Text,StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";



function StackN(){

const nav= useNavigation();

    return <View style = {styles.conatainer}>
      <Text onPress={()=>{nav.navigate('StackN1')}}>all expenses</Text>
     

    </View>
}
export default StackN;
const styles = StyleSheet.create({
    conatainer:{
        flex:1
    }
});