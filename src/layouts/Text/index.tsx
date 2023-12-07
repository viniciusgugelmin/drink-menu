import { Text as ReactNativeText } from "react-native";

interface ITextProps extends React.ComponentProps<typeof ReactNativeText> {
  children: React.ReactNode;
  bold?: boolean;
}

function Text({
  children,
  style = {},
  className = "",
  bold = false,
  ...props
}: ITextProps) {
  const fontFamily = bold ? "Poppins-Bold" : "Poppins-Medium";
  const styleToMerge = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;
  const _style = Object.assign({}, styleToMerge, { fontFamily });

  return (
    <ReactNativeText {...props} style={_style} className={className}>
      {children}
    </ReactNativeText>
  );
}

export { Text };
