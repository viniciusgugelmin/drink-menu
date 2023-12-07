import { ImageBackground } from "react-native";

import { Container, Link, Text, View } from "../../layouts";

import { S } from "./styles";

function Home() {
  return (
    <ImageBackground
      source={require("../../assets/images/home.jpg")}
      style={S.ImageBackground}
      imageStyle={{ opacity: 0.7 }}
    >
      <View>
        <Container style={S.Container}>
          <Text style={S.Title} bold>
            Let's drink?
          </Text>
          <Link to="/recipes">
            <Text style={S.RecipesButton} bold>
              Start
            </Text>
          </Link>
          <Link to="/form">
            <Text style={S.FormButton}>Create a new recipe</Text>
          </Link>
        </Container>
      </View>
    </ImageBackground>
  );
}

export { Home };
