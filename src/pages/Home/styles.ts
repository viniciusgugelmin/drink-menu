import { tw } from "../../libs";

const ImageBackground = tw`w-full h-full bg-black`;

const Container = tw`flex-1 flex-col items-center justify-end p-8`;

const Title = tw`text-white text-4xl h-2/5`;

const RecipesButton = tw`flex text-center bg-primary shadow-md text-white text-xl min-w-full py-3 rounded-[26px]`;

const FormButton = tw`flex text-center text-white text-sm min-w-full py-3 rounded-[26px]`;

const S = {
  ImageBackground,
  Container,
  Title,
  RecipesButton,
  FormButton,
};

export { S };
