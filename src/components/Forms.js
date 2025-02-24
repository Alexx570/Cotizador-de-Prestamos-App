import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import colors from "../utils/colors";
import RNPickerSelect from 'react-native-picker-select';

export default function Form (props){
	const {setCapital, setInterest, setMonths} = props;
	return(
		<View style={styles.viewForm}>
			<View style={styles.viewInput}>
				<TextInput placeholder="Cantidad a solicitar" keyboardType="numeric" style={styles.input} onChange={e=> setCapital(e.nativeEvent.text)}></TextInput>
				<TextInput placeholder="Interés %" keyboardType="numeric" style={[styles.input, styles.inputPorcentaje]} onChange={e=> setInterest(e.nativeEvent.text)}></TextInput>
			</View>
			<RNPickerSelect style={pickerSelectStyles}
				placeholder={{
					label: "Seleccione el plazo",
					value: null,
					color: "black",
				}}
				useNativeAndroidPickerStyle={false}
            	onValueChange={(value) => setMonths(value)}
            	items={[
                	{ label: '3 meses', value: '3' },
                	{ label: '6 meses', value: '6' },
                	{ label: '12 meses', value: '12' },
                	{ label: '24 meses', value: '24'},
            	]}
        	/>
		</View>
	);
}

const pickerSelectStyles =StyleSheet.create({
	inputIOS:{
		fontSize: 16,
		paddingHorizontal: 10,
		paddingVertical: 8,
		borderWidth: 0.5,
		borderColor: "grey",
		borderRadius: 8,
		color: "black",
		paddingRight: 30.,
		backgroundColor: "#fff",
	},
	inputAndroid:{
		fontSize: 16,
		paddingHorizontal: 10,
		paddingVertical: 8,
		borderWidth: 0.5,
		borderColor: "grey",
		borderRadius: 8,
		color: "black",
		paddingRight: 30.,
		backgroundColor: "#fff",
	}

});

const styles = StyleSheet.create({
	viewForm:{
		position: "absolute",
		bottom: 0,
		width: "85%",
		height:180,
		paddingHorizontal: 50,
		backgroundColor: colors.PRIMARY_COLOR_DARK,
		borderRadius: 30,
		justifyContent: "center",
	},

	viewInput:{
		flexDirection: "row",
	},

	input:{
		height: 50,
		width: "60%",
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: colors.PRIMARY_COLOR,
		borderRadius: 5,
		marginRight: 5,
		marginLeft: -5,
		color:"000",
		paddingHorizontal: 20,

	},

	inputPorcentaje:{
		width:"40%",
		marginLeft: 5,

	}

});