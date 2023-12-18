import { TextInput, ScrollView } from "react-native";

import { useForm, useFieldArray, Controller } from "react-hook-form";
import Icon from "react-native-vector-icons/FontAwesome";

import getRandomInArray from "../../utils/getRandomInArray";

import { Container, Link, Text, View } from "../../layouts";

import {
  DRINK_INGREDIENTS,
  DRINK_INGREDIENTS_2,
  DRINK_INGREDIENTS_TEXT,
  DRINK_NAMES,
} from "./data";

import { S } from "./styles";

type Inputs = {
  name: string;
  ingredients: {
    name: string;
    text: string;
  }[];
  preparation: string;
  imageUrl: string;
};

const namePlaceholder = getRandomInArray(DRINK_NAMES);
const ingredientsPlaceholder = Array.from({ length: 10 }, () =>
  getRandomInArray(DRINK_INGREDIENTS, DRINK_INGREDIENTS_2),
);
const ingredientsTextPlaceholder = Array.from({ length: 10 }, () =>
  getRandomInArray(DRINK_INGREDIENTS_TEXT),
);
const preparationPlaceholder = "Shake it";
const imageUrlPlaceholder = "https://example.com/image.jpg";

function Form() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      ingredients: [],
      preparation: "",
      imageUrl: "",
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredients",
  });

  return (
    <View style={S.Background}>
      <Container style={S.Form}>
        <Link to="/" style={S.BackButton}>
          <Icon name="arrow-circle-left" size={30} style={S.BackButtonIcon} />
        </Link>
        <ScrollView
          style={S.ScrollBackground}
          automaticallyAdjustKeyboardInsets
        >
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder={namePlaceholder}
                style={S.PrincipalInput}
                placeholderTextColor={"#fff6"}
              />
            )}
            name="name"
            rules={{ required: true }}
          />
          {errors.name ? (
            <Text style={S.PrincipalInputError}>This is required.</Text>
          ) : (
            <Container style={S.SizedContainer} />
          )}

          <Container style={S.IngredientsContainer}>
            {fields.length ? (
              fields.map((field, index) => (
                <Container key={field.id} style={S.Ingredient}>
                  <Container>
                    <Controller
                      control={control}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <View style={S.InputsContainer}>
                          <Text
                            nativeID={`ingredients.${index}.name`}
                            style={S.Label}
                          >
                            Ingredient
                          </Text>
                          <TextInput
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder={ingredientsPlaceholder[index % 10]}
                            style={S.Input}
                            accessibilityLabelledBy={`ingredients.${index}.name`}
                          />
                        </View>
                      )}
                      name={`ingredients.${index}.name`}
                      defaultValue={field.name}
                      rules={{ required: true }}
                    />
                    {errors.ingredients?.[index]?.name ? (
                      <Text style={S.InputError}>This is required.</Text>
                    ) : (
                      <Container style={S.SizedContainer} />
                    )}
                  </Container>
                  <Container>
                    <Controller
                      control={control}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <View style={S.InputsContainer}>
                          <Text
                            nativeID={`ingredients.${index}.text`}
                            style={S.Label}
                          >
                            Step by step
                          </Text>
                          <TextInput
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder={ingredientsTextPlaceholder[index % 10]}
                            style={S.Input}
                            accessibilityLabelledBy={`ingredients.${index}.text`}
                          />
                        </View>
                      )}
                      name={`ingredients.${index}.text`}
                      defaultValue={field.text}
                      rules={{ required: true }}
                    />
                    {errors.ingredients?.[index]?.text ? (
                      <Text style={S.InputError}>This is required.</Text>
                    ) : (
                      <Container style={S.SizedContainer} />
                    )}
                  </Container>
                  <Text onPress={() => remove(index)} style={S.DeleteButton}>
                    Delete
                  </Text>
                </Container>
              ))
            ) : (
              <Text style={S.NoIngredients}>No ingredients</Text>
            )}
          </Container>
          <Text
            onPress={() => append({ name: "", text: "" })}
            style={S.AddButton}
          >
            Add ingredient
          </Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={S.InputsContainer}>
                <Text nativeID={"preparation"} style={S.Label}>
                  Preparation
                </Text>
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder={preparationPlaceholder}
                  multiline
                  numberOfLines={4}
                  style={S.Input}
                  accessibilityLabelledBy={"preparation"}
                />
              </View>
            )}
            name="preparation"
            rules={{ required: true }}
          />
          {errors.preparation ? (
            <Text style={S.InputError}>This is required.</Text>
          ) : (
            <Container style={S.SizedContainer} />
          )}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={S.InputsContainer}>
                <Text nativeID={"imageUrl"} style={S.Label}>
                  Image URL
                </Text>
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder={imageUrlPlaceholder}
                  style={S.Input}
                  accessibilityLabelledBy={"imageUrl"}
                />
              </View>
            )}
            name="imageUrl"
            rules={{ required: true }}
          />
          {errors.imageUrl ? (
            <Text style={S.InputError}>This is required.</Text>
          ) : (
            <Container style={S.SizedContainer} />
          )}
        </ScrollView>
        <Container style={S.SubmitButtonContainer}>
          <Text
            onPress={handleSubmit((data) => console.log(data))}
            style={S.SubmitButton}
            bold
          >
            Create
          </Text>
        </Container>
      </Container>
    </View>
  );
}

export { Form };
