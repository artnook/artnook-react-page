import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

// define the base styles of the component
const baseStyle = {
  maxW: "1280px",
  margin: "0 auto",
  px: "0",
};

// define custom sizes
const sizes = {
  // 428
  sm: defineStyle({
    px: "0",
  }),
  // 744
  md: defineStyle({
    px: "0",
  }),
  // 1024
  lg: defineStyle({
    px: "0",
  }),
  // 1280
  xl: defineStyle({
    maxW: "1230px",
    px: "0",
  }),
  // 1920
  xxl: defineStyle({
    maxW: "1900px",
    px: "0",
  }),
};

// define styles for the custom variants
const colorfulVariant = defineStyle((props) => {
  const { colorScheme: c } = props; // add color scheme as a prop
  return {
    _light: {
      bg: `${c}.200`,
      color: `${c}.800`,
    },
    _dark: {
      bg: `${c}.700`,
      color: `${c}.200`,
    },
  };
});

const boldVariant = defineStyle(() => {
  return {
    borderRadius: "none",
    border: "2px solid",
    fontFamily: "mono",
    _light: {
      bg: "white",
      color: "black",
    },
    _dark: {
      bg: "black",
      color: "white",
    },
  };
});

const onlym = defineStyle({
  maxW: "600px",
  margin: "0 auto",
  p: 0,
});
const onlymCol2 = defineStyle({
  maxW: "900px",
  margin: "0 auto",
  p: 0,
});

// define the custom variants
const variants = {
  colorful: colorfulVariant,
  bold: boldVariant,
  onlym: onlym,
  onlymCol2: onlymCol2,
};

// export the component theme
export const containerTheme = defineStyleConfig({
  baseStyle,
  sizes,
  variants,
});
