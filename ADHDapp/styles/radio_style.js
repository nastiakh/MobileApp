import { StyleSheet } from "react-native";
const radio = StyleSheet.create({
  option: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  unselected: {
    justifyContent: "center",
    marginTop: 10,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: "#B2B3AC",
    height: "20%",
  },
  selected: {
    justifyContent: "center",
    marginTop: 10,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: "#AE91DA",
    height: "20%",
  },
  txt: {
    color: "white",
    fontSize: 20,
    // fontWeight: "bold",
    fontFamily: "Cocogoose",
  },
});
export default radio;
