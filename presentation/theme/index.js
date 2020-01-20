import createTheme from "../../createTheme";

const colors = {
  primary: "white",
  secondary: "#22211f", // almost black w/ blueish tint
  tertiary: "#1F2022", // complement of secondary
  quaternary: "#737373" // gray
};

const marginBottom = "0.5em";

const theme = createTheme(
  colors,
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  },
  {
    progress: {
      pacmanTop: {
        background: colors.quaternary
      },
      pacmanBottom: {
        background: colors.quaternary
      },
      point: {
        borderColor: colors.quaternary
      }
    },
    components: {
      heading: {
        h1: {
          fontSize: "5vw",
          marginBottom
        },
        h2: {
          fontSize: "4vw",
          marginBottom
        },
        h3: {
          fontSize: "3vw"
        },
        h4: {
          fontSize: "2vw"
        },
        h5: {
          fontSize: "1vw"
        },
        h6: {
          fontSize: "1vw"
        }
      },
      codePane: {
        fontSize: "1.25rem"
      }
    }
  }
);

export default theme;
