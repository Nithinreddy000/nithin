import React, { useState } from "react";
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';


// Material Dashboard 2 React components
import MDBox from "../../../components/MDBox";
import MDTypography from "../../../components/MDTypography";

function Stats_card_for_register({ color, title, count, percentage, icon, details }) {
    const [expanded, setExpanded] = useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
      <Card sx={{ cursor: "pointer" ,marginTop:'4vh'}}>
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
          <MDTypography component="p" variant="button" color="text" display="flex" style={{marginBottom:'0%'}}>
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
              marginLeft: "auto",
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
            <MDBox mt={2}>
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
  expanded: PropTypes.bool.isRequired,
};

export default Stats_card_for_register;
