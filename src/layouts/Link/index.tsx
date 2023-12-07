import {
  GestureResponderEvent,
  TouchableHighlight,
  TouchableHighlightProps,
} from "react-native";

import { To, useLinkPressHandler } from "react-router-native";

interface ILinkProps extends TouchableHighlightProps {
  children?: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  replace?: boolean;
  state?: any;
  to: To;
}

function Link({
  onPress,
  replace = false,
  state,
  to,
  children,
  ...props
}: ILinkProps) {
  const internalOnPress = useLinkPressHandler(to, { replace, state });

  function handlePress(event: GestureResponderEvent) {
    if (onPress) {
      onPress(event);
    }

    if (!event.defaultPrevented) {
      internalOnPress(event);
    }
  }

  return (
    <TouchableHighlight
      {...props}
      onPress={handlePress}
      underlayColor="transparent"
    >
      {children}
    </TouchableHighlight>
  );
}

export { Link };
