import { View } from "react-native";

interface IContainerProps extends React.ComponentProps<typeof View> {
  children?: React.ReactNode;
}

function Container({
  children = null,
  style = {},
  className = "",
  ...props
}: IContainerProps) {
  const _style = Object.assign({}, style);

  return (
    <View {...props} style={_style} className={className}>
      {children}
    </View>
  );
}

export { Container };
