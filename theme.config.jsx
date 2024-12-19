import logo from "./logo.svg";
import Image from "next/image";

export default {
  logo: (
    <span>
      <Image src={logo} alt="Logo" width={150} />
    </span>
  ),
  project: {
    link: "https://github.com/shuding/nextra",
  },
  color: {
    hue: 43,
    saturation: 53,
    lightness: {
      dark: 54,
      light: 50
    }
  },
  backgroundColor: {
    dark: "#141f40",
    light: "#141f40"
  }
  // ... other theme options
};
