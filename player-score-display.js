const { refObject } = require("@tabletop-playground/api");

const getColor = (rgbCode) => {
    const A = "(R=1.000000,G=0.000000,B=0.000000,A=1.000000)";
    const B = "(R=0.141176,G=1.000000,B=0.141176,A=1.000000)";
    const C = "(R=1.000000,G=0.498039,B=0.000000,A=1.000000)";
    const D = "(R=0.000000,G=0.498039,B=1.000000,A=1.000000)";
    const E = "(R=0.713726,G=0.858824,B=1.000000,A=1.000000)";
    const F = "(R=1.000000,G=0.501961,B=0.000000,A=1.000000)";

  const stringRGB = rgbCode ? rgbCode.toString() : '';

  switch (stringRGB) {
    case A:
      return "Red";
    case B:
      return "Green";
    case C:
      return "Orange";
    case D:
      return "Blue";
    case E:
      return "White";
    case F:
      return "Brown";
    default:
      return 'Null';
  }
};

let rgb = refObject.getPrimaryColor();
let color = getColor(rgb);

switch (color) {
  case "Red":
    return refObject.setState(1);
  case "Green":
    return refObject.setState(2);
  case "Orange":
    return refObject.setState(3);
  case "Blue":
    return refObject.setState(4);
  case "White":
    return refObject.setState(5);
  case "Brown":
    return refObject.setState(6);
  default:
    return refObject.setState(0);
}
