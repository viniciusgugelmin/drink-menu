import { View as ReactNativeView } from "react-native";

import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

interface IViewProps extends React.ComponentProps<typeof SafeAreaView> {}

function View({ children, style = {}, className = "", ...props }: IViewProps) {
  const insets = useSafeAreaInsets();
  const _style = Object.assign(
    {
      flex: 1,
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
    },
    style,
  );

  return (
    <ReactNativeView {...props} style={_style} className={className}>
      {children}
    </ReactNativeView>
  );
}

export { View };
