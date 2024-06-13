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


function TmtRegister() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [clickTimeout, setClickTimeout] = useState(null);
  const [expandTmtBars, setExpandTmtBars] = useState(false); 
  const [expandDetails, setExpandDetails] = useState(Array(5).fill(false));
  const [expanded, setExpanded] = useState(false);
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
        <div className="swiper-container">
        <Swiper
        spaceBetween={16}
        slidesPerView={4} // Default number of slides per view
        breakpoints={{
          0: {
            slidesPerView: 1, // 1 slide per view for screens from 0 to 900px
          },
          768: {
            slidesPerView: 2,  // 1 slide per view for screens up to 900px
          },
          1300: {
            slidesPerView: 3, // 4 slides per view for screens larger than 1300px
          },
          // Add more breakpoints if needed
        }}
      
        modules={[Navigation, Keyboard]}
        navigation={{ clickable: true }}
        keyboard={{ enabled: true }}
        loop={true} 
        >
          {filterDivisions("Tmt Bars") && (
  <SwiperSlide>
    <div className="card-container">
      <Grid item xs={12} md={6} lg={3}>
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
                    <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>TMT Bar 500 mts @ 40,500/EX   
                    <ScrollLink to="details" smooth={true} duration={500} style={{marginLeft:'100px'}}>
                      <Button
            variant="contained"
            color="primary"
            size="small"
            style={{
                marginTop: "10px",
                marginLeft: "auto",
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
                                            handleNestedExpandClick();
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
                    <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>TMT Bar 500 mts @ 40,500/EX   
                    <ScrollLink to="details" smooth={true} duration={500} style={{marginLeft:'100px'}}>
                      <Button
            variant="contained"
            color="primary"
            size="small"
            style={{
                marginTop: "10px",
                marginLeft: "auto",
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
                                            handleNestedExpandClick();
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
                      <b><a href="salesOrderDetails.Html" style={{ fontFamily: 'Poppins, sans-serif' }}>ARUN P.S</a></b>
                      <b> <div className="badge bg-secondary mb-4">Status</div> </b> 
                    </div>
                    <div style={{ marginBottom: '10px', marginTop: '-17px' }}>
                    <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>T R ISPAT & POWER</p> </b> 
                    <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>TMT Bar 500 mts @ 40,500/EX   
                    <ScrollLink to="details" smooth={true} duration={500} style={{marginLeft:'100px'}}>
                      <Button
            variant="contained"
            color="primary"
            size="small"
            style={{
                marginTop: "10px",
                marginLeft: "auto",
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
                                            handleNestedExpandClick();
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

                <div style={{ backgroundColor: 'white', padding: '10px', fontSize: '10px', boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1), 0px -4px 16px rgba(0, 0, 0, 0.1)', marginBottom: '10px',borderRadius:'15px' }}>
                  <MDTypography variant="body2" color="textSecondary">
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <b><a href="salesOrderDetails.Html" style={{ fontFamily: 'Poppins, sans-serif' }}>KAPPOR'S</a></b>
                      <b> <div className="badge bg-secondary mb-4">Status</div> </b> 
                    </div>
                    <div style={{ marginBottom: '10px', marginTop: '-17px' }}>
                    <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>T R ISPAT & POWER</p> </b> 
                    <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>TMT Bar 500 mts @ 40,500/EX   
                    <ScrollLink to="details" smooth={true} duration={500} style={{marginLeft:'100px'}}>
                      <Button
            variant="contained"
            color="primary"
            size="small"
            style={{
                marginTop: "10px",
                marginLeft: "auto",
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
                                            handleNestedExpandClick();
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
                </div>

              </>
            )}
          />
        </MDBox>
      </Grid>
    </div>
  </SwiperSlide>
)}


{filterDivisions("Billets") && (
  <SwiperSlide>
    <div className="card-container">
      <Grid item xs={12} md={6} lg={3}>
        <MDBox mb={1.5} style={{ cursor: "pointer" }}>
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
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>TMT Bar 500 mts @ 40,500/EX   
                      <ScrollLink to="details" smooth={true} duration={500} style={{marginLeft:'100px'}}>
                        <Button
              variant="contained"
              color="primary"
              size="small"
              style={{
                  marginTop: "10px",
                  marginLeft: "auto",
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
                                              handleNestedExpandClick();
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
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>TMT Bar 500 mts @ 40,500/EX   
                      <ScrollLink to="details" smooth={true} duration={500} style={{marginLeft:'100px'}}>
                        <Button
              variant="contained"
              color="primary"
              size="small"
              style={{
                  marginTop: "10px",
                  marginLeft: "auto",
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
                                              handleNestedExpandClick();
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
                        <b><a href="salesOrderDetails.Html" style={{ fontFamily: 'Poppins, sans-serif' }}>ARUN P.S</a></b>
                        <b> <div className="badge bg-secondary mb-4">Status</div> </b> 
                      </div>
                      <div style={{ marginBottom: '10px', marginTop: '-17px' }}>
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>T R ISPAT & POWER</p> </b> 
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>TMT Bar 500 mts @ 40,500/EX   
                      <ScrollLink to="details" smooth={true} duration={500} style={{marginLeft:'100px'}}>
                        <Button
              variant="contained"
              color="primary"
              size="small"
              style={{
                  marginTop: "10px",
                  marginLeft: "auto",
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
                                              handleNestedExpandClick();
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
  
                  <div style={{ backgroundColor: 'white', padding: '10px', fontSize: '10px', boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1), 0px -4px 16px rgba(0, 0, 0, 0.1)', marginBottom: '10px',borderRadius:'15px' }}>
                    <MDTypography variant="body2" color="textSecondary">
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <b><a href="salesOrderDetails.Html" style={{ fontFamily: 'Poppins, sans-serif' }}>KAPPOR'S</a></b>
                        <b> <div className="badge bg-secondary mb-4">Status</div> </b> 
                      </div>
                      <div style={{ marginBottom: '10px', marginTop: '-17px' }}>
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>T R ISPAT & POWER</p> </b> 
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>TMT Bar 500 mts @ 40,500/EX   
                      <ScrollLink to="details" smooth={true} duration={500} style={{marginLeft:'100px'}}>
                        <Button
              variant="contained"
              color="primary"
              size="small"
              style={{
                  marginTop: "10px",
                  marginLeft: "auto",
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
                                              handleNestedExpandClick();
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
                  </div>
  
                </>
              )}
            />
          </MDBox>
        </Grid>
      </div>
    </SwiperSlide>
  )}
             {filterDivisions("Structures") && (
  <SwiperSlide>
    <div className="card-container">
      <Grid item xs={12} md={6} lg={3}>
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
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>TMT Bar 500 mts @ 40,500/EX   
                      <ScrollLink to="details" smooth={true} duration={500} style={{marginLeft:'100px'}}>
                        <Button
              variant="contained"
              color="primary"
              size="small"
              style={{
                  marginTop: "10px",
                  marginLeft: "auto",
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
                                              handleNestedExpandClick();
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
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>TMT Bar 500 mts @ 40,500/EX   
                      <ScrollLink to="details" smooth={true} duration={500} style={{marginLeft:'100px'}}>
                        <Button
              variant="contained"
              color="primary"
              size="small"
              style={{
                  marginTop: "10px",
                  marginLeft: "auto",
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
                                              handleNestedExpandClick();
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
                        <b><a href="salesOrderDetails.Html" style={{ fontFamily: 'Poppins, sans-serif' }}>ARUN P.S</a></b>
                        <b> <div className="badge bg-secondary mb-4">Status</div> </b> 
                      </div>
                      <div style={{ marginBottom: '10px', marginTop: '-17px' }}>
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>T R ISPAT & POWER</p> </b> 
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>TMT Bar 500 mts @ 40,500/EX   
                      <ScrollLink to="details" smooth={true} duration={500} style={{marginLeft:'100px'}}>
                        <Button
              variant="contained"
              color="primary"
              size="small"
              style={{
                  marginTop: "10px",
                  marginLeft: "auto",
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
                                              handleNestedExpandClick();
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
  
                  <div style={{ backgroundColor: 'white', padding: '10px', fontSize: '10px', boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1), 0px -4px 16px rgba(0, 0, 0, 0.1)', marginBottom: '10px',borderRadius:'15px' }}>
                    <MDTypography variant="body2" color="textSecondary">
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <b><a href="salesOrderDetails.Html" style={{ fontFamily: 'Poppins, sans-serif' }}>KAPPOR'S</a></b>
                        <b> <div className="badge bg-secondary mb-4">Status</div> </b> 
                      </div>
                      <div style={{ marginBottom: '10px', marginTop: '-17px' }}>
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>T R ISPAT & POWER</p> </b> 
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>TMT Bar 500 mts @ 40,500/EX   
                      <ScrollLink to="details" smooth={true} duration={500} style={{marginLeft:'100px'}}>
                        <Button
              variant="contained"
              color="primary"
              size="small"
              style={{
                  marginTop: "10px",
                  marginLeft: "auto",
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
                                              handleNestedExpandClick();
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
                  </div>
  
                </>
              )}
            />
          </MDBox>
        </Grid>
      </div>
    </SwiperSlide>
  )}
  
            {filterDivisions("Pipes") && (
  <SwiperSlide>
    <div className="card-container">
      <Grid item xs={12} md={6} lg={3}>
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
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>TMT Bar 500 mts @ 40,500/EX   
                      <ScrollLink to="details" smooth={true} duration={500} style={{marginLeft:'100px'}}>
                        <Button
              variant="contained"
              color="primary"
              size="small"
              style={{
                  marginTop: "10px",
                  marginLeft: "auto",
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
                                              handleNestedExpandClick();
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
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>TMT Bar 500 mts @ 40,500/EX   
                      <ScrollLink to="details" smooth={true} duration={500} style={{marginLeft:'100px'}}>
                        <Button
              variant="contained"
              color="primary"
              size="small"
              style={{
                  marginTop: "10px",
                  marginLeft: "auto",
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
                                              handleNestedExpandClick();
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
                        <b><a href="salesOrderDetails.Html" style={{ fontFamily: 'Poppins, sans-serif' }}>ARUN P.S</a></b>
                        <b> <div className="badge bg-secondary mb-4">Status</div> </b> 
                      </div>
                      <div style={{ marginBottom: '10px', marginTop: '-17px' }}>
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>T R ISPAT & POWER</p> </b> 
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>TMT Bar 500 mts @ 40,500/EX   
                      <ScrollLink to="details" smooth={true} duration={500} style={{marginLeft:'100px'}}>
                        <Button
              variant="contained"
              color="primary"
              size="small"
              style={{
                  marginTop: "10px",
                  marginLeft: "auto",
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
                                              handleNestedExpandClick();
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
  
                  <div style={{ backgroundColor: 'white', padding: '10px', fontSize: '10px', boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1), 0px -4px 16px rgba(0, 0, 0, 0.1)', marginBottom: '10px',borderRadius:'15px' }}>
                    <MDTypography variant="body2" color="textSecondary">
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <b><a href="salesOrderDetails.Html" style={{ fontFamily: 'Poppins, sans-serif' }}>KAPPOR'S</a></b>
                        <b> <div className="badge bg-secondary mb-4">Status</div> </b> 
                      </div>
                      <div style={{ marginBottom: '10px', marginTop: '-17px' }}>
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>T R ISPAT & POWER</p> </b> 
                      <b> <p style={{ marginBottom: '20px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>TMT Bar 500 mts @ 40,500/EX   
                      <ScrollLink to="details" smooth={true} duration={500} style={{marginLeft:'100px'}}>
                        <Button
              variant="contained"
              color="primary"
              size="small"
              style={{
                  marginTop: "10px",
                  marginLeft: "auto",
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
                                              handleNestedExpandClick();
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
                  </div>
  
                </>
              )}
            />
          </MDBox>
        </Grid>
      </div>
    </SwiperSlide>
  )}
  
        

            </Swiper>
        </div>
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
