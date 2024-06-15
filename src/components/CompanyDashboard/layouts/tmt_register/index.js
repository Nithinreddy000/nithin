import React, { useState, useRef ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import AddIcon from '@mui/icons-material/Add';
import "../dashboard/dashboardstyles.css"; // Import the custom CSS here
import MDBox from "../../components/MDBox";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import Footer from "../../examples/Footer";
import Stats_card_for_register from "../../examples/Cards/Stats_card_for_register";
import ReportsBarChart from "../../examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "../../examples/Charts/LineCharts/ReportsLineChart";
import reportsBarChartData from "../../layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "../../layouts/dashboard/data/reportsLineChartData";
import Projects from "../../layouts/dashboard/components/Projects";
import OrdersOverview from "../../layouts/dashboard/components/OrdersOverview";
import EntranceIcon from '@mui/icons-material/ExitToApp';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import Orders from "../orders";
import { Link as ScrollLink } from 'react-scroll';
import Button from '@mui/material/Button';
import RegisterIcon from '@mui/icons-material/AppRegistration';
import MDTypography from "../../components/MDTypography";
import zIndex from "@mui/material/styles/zIndex";


function TmtRegister() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedDetails, setExpandedDetails] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);
  const [expanded5, setExpanded5] = useState(false);
  const [expanded6, setExpanded6] = useState(false);
  const [expanded7, setExpanded7] = useState(false);
  const [expanded8, setExpanded8] = useState(false);
  const [expanded9, setExpanded9] = useState(false);
  const [expanded10, setExpanded10] = useState(false);
  const [expanded11, setExpanded11] = useState(false);
  const [expanded12, setExpanded12] = useState(false);
  const [expanded13, setExpanded13] = useState(false);
  const [expanded14, setExpanded14] = useState(false);
  const [expanded15, setExpanded15] = useState(false);
  const [expanded16, setExpanded16] = useState(false);
  const [nestedExpanded, setNestedExpanded] = useState(false);
  const [expandedStates, setExpandedStates] = useState({});
  
  const handleSearch = (query) => {
    // Debounce the state update with a delay of 300 milliseconds
    setTimeout(() => {
      setSearchQuery(query.toLowerCase());
    }, 300);
  };

  const filterDivisions = (content) => {
    return content.toLowerCase().includes(searchQuery);
  };

  const handleNestedExpandClick = () => {
    setNestedExpanded(!nestedExpanded);
  };

  const divisions = [
    {
      name: "TMT Bars",
      members: [
        { name: "SANJAY K.P", company: "T R ISPAT & POWER1", product: "TMT Bar 500 mts @ 40,500/EX1", orderDate: "24-04-2024 | OUT/APR/491", quantity: "390 mts | 15.25 lakhs1"  },
        { name: "JAIDEV S", company: "T R ISPAT & POWER", product: "TMT Bar 500 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs" },
        { name: "ARUN P.S", company: "T R ISPAT & POWER", product: "TMT Bar 500 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs"},
        { name: "KAPPOR'S", company: "T R ISPAT & POWER", product: "TMT Bar 500 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs"},
      ],
      expandedState: false,
    },
    {
      name: "Billets",
      members: [
        { name: "SANJAY K.P", company: "T R ISPAT & POWER1", product: "TMT Bar 500 mts @ 40,500/EX1", orderDate: "24-04-2024 | OUT/APR/491", quantity: "390 mts | 15.25 lakhs1"  },
        { name: "JAIDEV S", company: "T R ISPAT & POWER", product: "TMT Bar 500 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs" },
        { name: "ARUN P.S", company: "T R ISPAT & POWER", product: "TMT Bar 500 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs"},
        { name: "KAPPOR'S", company: "T R ISPAT & POWER", product: "TMT Bar 500 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs"},
      ],
      expandedState: false,
    },
    {
      name: "Structures",
      members: [
        { name: "SANJAY K.P", company: "T R ISPAT & POWER1", product: "TMT Bar 500 mts @ 40,500/EX1", orderDate: "24-04-2024 | OUT/APR/491", quantity: "390 mts | 15.25 lakhs1"  },
        { name: "JAIDEV S", company: "T R ISPAT & POWER", product: "TMT Bar 500 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs" },
        { name: "ARUN P.S", company: "T R ISPAT & POWER", product: "TMT Bar 500 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs"},
        { name: "KAPPOR'S", company: "T R ISPAT & POWER", product: "TMT Bar 500 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs"},
      ],
      expandedState: false,
    },
    {
      name: "Pipes",
      members: [
        { name: "SANJAY K.P", company: "T R ISPAT & POWER1", product: "TMT Bar 500 mts @ 40,500/EX1", orderDate: "24-04-2024 | OUT/APR/491", quantity: "390 mts | 15.25 lakhs1"  },
        { name: "JAIDEV S", company: "T R ISPAT & POWER", product: "TMT Bar 500 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs" },
        { name: "ARUN P.S", company: "T R ISPAT & POWER", product: "TMT Bar 500 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs"},
        { name: "KAPPOR'S", company: "T R ISPAT & POWER", product: "TMT Bar 500 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs"},
      ],
      expandedState: false,
    },
    
    
    
    // Other divisions...
  ];

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value || ""); // Ensure empty string if value is falsy
  };
  

  const filterDivisionsAndMembers = (member) => {
    // Normalize the search query
    const normalizedSearchQuery = searchQuery? searchQuery.toLowerCase().trim() : "";
  
    // Correctly access the properties of the member object
    return (
      member.toLowerCase().includes(normalizedSearchQuery)
    );
  };
  
  

  const filterDivisions2 = (division) => {
    // Normalize the search query
    const normalizedSearchQuery = searchQuery.toLowerCase().trim();
  
    // Check if any member detail includes the search query
    return division.members.some(member =>
      member.name.toLowerCase().includes(normalizedSearchQuery) ||
      member.company.toLowerCase().includes(normalizedSearchQuery) ||
      member.product.toLowerCase().includes(normalizedSearchQuery) ||
      member.orderDate.toLowerCase().includes(normalizedSearchQuery) ||
      member.quantity.toLowerCase().includes(normalizedSearchQuery)
    );
  };
  
  const handleMemberClick = (name) => {
    setExpandedStates(prevState => ({
     ...prevState,
      [name]:!prevState[name]
    }));
  };

