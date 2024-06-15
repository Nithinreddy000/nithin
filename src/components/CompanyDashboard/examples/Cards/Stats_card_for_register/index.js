import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

// @mui/material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";

// Material Dashboard 2 React components
import MDBox from "../../../components/MDBox";
import MDTypography from "../../../components/MDTypography";

function Stats_card_for_register({ color, title, count, percentage, icon, details }) {
  const [expanded, setExpanded] = useState(false);
  const [initialDimensions, setInitialDimensions] = useState({ width: 0, height: 0 });
  const cardRef = useRef(null);

  useEffect(() => {
    // Measure initial dimensions of the card
    if (cardRef.current) {
      const { width, height } = cardRef.current.getBoundingClientRect();
      setInitialDimensions({ width, height });
    }
  }, []);

  const isMobile = useMediaQuery('(min-width: 400px) and (max-width: 700px)');
  const isiPhone678 = useMediaQuery('(min-width: 375px) and (max-width: 425px)');
  const isiPhone12 = useMediaQuery('(min-width: 390px) and (max-width: 428px)');
  const istablet = useMediaQuery('(min-width: 768px) and (max-width: 1024px)');
  const istabletpro = useMediaQuery('(min-width: 1024px) and (max-width: 100px)');
  
  

 
  const getButtonMarginLeft = () => {
    if (isMobile) {
      return "32vh"; // For other mobile devices
    }else if(isiPhone12){
      return "32vh"
    } 
    else if(istablet){
      return "29vh"
    }
    else {
      return "40vh"; // Default for larger devices
    }
  };


  const getLeftPosition = () => {
    if (isiPhone678) {
      return "50%"; // For iPhone 6/7/8
    } else if (isMobile) {
      return "50%"; // For other mobile devices
    }
    else if(istablet){
      return "50%";
    }
    else {
      return "59.3%"; // Default for larger devices
    }
  };


  const getTopPosition = () => {
    if (isiPhone678) {
      return "60%";
    } else {
      return "50%";
    }
  };

  const getWidth = () => {
    if (isiPhone678) {
      return "350px"; // Adjust width for iPhone 6/7/8
    }else if(istablet){
      return "50%"
    }
     else {
      return initialDimensions.width;
    }
  };
  const getCardStyles = () => {
    if (expanded) {
      return {
        position: "fixed",
        top: getTopPosition(),
      left: getLeftPosition(),// Adjusted left position for mobile vs larger devices
        transform: "translate(-50%, -50%)",
        width:getWidth(),
        height: "auto",
        margin: 0,
        zIndex: 10,
        transition: "all 0.3s ease",
      };
    } else {
      return {
        cursor: "pointer",
        marginTop: "10vh",
        marginBottom: {
          xs: "10px", // Mobile view
          md: "20px" // Default larger devices
        },
        transition: "all 0.3s ease",
        zIndex: 1,
      };
    }
  };

  useEffect(() => {
    if (expanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [expanded]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  

  return (
    <Card ref={cardRef} sx={getCardStyles()}>
      <MDBox display="flex" justifyContent="space-between" pt={1} px={2}>
        <MDBox
          variant="gradient"
          bgColor={color}
          color={color === "light" ? "dark" : "white"}
          coloredShadow={color}
          borderRadius="xl"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="4rem"
          height="4rem"
          mt={-3}
        >
          <Icon fontSize="medium" color="inherit">
            {icon}
          </Icon>
        </MDBox>
        <MDBox textAlign="right" lineHeight={1.25}>
          <MDTypography variant="button" fontWeight="light" color="text">
            {title}
          </MDTypography>
          <MDTypography variant="h4">{count}</MDTypography>
        </MDBox>
      </MDBox>
      <Divider />
      <MDBox pb={0} px={2} mt={0}>
        <MDTypography component="p" variant="button" color="text" display="flex" style={{ marginBottom: '0%' }}>
          <MDTypography
            component="span"
            variant="button"
            fontWeight="bold"
            color={percentage.color}
          >
            {percentage.amount}
          </MDTypography>
          &nbsp;{percentage.label}
        </MDTypography>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{
            marginTop: "-25px",
            marginLeft: getButtonMarginLeft(),
            marginRight: "10px",
            marginBottom: "10px",
            padding: "4px",
            minWidth: "36px",
            height: "36px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            lineHeight: "1",
            color: "white",
          }}
          onClick={handleExpandClick}
        >
          {expanded ? "-" : "+"}
        </Button>
        {expanded && (
          <MDBox
            mt={2}
            sx={{
              maxHeight: "295px", // Adjust the maximum height
              maxWidth: istabletpro ? "350px" : "400px",// Adjust the maximum width
              overflow: "auto",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <MDTypography variant="body2" color="textSecondary">
              {details}
            </MDTypography>
          </MDBox>
        )}
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of ComplexStatisticsCard
Stats_card_for_register.defaultProps = {
  color: "info",
  percentage: {
    color: "success",
    text: "",
    label: "",
  },
  details: "No additional details available.",
};

// Typechecking props for the ComplexStatisticsCard
Stats_card_for_register.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "white",
    ]),
    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  }),
  icon: PropTypes.node.isRequired,
  details: PropTypes.node, // Change this line to accept nodes (JSX)
};

export default Stats_card_for_register;
