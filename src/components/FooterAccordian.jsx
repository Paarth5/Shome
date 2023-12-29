import * as React from "react";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#26292e",
    },
  },
});
const handleClick = (e) => {
  e.preventDefault();
};
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div>
        <div className="my-2">
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>Services</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul className="ml-3">
                  <a href="/" onClick={handleClick}>
                    <li>Home monitoring</li>
                  </a>
                  <a href="/" onClick={handleClick} className="mt-2">
                    <li>Air Filters</li>
                  </a>
                  <a href="/" onClick={handleClick} className="mt-2">
                    <li>Professional installation</li>
                  </a>
                  <a href="/" onClick={handleClick} className="mt-2">
                    <li>Smart Buildings</li>
                  </a>
                  <a href="/" onClick={handleClick} className="mt-2">
                    <li>For contractors</li>
                  </a>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>My Account</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul className="ml-3">
                <a href="/login">
                  <li>My Account</li>
                </a>
                <a href="/" onClick={handleClick} className="mt-2">
                  <li>Contact</li>
                </a>
                <a href="/" onClick={handleClick} className="mt-2">
                  <li>Shopping cart</li>
                </a>
                <a href="/" onClick={handleClick} className="mt-2">
                  <li>Shop</li>
                </a>
                <a href="/" onClick={handleClick} className="mt-2">
                  <li>Services Login</li>
                </a>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <div className="my-2">
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>Contact Info</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className="ml-3">
                  <p>Address: Your address goes here.</p>
                  <p>
                    Phone/Fax:{" "}
                    <a href="/" onClick={handleClick} className="mt-2">
                      {" "}
                      0123456789
                    </a>
                  </p>
                  <p>
                    Email:{" "}
                    <a href="/" onClick={handleClick} className="mt-2">
                      demo@example.com
                    </a>
                  </p>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </ThemeProvider>
  );
}
