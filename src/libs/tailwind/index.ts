import { create, plugin } from "twrnc";

const tw = create({
  theme: {
    extend: {
      colors: {
        primary: "#004225",
        secondary: "#F5F5DC",
        tertiary: "#FFB000",
        quaternary: "#FFCF9D",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({});
    }),
  ],
});

export { tw };
