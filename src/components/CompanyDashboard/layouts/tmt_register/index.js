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

  return (
    <DashboardLayout>
      <DashboardNavbar onSearch={handleSearch} />
      <MDBox py={3} >
        <h3 style={{paddingLeft: '10px',fontFamily: 'Poppins, sans-serif',paddingTop:'0%' ,marginTop:'0%'}}>Registration</h3>
      
          {filterDivisions("Tmt Bars") && (
    <div className="card-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '10vh',paddingBottom:'15vh' }}>
        <MDBox mb={1.5} style={{ cursor: "pointer" }}>
          <Stats_card_for_register
            icon="bar_chart"
            title={<h3 style={{ fontSize: '24px', fontFamily: 'Poppins, sans-serif' }}>Tmt Bars</h3>}
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
            details={(
              <>
              <div style={{ maxHeight: '300px', overflowY: 'auto' ,boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1), 0px -4px 16px rgba(0, 0, 0, 0.1)',}}>
                {/* Additional details with different backgrounds and shadows */}
                <div style={{ backgroundColor: 'white', padding: '10px', fontSize: '10px',  boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1), 0px -4px 16px rgba(0, 0, 0, 0.1)', marginBottom: '10px' ,borderRadius:'15px'}}>
                  <MDTypography variant="body2" color="textSecondary">
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <b><a href="salesOrderDetails.Html" style={{ fontFamily: 'Poppins, sans-serif' }}>SANJAY K.P</a></b>
                     <b> <div className="badge bg-secondary mb-4">Status</div> </b> 
                    </div>
                    <div style={{ marginBottom: '10px', marginTop: '-17px' }}>
                    <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>T R ISPAT & POWER</p> </b> 
 <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' ,display:"flex"}}>TMT Bar 500 mts @ 40,500/EX   
                    <ScrollLink   style={{marginLeft:'100px'}}>
                      <Button
            variant="contained"
            color="primary"
            size="small"
            style={{
                marginTop: "0px",
                marginLeft: "10vh",
                marginRight: "10px",
                marginBottom: "5px",
                padding: "0%",             // Adjusted padding for smaller size
                minWidth: "30px",           // Adjusted minWidth to fit content
                height: "10px",             // Adjusted height to fit content
                borderRadius: "50%",        // Adjusted borderRadius for a rounded shape
                fontSize: "18px",           // Adjusted fontSize for a mini size          // Adjusted lineHeight to default
                color: "white",
              }}
                                          onClick={() => {
                                            setExpanded(!expanded);
                                          }}
                                        >
                                          {expanded ? '-' : '+'}
                                        </Button>
                                      </ScrollLink></p> </b>

                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>24-04-2024 | OUT/APR/49</p> </b> 
                      <b>  <p style={{ marginBottom: '0', color: 'red', fontWeight: 'bold', fontSize: '12px' }}>390 mts | 15.25 lakhs  
    
                        </p> </b> 
                      </div>
                      {expanded && (
        <div id="details">
          {/* Add your additional details here */}
          <div className="accordion_child_body" style={{ borderTop: '1px solid rgb(204, 204, 204)', display: 'block' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '7px', paddingRight: '7px' ,paddingTop:'5px'}}>
        <p style={{ margin: '0', fontSize:'12px' ,fontFamily: 'Poppins, sans-serif' }}><b>TMT Bars</b></p>
        <p style={{ margin: '0',fontSize:'12px',fontFamily: 'Poppins, sans-serif'  }}><b>500 mts</b></p>
        <p style={{ margin: '0' ,fontSize:'12px',fontFamily: 'Poppins, sans-serif' }}><b>40,500/Ex</b></p>
      </div>
      <p style={{ display: 'inline-block', padding: '5px 7px', marginBottom: '-4px' ,fontSize:'12px',fontFamily: 'Poppins, sans-serif' }}>
        <b>Description</b>
      </p>
    </div>
        </div>
      )}
                    </div>
                  </MDTypography>
                </div>

                <div style={{ backgroundColor: 'white', padding: '10px', fontSize: '10px', boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1), 0px -4px 16px rgba(0, 0, 0, 0.1)', marginBottom: '10px' ,borderRadius:'15px'}}>
                  <MDTypography variant="body2" color="textSecondary">
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <b><a href="salesOrderDetails.Html" style={{ fontFamily: 'Poppins, sans-serif' }}>JAIDEV S</a></b>
                      <b> <div className="badge bg-secondary mb-4">Status</div> </b> 
                    </div>
                    <div style={{ marginBottom: '10px', marginTop: '-17px' }}>
                    <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>T R ISPAT & POWER</p> </b> 
                    <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif',display:"flex" }}>TMT Bar 500 mts @ 40,500/EX   
                    <ScrollLink style={{marginLeft:'100px'}}>
                      <Button
            variant="contained"
            color="primary"
            size="small"
            style={{
                marginTop: "0px",
                marginLeft: "10vh",
                marginRight: "10px",
                marginBottom: "5px",
                padding: "0%",             // Adjusted padding for smaller size
                minWidth: "30px",           // Adjusted minWidth to fit content
                height: "10px",             // Adjusted height to fit content
                borderRadius: "50%",        // Adjusted borderRadius for a rounded shape
                fontSize: "18px",           // Adjusted fontSize for a mini size          // Adjusted lineHeight to default
                color: "white",
              }}
                                          onClick={() => {
                                            setExpanded2(!expanded2);
                                          }}
                                        >
                                          {expanded2 ? '-' : '+'}
                                        </Button>
                                      </ScrollLink></p> </b> 

                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>24-04-2024 | OUT/APR/49</p> </b> 
                      <b>  <p style={{ marginBottom: '0', color: 'red', fontWeight: 'bold', fontSize: '12px' }}>390 mts | 15.25 lakhs  
    
                        </p> </b> 
                      </div>
                      {expanded2 && (
        <div id="details">
          {/* Add your additional details here */}
          <div className="accordion_child_body" style={{ borderTop: '1px solid rgb(204, 204, 204)', display: 'block' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '7px', paddingRight: '7px' ,paddingTop:'5px'}}>
        <p style={{ margin: '0', fontSize:'12px' ,fontFamily: 'Poppins, sans-serif' }}><b>TMT Bars</b></p>
        <p style={{ margin: '0',fontSize:'12px',fontFamily: 'Poppins, sans-serif'  }}><b>500 mts</b></p>
        <p style={{ margin: '0' ,fontSize:'12px',fontFamily: 'Poppins, sans-serif' }}><b>40,500/Ex</b></p>
      </div>
      <p style={{ display: 'inline-block', padding: '5px 7px', marginBottom: '-4px' ,fontSize:'12px',fontFamily: 'Poppins, sans-serif' }}>
        <b>Description</b>
      </p>
    </div>
        </div>
      )}
                    </div>
                  </MDTypography>
                </div>

                <div style={{ backgroundColor: 'white', padding: '10px', fontSize: '10px', boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1), 0px -4px 16px rgba(0, 0, 0, 0.1)', marginBottom: '10px' ,borderRadius:'15px'}}>
                  <MDTypography variant="body2" color="textSecondary">
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <b><a href="salesOrderDetails.Html" style={{ fontFamily: 'Poppins, sans-serif' }}>ARUN P.S</a></b>
                      <b> <div className="badge bg-secondary mb-4">Status</div> </b> 
                    </div>
                    <div style={{ marginBottom: '10px', marginTop: '-17px' }}>
                    <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>T R ISPAT & POWER</p> </b> 
                    <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' ,display:"flex"}}>TMT Bar 500 mts @ 40,500/EX   
                    <ScrollLink style={{marginLeft:'100px'}}>
                      <Button
            variant="contained"
            color="primary"
            size="small"
            style={{
                marginTop: "0px",
                marginLeft: "10vh",
                marginRight: "10px",
                marginBottom: "5px",
                padding: "0%",             // Adjusted padding for smaller size
                minWidth: "30px",           // Adjusted minWidth to fit content
                height: "10px",             // Adjusted height to fit content
                borderRadius: "50%",        // Adjusted borderRadius for a rounded shape
                fontSize: "18px",           // Adjusted fontSize for a mini size          // Adjusted lineHeight to default
                color: "white",
              }}
                                          onClick={() => {
                                            setExpanded3(!expanded3);
                                          }}
                                        >
                                          {expanded3 ? '-' : '+'}
                                        </Button>
                                      </ScrollLink></p> </b> 

                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>24-04-2024 | OUT/APR/49</p> </b> 
                      <b>  <p style={{ marginBottom: '0', color: 'red', fontWeight: 'bold', fontSize: '12px' }}>390 mts | 15.25 lakhs  
    
                        </p> </b> 
                      </div>
                      {expanded3 && (
        <div id="details">
          {/* Add your additional details here */}
          <div className="accordion_child_body" style={{ borderTop: '1px solid rgb(204, 204, 204)', display: 'block' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '7px', paddingRight: '7px' ,paddingTop:'5px'}}>
        <p style={{ margin: '0', fontSize:'12px' ,fontFamily: 'Poppins, sans-serif' }}><b>TMT Bars</b></p>
        <p style={{ margin: '0',fontSize:'12px',fontFamily: 'Poppins, sans-serif'  }}><b>500 mts</b></p>
        <p style={{ margin: '0' ,fontSize:'12px',fontFamily: 'Poppins, sans-serif' }}><b>40,500/Ex</b></p>
      </div>
      <p style={{ display: 'inline-block', padding: '5px 7px', marginBottom: '-4px' ,fontSize:'12px',fontFamily: 'Poppins, sans-serif' }}>
        <b>Description</b>
      </p>
    </div>
        </div>
      )}
                    </div>
                  </MDTypography>
                </div>

                <div style={{ backgroundColor: 'white', padding: '10px', fontSize: '10px', boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1), 0px -4px 16px rgba(0, 0, 0, 0.1)', marginBottom: '10px',borderRadius:'15px' }}>
                  <MDTypography variant="body2" color="textSecondary">
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <b><a href="salesOrderDetails.Html" style={{ fontFamily: 'Poppins, sans-serif' }}>KAPPOR'S</a></b>
                      <b> <div className="badge bg-secondary mb-4">Status</div> </b> 
                    </div>
                    <div style={{ marginBottom: '10px', marginTop: '-17px' }}>
                    <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>T R ISPAT & POWER</p> </b> 
                    <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' ,display:"flex"}}>TMT Bar 500 mts @ 40,500/EX   
                    <ScrollLink style={{marginLeft:'100px'}}>
                      <Button
            variant="contained"
            color="primary"
            size="small"
            style={{
                marginTop: "0px",
                marginLeft: "10vh",
                marginRight: "10px",
                marginBottom: "5px",
                padding: "0%",             // Adjusted padding for smaller size
                minWidth: "30px",           // Adjusted minWidth to fit content
                height: "10px",             // Adjusted height to fit content
                borderRadius: "50%",        // Adjusted borderRadius for a rounded shape
                fontSize: "18px",           // Adjusted fontSize for a mini size          // Adjusted lineHeight to default
                color: "white",
              }}
                                          onClick={() => {
                                            setExpanded4(!expanded4);
                                            handleNestedExpandClick();
                                          }}
                                        >
                                          {expanded4 ? '-' : '+'}
                                        </Button>
                                      </ScrollLink></p> </b> 

                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>24-04-2024 | OUT/APR/49</p> </b> 
                      <b>  <p style={{ marginBottom: '0', color: 'red', fontWeight: 'bold', fontSize: '12px' }}>390 mts | 15.25 lakhs  
    
                        </p> </b> 
                      </div>
                      {expanded4 && (
        <div id="details">
          {/* Add your additional details here */}
          <div className="accordion_child_body" style={{ borderTop: '1px solid rgb(204, 204, 204)', display: 'block' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '7px', paddingRight: '7px' ,paddingTop:'5px'}}>
        <p style={{ margin: '0', fontSize:'12px' ,fontFamily: 'Poppins, sans-serif' }}><b>TMT Bars</b></p>
        <p style={{ margin: '0',fontSize:'12px',fontFamily: 'Poppins, sans-serif'  }}><b>500 mts</b></p>
        <p style={{ margin: '0' ,fontSize:'12px',fontFamily: 'Poppins, sans-serif' }}><b>40,500/Ex</b></p>
      </div>
      <p style={{ display: 'inline-block', padding: '5px 7px', marginBottom: '-4px' ,fontSize:'12px',fontFamily: 'Poppins, sans-serif' }}>
        <b>Description</b>
      </p>
    </div>
        </div>
      )}
                    </div>
                  </MDTypography>
                </div>
                </div>

              </>
            )}
          />
        </MDBox>
    </div>
)}


{filterDivisions("Billets") && (
    <div className="card-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '10vh' ,paddingBottom:'15vh', }}>
        <MDBox mb={1.5} style={{ cursor: "pointer"}}>
          <Stats_card_for_register
            icon="layers"
            title={<h3 style={{ fontSize: '24px', fontFamily: 'Poppins, sans-serif' }}>Billets</h3>}
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
            details={(
                <>
                <div style={{ maxHeight: '300px', overflowY: 'auto' ,boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1), 0px -4px 16px rgba(0, 0, 0, 0.1)',}}>
                  {/* Additional details with different backgrounds and shadows */}
                  <div style={{ backgroundColor: 'white', padding: '10px', fontSize: '10px',  boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1), 0px -4px 16px rgba(0, 0, 0, 0.1)', marginBottom: '10px' ,borderRadius:'15px'}}>
                    <MDTypography variant="body2" color="textSecondary">
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <b><a href="salesOrderDetails.Html" style={{ fontFamily: 'Poppins, sans-serif' }}>SANJAY K.P</a></b>
                       <b> <div className="badge bg-secondary mb-4">Status</div> </b> 
                      </div>
                      <div style={{ marginBottom: '10px', marginTop: '-17px' }}>
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>T R ISPAT & POWER</p> </b> 
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' ,display:"flex"}}>TMT Bar 500 mts @ 40,500/EX   
                      <ScrollLink  style={{marginLeft:'100px'}}>
                        <Button
              variant="contained"
              color="primary"
              size="small"
              style={{
                  marginTop: "0px",
                  marginLeft: "10vh",
                  marginRight: "10px",
                  marginBottom: "5px",
                  padding: "0%",             // Adjusted padding for smaller size
                  minWidth: "30px",           // Adjusted minWidth to fit content
                  height: "10px",             // Adjusted height to fit content
                  borderRadius: "50%",        // Adjusted borderRadius for a rounded shape
                  fontSize: "18px",           // Adjusted fontSize for a mini size          // Adjusted lineHeight to default
                  color: "white",
                }}
                                            onClick={() => {
                                              setExpanded5(!expanded5);
                                              handleNestedExpandClick();
                                            }}
                                          >
                                            {expanded5 ? '-' : '+'}
                                          </Button>
                                        </ScrollLink></p> </b> 
  
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>24-04-2024 | OUT/APR/49</p> </b> 
                        <b>  <p style={{ marginBottom: '0', color: 'red', fontWeight: 'bold', fontSize: '12px' }}>390 mts | 15.25 lakhs  
      
                          </p> </b> 
                        </div>
                        {expanded5 && (
          <div id="details">
            {/* Add your additional details here */}
            <div className="accordion_child_body" style={{ borderTop: '1px solid rgb(204, 204, 204)', display: 'block' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '7px', paddingRight: '7px' ,paddingTop:'5px'}}>
          <p style={{ margin: '0', fontSize:'12px' ,fontFamily: 'Poppins, sans-serif' }}><b>TMT Bars</b></p>
          <p style={{ margin: '0',fontSize:'12px',fontFamily: 'Poppins, sans-serif'  }}><b>500 mts</b></p>
          <p style={{ margin: '0' ,fontSize:'12px',fontFamily: 'Poppins, sans-serif' }}><b>40,500/Ex</b></p>
        </div>
        <p style={{ display: 'inline-block', padding: '5px 7px', marginBottom: '-4px' ,fontSize:'12px',fontFamily: 'Poppins, sans-serif' }}>
          <b>Description</b>
        </p>
      </div>
          </div>
        )}
                      </div>
                    </MDTypography>
                  </div>
  
                  <div style={{ backgroundColor: 'white', padding: '10px', fontSize: '10px', boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1), 0px -4px 16px rgba(0, 0, 0, 0.1)', marginBottom: '10px' ,borderRadius:'15px'}}>
                    <MDTypography variant="body2" color="textSecondary">
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <b><a href="salesOrderDetails.Html" style={{ fontFamily: 'Poppins, sans-serif' }}>JAIDEV S</a></b>
                        <b> <div className="badge bg-secondary mb-4">Status</div> </b> 
                      </div>
                      <div style={{ marginBottom: '10px', marginTop: '-17px' }}>
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>T R ISPAT & POWER</p> </b> 
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' ,display:"flex"}}>TMT Bar 500 mts @ 40,500/EX   
                      <ScrollLink  style={{marginLeft:'100px'}}>
                        <Button
              variant="contained"
              color="primary"
              size="small"
              style={{
                  marginTop: "0px",
                  marginLeft: "10vh",
                  marginRight: "10px",
                  marginBottom: "5px",
                  padding: "0%",             // Adjusted padding for smaller size
                  minWidth: "30px",           // Adjusted minWidth to fit content
                  height: "10px",             // Adjusted height to fit content
                  borderRadius: "50%",        // Adjusted borderRadius for a rounded shape
                  fontSize: "18px",           // Adjusted fontSize for a mini size          // Adjusted lineHeight to default
                  color: "white",
                }}
                                            onClick={() => {
                                              setExpanded6(!expanded6);
                                              handleNestedExpandClick();
                                            }}
                                          >
                                            {expanded6 ? '-' : '+'}
                                          </Button>
                                        </ScrollLink></p> </b> 
  
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>24-04-2024 | OUT/APR/49</p> </b> 
                        <b>  <p style={{ marginBottom: '0', color: 'red', fontWeight: 'bold', fontSize: '12px' }}>390 mts | 15.25 lakhs  
      
                          </p> </b> 
                        </div>
                        {expanded6 && (
          <div id="details">
            {/* Add your additional details here */}
            <div className="accordion_child_body" style={{ borderTop: '1px solid rgb(204, 204, 204)', display: 'block' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '7px', paddingRight: '7px' ,paddingTop:'5px'}}>
          <p style={{ margin: '0', fontSize:'12px' ,fontFamily: 'Poppins, sans-serif' }}><b>TMT Bars</b></p>
          <p style={{ margin: '0',fontSize:'12px',fontFamily: 'Poppins, sans-serif'  }}><b>500 mts</b></p>
          <p style={{ margin: '0' ,fontSize:'12px',fontFamily: 'Poppins, sans-serif' }}><b>40,500/Ex</b></p>
        </div>
        <p style={{ display: 'inline-block', padding: '5px 7px', marginBottom: '-4px' ,fontSize:'12px',fontFamily: 'Poppins, sans-serif' }}>
          <b>Description</b>
        </p>
      </div>
          </div>
        )}
                      </div>
                    </MDTypography>
                  </div>
  
                  <div style={{ backgroundColor: 'white', padding: '10px', fontSize: '10px', boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1), 0px -4px 16px rgba(0, 0, 0, 0.1)', marginBottom: '10px' ,borderRadius:'15px'}}>
                    <MDTypography variant="body2" color="textSecondary">
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <b><a href="salesOrderDetails.Html" style={{ fontFamily: 'Poppins, sans-serif' }}>ARUN P.S</a></b>
                        <b> <div className="badge bg-secondary mb-4">Status</div> </b> 
                      </div>
                      <div style={{ marginBottom: '10px', marginTop: '-17px' }}>
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>T R ISPAT & POWER</p> </b> 
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' ,display:"flex"}}>TMT Bar 500 mts @ 40,500/EX   
                      <ScrollLink  style={{marginLeft:'100px'}}>
                        <Button
              variant="contained"
              color="primary"
              size="small"
              style={{
                  marginTop: "0px",
                  marginLeft: "10vh",
                  marginRight: "10px",
                  marginBottom: "5px",
                  padding: "0%",             // Adjusted padding for smaller size
                  minWidth: "30px",           // Adjusted minWidth to fit content
                  height: "10px",             // Adjusted height to fit content
                  borderRadius: "50%",        // Adjusted borderRadius for a rounded shape
                  fontSize: "18px",           // Adjusted fontSize for a mini size          // Adjusted lineHeight to default
                  color: "white",
                }}
                                            onClick={() => {
                                              setExpanded7(!expanded7);
                                              handleNestedExpandClick();
                                            }}
                                          >
                                            {expanded7 ? '-' : '+'}
                                          </Button>
                                        </ScrollLink></p> </b> 
  
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>24-04-2024 | OUT/APR/49</p> </b> 
                        <b>  <p style={{ marginBottom: '0', color: 'red', fontWeight: 'bold', fontSize: '12px' }}>390 mts | 15.25 lakhs  
      
                          </p> </b> 
                        </div>
                        {expanded7 && (
          <div id="details">
            {/* Add your additional details here */}
            <div className="accordion_child_body" style={{ borderTop: '1px solid rgb(204, 204, 204)', display: 'block' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '7px', paddingRight: '7px' ,paddingTop:'5px'}}>
          <p style={{ margin: '0', fontSize:'12px' ,fontFamily: 'Poppins, sans-serif' }}><b>TMT Bars</b></p>
          <p style={{ margin: '0',fontSize:'12px',fontFamily: 'Poppins, sans-serif'  }}><b>500 mts</b></p>
          <p style={{ margin: '0' ,fontSize:'12px',fontFamily: 'Poppins, sans-serif' }}><b>40,500/Ex</b></p>
        </div>
        <p style={{ display: 'inline-block', padding: '5px 7px', marginBottom: '-4px' ,fontSize:'12px',fontFamily: 'Poppins, sans-serif' }}>
          <b>Description</b>
        </p>
      </div>
          </div>
        )}
                      </div>
                    </MDTypography>
                  </div>
  
                  <div style={{ backgroundColor: 'white', padding: '10px', fontSize: '10px', boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1), 0px -4px 16px rgba(0, 0, 0, 0.1)', marginBottom: '10px',borderRadius:'15px' }}>
                    <MDTypography variant="body2" color="textSecondary">
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <b><a href="salesOrderDetails.Html" style={{ fontFamily: 'Poppins, sans-serif' }}>KAPPOR'S</a></b>
                        <b> <div className="badge bg-secondary mb-4">Status</div> </b> 
                      </div>
                      <div style={{ marginBottom: '10px', marginTop: '-17px' }}>
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>T R ISPAT & POWER</p> </b> 
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif',display:"flex" }}>TMT Bar 500 mts @ 40,500/EX   
                      <ScrollLink  style={{marginLeft:'100px'}}>
                        <Button
              variant="contained"
              color="primary"
              size="small"
              style={{
                  marginTop: "0px",
                  marginLeft: "10vh",
                  marginRight: "10px",
                  marginBottom: "5px",
                  padding: "0%",             // Adjusted padding for smaller size
                  minWidth: "30px",           // Adjusted minWidth to fit content
                  height: "10px",             // Adjusted height to fit content
                  borderRadius: "50%",        // Adjusted borderRadius for a rounded shape
                  fontSize: "18px",           // Adjusted fontSize for a mini size          // Adjusted lineHeight to default
                  color: "white",
                }}
                                            onClick={() => {
                                              setExpanded8(!expanded8);
                                              handleNestedExpandClick();
                                            }}
                                          >
                                            {expanded8 ? '-' : '+'}
                                          </Button>
                                        </ScrollLink></p> </b> 
  
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>24-04-2024 | OUT/APR/49</p> </b> 
                        <b>  <p style={{ marginBottom: '0', color: 'red', fontWeight: 'bold', fontSize: '12px' }}>390 mts | 15.25 lakhs  
      
                          </p> </b> 
                        </div>
                        {expanded8 && (
          <div id="details">
            {/* Add your additional details here */}
            <div className="accordion_child_body" style={{ borderTop: '1px solid rgb(204, 204, 204)', display: 'block' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '7px', paddingRight: '7px' ,paddingTop:'5px'}}>
          <p style={{ margin: '0', fontSize:'12px' ,fontFamily: 'Poppins, sans-serif' }}><b>TMT Bars</b></p>
          <p style={{ margin: '0',fontSize:'12px',fontFamily: 'Poppins, sans-serif'  }}><b>500 mts</b></p>
          <p style={{ margin: '0' ,fontSize:'12px',fontFamily: 'Poppins, sans-serif' }}><b>40,500/Ex</b></p>
        </div>
        <p style={{ display: 'inline-block', padding: '5px 7px', marginBottom: '-4px' ,fontSize:'12px',fontFamily: 'Poppins, sans-serif' }}>
          <b>Description</b>
        </p>
      </div>
          </div>
        )}
                      </div>
                    </MDTypography>
                  </div>
                  </div>
  
                </>
              )}
            />
          </MDBox>
      </div>
  )}
             {filterDivisions("Structures") && (
    <div className="card-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '10vh' ,paddingBottom:'15vh'}}>
        <MDBox mb={1.5} style={{ cursor: "pointer" }}>
          <Stats_card_for_register
            icon="building"
            title={<h3 style={{ fontSize: '24px', fontFamily: 'Poppins, sans-serif' }}>Structures</h3>}
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
            details={(
                <>
                <div style={{ maxHeight: '300px', overflowY: 'auto' ,boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1), 0px -4px 16px rgba(0, 0, 0, 0.1)',}}>
                  {/* Additional details with different backgrounds and shadows */}
                  <div style={{ backgroundColor: 'white', padding: '10px', fontSize: '10px',  boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1), 0px -4px 16px rgba(0, 0, 0, 0.1)', marginBottom: '10px' ,borderRadius:'15px'}}>
                    <MDTypography variant="body2" color="textSecondary">
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <b><a href="salesOrderDetails.Html" style={{ fontFamily: 'Poppins, sans-serif' }}>SANJAY K.P</a></b>
                       <b> <div className="badge bg-secondary mb-4">Status</div> </b> 
                      </div>
                      <div style={{ marginBottom: '10px', marginTop: '-17px' }}>
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>T R ISPAT & POWER</p> </b> 
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' ,display:"flex"}}>TMT Bar 500 mts @ 40,500/EX   
                      <ScrollLink  style={{marginLeft:'100px'}}>
                        <Button
              variant="contained"
              color="primary"
              size="small"
              style={{
                  marginTop: "0px",
                  marginLeft: "10vh",
                  marginRight: "10px",
                  marginBottom: "5px",
                  padding: "0%",             // Adjusted padding for smaller size
                  minWidth: "30px",           // Adjusted minWidth to fit content
                  height: "10px",             // Adjusted height to fit content
                  borderRadius: "50%",        // Adjusted borderRadius for a rounded shape
                  fontSize: "18px",           // Adjusted fontSize for a mini size          // Adjusted lineHeight to default
                  color: "white",
                }}
                                            onClick={() => {
                                              setExpanded9(!expanded9);
                                              handleNestedExpandClick();
                                            }}
                                          >
                                            {expanded9 ? '-' : '+'}
                                          </Button>
                                        </ScrollLink></p> </b> 
  
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>24-04-2024 | OUT/APR/49</p> </b> 
                        <b>  <p style={{ marginBottom: '0', color: 'red', fontWeight: 'bold', fontSize: '12px' }}>390 mts | 15.25 lakhs  
      
                          </p> </b> 
                        </div>
                        {expanded9 && (
          <div id="details">
            {/* Add your additional details here */}
            <div className="accordion_child_body" style={{ borderTop: '1px solid rgb(204, 204, 204)', display: 'block' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '7px', paddingRight: '7px' ,paddingTop:'5px'}}>
          <p style={{ margin: '0', fontSize:'12px' ,fontFamily: 'Poppins, sans-serif' }}><b>TMT Bars</b></p>
          <p style={{ margin: '0',fontSize:'12px',fontFamily: 'Poppins, sans-serif'  }}><b>500 mts</b></p>
          <p style={{ margin: '0' ,fontSize:'12px',fontFamily: 'Poppins, sans-serif' }}><b>40,500/Ex</b></p>
        </div>
        <p style={{ display: 'inline-block', padding: '5px 7px', marginBottom: '-4px' ,fontSize:'12px',fontFamily: 'Poppins, sans-serif' }}>
          <b>Description</b>
        </p>
      </div>
          </div>
        )}
                      </div>
                    </MDTypography>
                  </div>
  
                  <div style={{ backgroundColor: 'white', padding: '10px', fontSize: '10px', boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1), 0px -4px 16px rgba(0, 0, 0, 0.1)', marginBottom: '10px' ,borderRadius:'15px'}}>
                    <MDTypography variant="body2" color="textSecondary">
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <b><a href="salesOrderDetails.Html" style={{ fontFamily: 'Poppins, sans-serif' }}>JAIDEV S</a></b>
                        <b> <div className="badge bg-secondary mb-4">Status</div> </b> 
                      </div>
                      <div style={{ marginBottom: '10px', marginTop: '-17px' }}>
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>T R ISPAT & POWER</p> </b> 
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' ,display:"flex"}}>TMT Bar 500 mts @ 40,500/EX   
                      <ScrollLink style={{marginLeft:'100px'}}>
                        <Button
              variant="contained"
              color="primary"
              size="small"
              style={{
                  marginTop: "0px",
                  marginLeft: "10vh",
                  marginRight: "10px",
                  marginBottom: "5px",
                  padding: "0%",             // Adjusted padding for smaller size
                  minWidth: "30px",           // Adjusted minWidth to fit content
                  height: "10px",             // Adjusted height to fit content
                  borderRadius: "50%",        // Adjusted borderRadius for a rounded shape
                  fontSize: "18px",           // Adjusted fontSize for a mini size          // Adjusted lineHeight to default
                  color: "white",
                }}
                                            onClick={() => {
                                              setExpanded10(!expanded10);
                                              handleNestedExpandClick();
                                            }}
                                          >
                                            {expanded10 ? '-' : '+'}
                                          </Button>
                                        </ScrollLink></p> </b> 
  
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>24-04-2024 | OUT/APR/49</p> </b> 
                        <b>  <p style={{ marginBottom: '0', color: 'red', fontWeight: 'bold', fontSize: '12px' }}>390 mts | 15.25 lakhs  
      
                          </p> </b> 
                        </div>
                        {expanded10 && (
          <div id="details">
            {/* Add your additional details here */}
            <div className="accordion_child_body" style={{ borderTop: '1px solid rgb(204, 204, 204)', display: 'block' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '7px', paddingRight: '7px' ,paddingTop:'5px'}}>
          <p style={{ margin: '0', fontSize:'12px' ,fontFamily: 'Poppins, sans-serif' }}><b>TMT Bars</b></p>
          <p style={{ margin: '0',fontSize:'12px',fontFamily: 'Poppins, sans-serif'  }}><b>500 mts</b></p>
          <p style={{ margin: '0' ,fontSize:'12px',fontFamily: 'Poppins, sans-serif' }}><b>40,500/Ex</b></p>
        </div>
        <p style={{ display: 'inline-block', padding: '5px 7px', marginBottom: '-4px' ,fontSize:'12px',fontFamily: 'Poppins, sans-serif' }}>
          <b>Description</b>
        </p>
      </div>
          </div>
        )}
                      </div>
                    </MDTypography>
                  </div>
  
                  <div style={{ backgroundColor: 'white', padding: '10px', fontSize: '10px', boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1), 0px -4px 16px rgba(0, 0, 0, 0.1)', marginBottom: '10px' ,borderRadius:'15px'}}>
                    <MDTypography variant="body2" color="textSecondary">
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <b><a href="salesOrderDetails.Html" style={{ fontFamily: 'Poppins, sans-serif' }}>ARUN P.S</a></b>
                        <b> <div className="badge bg-secondary mb-4">Status</div> </b> 
                      </div>
                      <div style={{ marginBottom: '10px', marginTop: '-17px' }}>
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>T R ISPAT & POWER</p> </b> 
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif',display:"flex" }}>TMT Bar 500 mts @ 40,500/EX   
                      <ScrollLink  style={{marginLeft:'100px'}}>
                        <Button
              variant="contained"
              color="primary"
              size="small"
              style={{
                  marginTop: "0px",
                  marginLeft: "10vh",
                  marginRight: "10px",
                  marginBottom: "5px",
                  padding: "0%",             // Adjusted padding for smaller size
                  minWidth: "30px",           // Adjusted minWidth to fit content
                  height: "10px",             // Adjusted height to fit content
                  borderRadius: "50%",        // Adjusted borderRadius for a rounded shape
                  fontSize: "18px",           // Adjusted fontSize for a mini size          // Adjusted lineHeight to default
                  color: "white",
                }}
                                            onClick={() => {
                                              setExpanded11(!expanded11);
                                              handleNestedExpandClick();
                                            }}
                                          >
                                            {expanded11 ? '-' : '+'}
                                          </Button>
                                        </ScrollLink></p> </b> 
  
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>24-04-2024 | OUT/APR/49</p> </b> 
                        <b>  <p style={{ marginBottom: '0', color: 'red', fontWeight: 'bold', fontSize: '12px' }}>390 mts | 15.25 lakhs  
      
                          </p> </b> 
                        </div>
                        {expanded11 && (
          <div id="details">
            {/* Add your additional details here */}
            <div className="accordion_child_body" style={{ borderTop: '1px solid rgb(204, 204, 204)', display: 'block' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '7px', paddingRight: '7px' ,paddingTop:'5px'}}>
          <p style={{ margin: '0', fontSize:'12px' ,fontFamily: 'Poppins, sans-serif' }}><b>TMT Bars</b></p>
          <p style={{ margin: '0',fontSize:'12px',fontFamily: 'Poppins, sans-serif'  }}><b>500 mts</b></p>
          <p style={{ margin: '0' ,fontSize:'12px',fontFamily: 'Poppins, sans-serif' }}><b>40,500/Ex</b></p>
        </div>
        <p style={{ display: 'inline-block', padding: '5px 7px', marginBottom: '-4px' ,fontSize:'12px',fontFamily: 'Poppins, sans-serif' }}>
          <b>Description</b>
        </p>
      </div>
          </div>
        )}
                      </div>
                    </MDTypography>
                  </div>
  
                  <div style={{ backgroundColor: 'white', padding: '10px', fontSize: '10px', boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1), 0px -4px 16px rgba(0, 0, 0, 0.1)', marginBottom: '10px',borderRadius:'15px' }}>
                    <MDTypography variant="body2" color="textSecondary">
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <b><a href="salesOrderDetails.Html" style={{ fontFamily: 'Poppins, sans-serif' }}>KAPPOR'S</a></b>
                        <b> <div className="badge bg-secondary mb-4">Status</div> </b> 
                      </div>
                      <div style={{ marginBottom: '10px', marginTop: '-17px' }}>
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>T R ISPAT & POWER</p> </b> 
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' ,display:"flex"}}>TMT Bar 500 mts @ 40,500/EX   
                      <ScrollLink  style={{marginLeft:'100px'}}>
                        <Button
              variant="contained"
              color="primary"
              size="small"
              style={{
                  marginTop: "0px",
                  marginLeft: "10vh",
                  marginRight: "10px",
                  marginBottom: "5px",
                  padding: "0%",             // Adjusted padding for smaller size
                  minWidth: "30px",           // Adjusted minWidth to fit content
                  height: "10px",             // Adjusted height to fit content
                  borderRadius: "50%",        // Adjusted borderRadius for a rounded shape
                  fontSize: "18px",           // Adjusted fontSize for a mini size          // Adjusted lineHeight to default
                  color: "white",
                }}
                                            onClick={() => {
                                              setExpanded12(!expanded12);
                                              handleNestedExpandClick();
                                            }}
                                          >
                                            {expanded12 ? '-' : '+'}
                                          </Button>
                                        </ScrollLink></p> </b> 
  
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>24-04-2024 | OUT/APR/49</p> </b> 
                        <b>  <p style={{ marginBottom: '0', color: 'red', fontWeight: 'bold', fontSize: '12px' }}>390 mts | 15.25 lakhs  
      
                          </p> </b> 
                        </div>
                        {expanded12 && (
          <div id="details">
            {/* Add your additional details here */}
            <div className="accordion_child_body" style={{ borderTop: '1px solid rgb(204, 204, 204)', display: 'block' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '7px', paddingRight: '7px' ,paddingTop:'5px'}}>
          <p style={{ margin: '0', fontSize:'12px' ,fontFamily: 'Poppins, sans-serif' }}><b>TMT Bars</b></p>
          <p style={{ margin: '0',fontSize:'12px',fontFamily: 'Poppins, sans-serif'  }}><b>500 mts</b></p>
          <p style={{ margin: '0' ,fontSize:'12px',fontFamily: 'Poppins, sans-serif' }}><b>40,500/Ex</b></p>
        </div>
        <p style={{ display: 'inline-block', padding: '5px 7px', marginBottom: '-4px' ,fontSize:'12px',fontFamily: 'Poppins, sans-serif' }}>
          <b>Description</b>
        </p>
      </div>
          </div>
        )}
                      </div>
                    </MDTypography>
                  </div>
                  </div>
  
                </>
              )}
            />
          </MDBox>
      </div>
  )}
  
            {filterDivisions("Pipes") && (
    <div className="card-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '10vh',paddingBottom:'15vh' }}>

        <MDBox mb={1.5} style={{ cursor: "pointer" }}>
          <Stats_card_for_register
            icon="plumbing"
            title={<h3 style={{ fontSize: '24px', fontFamily: 'Poppins, sans-serif' }}>Pipes</h3>}
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
            details={(
                <>
                <div style={{ maxHeight: '300px', overflowY: 'auto' ,boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1), 0px -4px 16px rgba(0, 0, 0, 0.1)',}}>
                  {/* Additional details with different backgrounds and shadows */}
                  <div style={{ backgroundColor: 'white', padding: '10px', fontSize: '10px',  boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1), 0px -4px 16px rgba(0, 0, 0, 0.1)', marginBottom: '10px' ,borderRadius:'15px'}}>
                    <MDTypography variant="body2" color="textSecondary">
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <b><a href="salesOrderDetails.Html" style={{ fontFamily: 'Poppins, sans-serif' }}>SANJAY K.P</a></b>
                       <b> <div className="badge bg-secondary mb-4">Status</div> </b> 
                      </div>
                      <div style={{ marginBottom: '10px', marginTop: '-17px' }}>
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>T R ISPAT & POWER</p> </b> 
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' ,display:"flex"}}>TMT Bar 500 mts @ 40,500/EX   
                      <ScrollLink  style={{marginLeft:'100px'}}>
                        <Button
              variant="contained"
              color="primary"
              size="small"
              style={{
                  marginTop: "0px",
                  marginLeft: "10vh",
                  marginRight: "10px",
                  marginBottom: "5px",
                  padding: "0%",             // Adjusted padding for smaller size
                  minWidth: "30px",           // Adjusted minWidth to fit content
                  height: "10px",             // Adjusted height to fit content
                  borderRadius: "50%",        // Adjusted borderRadius for a rounded shape
                  fontSize: "18px",           // Adjusted fontSize for a mini size          // Adjusted lineHeight to default
                  color: "white",
                }}
                                            onClick={() => {
                                              setExpanded13(!expanded13);
                                              handleNestedExpandClick();
                                            }}
                                          >
                                            {expanded13 ? '-' : '+'}
                                          </Button>
                                        </ScrollLink></p> </b> 
  
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>24-04-2024 | OUT/APR/49</p> </b> 
                        <b>  <p style={{ marginBottom: '0', color: 'red', fontWeight: 'bold', fontSize: '12px' }}>390 mts | 15.25 lakhs  
      
                          </p> </b> 
                        </div>
                        {expanded13 && (
          <div id="details">
            {/* Add your additional details here */}
            <div className="accordion_child_body" style={{ borderTop: '1px solid rgb(204, 204, 204)', display: 'block' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '7px', paddingRight: '7px' ,paddingTop:'5px'}}>
          <p style={{ margin: '0', fontSize:'12px' ,fontFamily: 'Poppins, sans-serif' }}><b>TMT Bars</b></p>
          <p style={{ margin: '0',fontSize:'12px',fontFamily: 'Poppins, sans-serif'  }}><b>500 mts</b></p>
          <p style={{ margin: '0' ,fontSize:'12px',fontFamily: 'Poppins, sans-serif' }}><b>40,500/Ex</b></p>
        </div>
        <p style={{ display: 'inline-block', padding: '5px 7px', marginBottom: '-4px' ,fontSize:'12px',fontFamily: 'Poppins, sans-serif' }}>
          <b>Description</b>
        </p>
      </div>
          </div>
        )}
                      </div>
                    </MDTypography>
                  </div>
  
                  <div style={{ backgroundColor: 'white', padding: '10px', fontSize: '10px', boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1), 0px -4px 16px rgba(0, 0, 0, 0.1)', marginBottom: '10px' ,borderRadius:'15px'}}>
                    <MDTypography variant="body2" color="textSecondary">
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <b><a href="salesOrderDetails.Html" style={{ fontFamily: 'Poppins, sans-serif' }}>JAIDEV S</a></b>
                        <b> <div className="badge bg-secondary mb-4">Status</div> </b> 
                      </div>
                      <div style={{ marginBottom: '10px', marginTop: '-17px' }}>
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>T R ISPAT & POWER</p> </b> 
<b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif',display:"flex"}}>TMT Bar 500 mts @ 40,500/EX   
                      <ScrollLink  >
                        <Button
              variant="contained"
              color="primary"
              size="small"
              style={{
                  marginTop: "0px",
                  marginLeft: "10vh",
                  marginRight: "10px",
                  marginBottom: "5px",
                  padding: "0%",             // Adjusted padding for smaller size
                  minWidth: "30px",           // Adjusted minWidth to fit content
                  height: "10px",             // Adjusted height to fit content
                  borderRadius: "50%",        // Adjusted borderRadius for a rounded shape
                  fontSize: "18px",           // Adjusted fontSize for a mini size          // Adjusted lineHeight to default
                  color: "white",
                }}
                                            onClick={() => {
                                              setExpanded14(!expanded14);
                                            }}
                                          >
                                            {expanded14 ? '-' : '+'}
                                          </Button>
                                        </ScrollLink></p> </b> 
  
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>24-04-2024 | OUT/APR/49</p> </b> 
                        <b>  <p style={{ marginBottom: '0', color: 'red', fontWeight: 'bold', fontSize: '12px' }}>390 mts | 15.25 lakhs  
      
                          </p> </b> 
                        </div>
                        {expanded14 && (
          <div id="details">
            {/* Add your additional details here */}
            <div className="accordion_child_body" style={{ borderTop: '1px solid rgb(204, 204, 204)', display: 'block' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '7px', paddingRight: '7px' ,paddingTop:'5px'}}>
          <p style={{ margin: '0', fontSize:'12px' ,fontFamily: 'Poppins, sans-serif' }}><b>TMT Bars</b></p>
          <p style={{ margin: '0',fontSize:'12px',fontFamily: 'Poppins, sans-serif'  }}><b>500 mts</b></p>
          <p style={{ margin: '0' ,fontSize:'12px',fontFamily: 'Poppins, sans-serif' }}><b>40,500/Ex</b></p>
        </div>
        <p style={{ display: 'inline-block', padding: '5px 7px', marginBottom: '-4px' ,fontSize:'12px',fontFamily: 'Poppins, sans-serif' }}>
          <b>Description</b>
        </p>
      </div>
          </div>
        )}
                      </div>
                    </MDTypography>
                  </div>
  
                  <div style={{ backgroundColor: 'white', padding: '10px', fontSize: '10px', boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1), 0px -4px 16px rgba(0, 0, 0, 0.1)', marginBottom: '10px' ,borderRadius:'15px'}}>
                    <MDTypography variant="body2" color="textSecondary">
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <b><a href="salesOrderDetails.Html" style={{ fontFamily: 'Poppins, sans-serif' }}>ARUN P.S</a></b>
                        <b> <div className="badge bg-secondary mb-4">Status</div> </b> 
                      </div>
                      <div style={{ marginBottom: '10px', marginTop: '-17px' }}>
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>T R ISPAT & POWER</p> </b> 
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' ,display:"flex"}}>TMT Bar 500 mts @ 40,500/EX   
                      <ScrollLink  style={{marginLeft:'100px'}}>
                        <Button
              variant="contained"
              color="primary"
              size="small"
              style={{
                  marginTop: "0px",
                  marginLeft: "10vh",
                  marginRight: "10px",
                  marginBottom: "5px",
                  padding: "0%",             // Adjusted padding for smaller size
                  minWidth: "30px",           // Adjusted minWidth to fit content
                  height: "10px",             // Adjusted height to fit content
                  borderRadius: "50%",        // Adjusted borderRadius for a rounded shape
                  fontSize: "18px",           // Adjusted fontSize for a mini size          // Adjusted lineHeight to default
                  color: "white",
                }}
                                            onClick={() => {
                                              setExpanded15(!expanded15);
                                              handleNestedExpandClick();
                                            }}
                                          >
                                            {expanded15 ? '-' : '+'}
                                          </Button>
                                        </ScrollLink></p> </b> 
  
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>24-04-2024 | OUT/APR/49</p> </b> 
                        <b>  <p style={{ marginBottom: '0', color: 'red', fontWeight: 'bold', fontSize: '12px' }}>390 mts | 15.25 lakhs  
      
                          </p> </b> 
                        </div>
                        {expanded15 && (
          <div id="details">
            {/* Add your additional details here */}
            <div className="accordion_child_body" style={{ borderTop: '1px solid rgb(204, 204, 204)', display: 'block' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '7px', paddingRight: '7px' ,paddingTop:'5px'}}>
          <p style={{ margin: '0', fontSize:'12px' ,fontFamily: 'Poppins, sans-serif' }}><b>TMT Bars</b></p>
          <p style={{ margin: '0',fontSize:'12px',fontFamily: 'Poppins, sans-serif'  }}><b>500 mts</b></p>
          <p style={{ margin: '0' ,fontSize:'12px',fontFamily: 'Poppins, sans-serif' }}><b>40,500/Ex</b></p>
        </div>
        <p style={{ display: 'inline-block', padding: '5px 7px', marginBottom: '-4px' ,fontSize:'12px',fontFamily: 'Poppins, sans-serif' }}>
          <b>Description</b>
        </p>
      </div>
          </div>
        )}
                      </div>
                    </MDTypography>
                  </div>
  
                  <div style={{ backgroundColor: 'white', padding: '10px', fontSize: '10px', boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1), 0px -4px 16px rgba(0, 0, 0, 0.1)', marginBottom: '10px',borderRadius:'15px' }}>
                    <MDTypography variant="body2" color="textSecondary">
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <b><a href="salesOrderDetails.Html" style={{ fontFamily: 'Poppins, sans-serif' }}>KAPPOR'S</a></b>
                        <b> <div className="badge bg-secondary mb-4">Status</div> </b> 
                      </div>
                      <div style={{ marginBottom: '10px', marginTop: '-17px' }}>
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>T R ISPAT & POWER</p> </b> 
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif',display:"flex" }}>TMT Bar 500 mts @ 40,500/EX   
                      <ScrollLink  style={{marginLeft:'100px'}}>
                        <Button
              variant="contained"
              color="primary"
              size="small"
              style={{
                  marginTop: "0px",
                  marginLeft: "10vh",
                  marginRight: "10px",
                  marginBottom: "5px",
                  padding: "0%",             // Adjusted padding for smaller size
                  minWidth: "30px",           // Adjusted minWidth to fit content
                  height: "10px",             // Adjusted height to fit content
                  borderRadius: "50%",        // Adjusted borderRadius for a rounded shape
                  fontSize: "18px",           // Adjusted fontSize for a mini size          // Adjusted lineHeight to default
                  color: "white",
                }}
                                            onClick={() => {
                                              setExpanded16(!expanded16);
                                              handleNestedExpandClick();
                                            }}
                                          >
                                            {expanded16 ? '-' : '+'}
                                          </Button>
                                        </ScrollLink></p> </b> 
  
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>24-04-2024 | OUT/APR/49</p> </b> 
                        <b>  <p style={{ marginBottom: '0', color: 'red', fontWeight: 'bold', fontSize: '12px' }}>390 mts | 15.25 lakhs  
      
                          </p> </b> 
                        </div>
                        {expanded16 && (
          <div id="details">
            {/* Add your additional details here */}
            <div className="accordion_child_body" style={{ borderTop: '1px solid rgb(204, 204, 204)', display: 'block' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '7px', paddingRight: '7px' ,paddingTop:'5px'}}>
          <p style={{ margin: '0', fontSize:'12px' ,fontFamily: 'Poppins, sans-serif' }}><b>TMT Bars</b></p>
          <p style={{ margin: '0',fontSize:'12px',fontFamily: 'Poppins, sans-serif'  }}><b>500 mts</b></p>
          <p style={{ margin: '0' ,fontSize:'12px',fontFamily: 'Poppins, sans-serif' }}><b>40,500/Ex</b></p>
        </div>
        <p style={{ display: 'inline-block', padding: '5px 7px', marginBottom: '-4px' ,fontSize:'12px',fontFamily: 'Poppins, sans-serif' }}>
          <b>Description</b>
        </p>
      </div>
          </div>
        )}
                      </div>
                    </MDTypography>
                  </div>
                  </div>
  
                </>
              )}
            />
          </MDBox>
      </div>
  )}
  
        

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
