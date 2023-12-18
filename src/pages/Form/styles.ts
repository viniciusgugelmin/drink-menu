import { tw } from "../../libs";

const Background = tw`w-full h-full bg-white`;

const ScrollBackground = tw`w-full h-full top-2 px-6 py-2 my-6`;

const BackButton = tw`absolute top-5 left-5`;

const BackButtonIcon = tw`text-primary`;

const Form = tw`flex-1 flex-col items-center justify-end p-8`;

const InputsContainer = tw`p-0 m-0`;

const Label = tw`text-primary text-xs`;

const IngredientsContainer = tw`flex w-full`;

const NoIngredients = tw`text-xs text-center w-full mb-2`;

const Ingredient = tw`bg-secondary my-2 p-4 rounded-md`;

const PrincipalInput = tw`w-full bg-primary text-white text-center font-bold py-2 px-5 rounded-full`;

const Input = tw`w-full bg-transparent border-b-2 border-primary text-primary py-2`;

const InputError = tw`text-red-500 text-xs my-2`;

const PrincipalInputError = tw`text-red-500 text-xs my-2 text-center`;

const DeleteButton = tw`bg-red-500 text-white text-xs mt-2 mb-4 py-1 text-center rounded-full`;

const AddButton = tw`w-full bg-tertiary text-white text-center shadow-md text-sm min-w-full py-2 rounded-full my-4`;

const SubmitButtonContainer = tw`w-full bg-white py-2`;

const SubmitButton = tw`w-full bg-tertiary text-white text-center shadow-md text-xl min-w-full py-3 rounded-[26px]`;

const SizedContainer = tw`h-8`;

const S = {
  Background,
  ScrollBackground,
  BackButton,
  BackButtonIcon,
  Form,
  InputsContainer,
  Label,
  IngredientsContainer,
  NoIngredients,
  Ingredient,
  PrincipalInput,
  Input,
  InputError,
  PrincipalInputError,
  DeleteButton,
  AddButton,
  SubmitButtonContainer,
  SubmitButton,
  SizedContainer,
};

export { S };