return(
  <DashboardLayout>
  <DashboardNavbar onSearch={handleSearch} />
  <MDBox py={3}>
    <h3 style={{ paddingLeft: '10px', fontFamily: 'Poppins, sans-serif', paddingTop: '0%', marginTop: '0%' }}>Registration</h3>

    {divisions.filter(filterDivisions2).map((division, divisionIndex) => (
  <div key={divisionIndex} className="card-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '10vh', paddingBottom: '15vh' }}>
        <MDBox mb={1.5} style={{ cursor: "pointer" }}>
          <Stats_card_for_register
            icon="bar_chart"
            title={<h3 style={{ fontSize: '24px', fontFamily: 'Poppins, sans-serif' }}>{division.name}</h3>}
            percentage={{
              amount: (
                <div style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1px', fontSize: '12px' }}>
                    <div style={{ textAlign: 'left', flex: 1 }}>
                      <div>&nbsp;&nbsp;</div>
                      <div>10000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    </div>
                    <div style={{ textAlign: 'center', flex: 1 }}>
                      <div>&nbsp;&nbsp;</div>
                      <div>2000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    </div>
                    <div style={{ textAlign: 'center', flex: 1 }}>
                      <div>&nbsp;&nbsp;</div>
                      <div>8000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    </div>
                    <div style={{ textAlign: 'right', flex: 1 }}>
                      <div>&nbsp;&nbsp;</div>
                      <div>40500&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    </div>
                  </div>
                </div>
              ),
            }}
            details={
              <>
              {division.members.filter(member => 
              member.name.toLowerCase().includes(searchQuery) ||
              member.company.toLowerCase().includes(searchQuery) ||
              member.product.toLowerCase().includes(searchQuery) ||
              member.orderDate.toLowerCase().includes(searchQuery) ||
              member.quantity.toLowerCase().includes(searchQuery)
            ).map((member, memberIndex) => (
              <div key={memberIndex} className="member-card" style={{ maxHeight: '300px', overflowY: 'auto', boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1), 0px -4px 16px rgba(0, 0, 0, 0.1)', }}>
                    <div style={{ backgroundColor: 'white', padding: '10px', fontSize: '10px', boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1), 0px -4px 16px rgba(0, 0, 0, 0.1)', marginBottom: '10px', borderRadius: '15px' }}>
                      <MDTypography variant="body2" color="textSecondary">
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                          <b><a href="salesOrderDetails.Html" style={{ fontFamily: 'Poppins, sans-serif' }}>{member.name}</a></b>
                          <b><div className="badge bg-secondary mb-4">Status</div></b>
                        </div>
                        <div style={{ marginBottom: '10px', marginTop: '-17px' }}>
                          <b><p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>{member.company}</p></b>
                          <b><p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif', display: "flex" }}>{member.product}
                          <ScrollLink style={{ marginLeft: '100px' }}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      style={{
                        marginTop: "0px",
                        marginLeft: "10vh",
                        marginRight: "10px",
                        marginBottom: "5px",
                        padding: "0%",
                        minWidth: "30px",
                        height: "10px",
                        borderRadius: "50%",
                        fontSize: "18px",
                        color: "white",
                      }}
                      onClick={() => handleMemberClick(member.name)}
                    >
                      {expandedStates[member.name]? '-' : '+'}
                    </Button>
                  </ScrollLink></p></b>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <b><p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>{member.orderDate}</p></b>
                  <b><p style={{ marginBottom: '0', color: 'red', fontWeight: 'bold', fontSize: '12px' }}>{member.quantity}</p></b>
                </div>
                {expandedStates[member.name] && (
                  <div id="details">
                              <div className="accordion_child_body" style={{ borderTop: '1px solid rgb(204, 204, 204)', display: 'block' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '7px', paddingRight: '7px', paddingTop: '5px' }}>
                                  <p style={{ margin: '0', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}><b>Tmt Bars</b></p>
                                  <p style={{ margin: '0', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}><b>500 mts</b></p>
                                  <p style={{ margin: '0', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}><b>40,500/Ex</b></p>
                                </div>
                                <p style={{ display: 'inline-block', padding: '5px 7px', marginBottom: '-4px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>
                                  <b>Description</b>
                                </p>
                              </div>
                            </div>
                          )}
                          
                        </div>
                      </MDTypography>
                    </div>
                  </div>
                ))}
              </>
            }
          />
        </MDBox>
      </div>
    ))}
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
          </Grid>
        </MDBox>
      
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default TmtRegister;