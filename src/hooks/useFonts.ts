import * as Font from "expo-font";

async function useFonts() {
  return Font.loadAsync({
    "Poppins-Medium": require("../assets/fonts/Poppins/medium.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins/bold.ttf"),
  });
}

export { useFonts };
