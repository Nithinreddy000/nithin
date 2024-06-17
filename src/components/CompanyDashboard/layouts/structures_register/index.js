import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import AddIcon from '@mui/icons-material/Add';
import MDBox from "../../components/MDBox";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbarRegister from "../../examples/navbar_register/DashboardNavbar";
import Footer from "../../examples/Footer";
import SidenavRegister from "../../examples/sidenav_register";
import Tmtroutes from "../../tmt_routes";
import '../register_focus.css'
import Stats_card_for_register from "../../examples/Cards/Stats_card_for_register";
import MDTypography from "../../components/MDTypography";
import { Link as ScrollLink } from 'react-scroll';
import Button from '@mui/material/Button';

function TmtRegister() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [highlightedId, setHighlightedId] = useState("");

  const handleSearch = (query) => {
    setTimeout(() => {
      setSearchQuery(query.toLowerCase());
    }, 300);
  };

  // In TmtRegister.js

  


  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value || "");
  };

  const filterDetails = (detail) => {
    const normalizedSearchQuery = searchQuery.toLowerCase().trim();
    return (
      detail.name.toLowerCase().includes(normalizedSearchQuery) ||
      detail.company.toLowerCase().includes(normalizedSearchQuery) ||
      detail.product.toLowerCase().includes(normalizedSearchQuery) ||
      detail.orderDate.toLowerCase().includes(normalizedSearchQuery) ||
      detail.quantity.toLowerCase().includes(normalizedSearchQuery)||
      detail.id.toLowerCase().includes(normalizedSearchQuery)
    );
  };

  const details = [
    {  id: "sanjay", name: "SANJAY K.P", company: "T R ISPAT & POWER1", product: "TMT Bar 500 mts @ 40,500/EX1", orderDate: "24-04-2024 | OUT/APR/491", quantity: "390 mts | 15.25 lakhs1" },
    {  id: "jaidev", name: "JAIDEV S", company: "T R ISPAT & POWER", product: "TMT Bar 400 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs" },
    {  id: "arun", name: "ARUN P.S", company: "T R ISPAT & POWER", product: "TMT Bar 600 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs" },
    {  id: "", name: "KAPPOR'S", company: "T R ISPAT & POWER", product: "TMT Bar 700 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs" },
    {  id: "", name: "KAPPOR'S", company: "T R ISPAT & POWER", product: "TMT Bar 700 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs" },
    {  id: "", name: "KAPPOR'S", company: "T R ISPAT & POWER", product: "TMT Bar 700 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs" },
    {  id: "", name: "KAPPOR'S", company: "T R ISPAT & POWER", product: "TMT Bar 700 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs" },
    {  id: "", name: "KAPPOR'S", company: "T R ISPAT & POWER", product: "TMT Bar 700 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs" },
    {  id: "", name: "KAPPOR'S", company: "T R ISPAT & POWER", product: "TMT Bar 700 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs" },
    {  id: "", name: "KAPPOR'S", company: "T R ISPAT & POWER", product: "TMT Bar 700 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs" },
    {  id: "", name: "KAPPOR'S", company: "T R ISPAT & POWER", product: "TMT Bar 700 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs" },
    {  id: "", name: "KAPPOR'S", company: "T R ISPAT & POWER", product: "TMT Bar 700 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs" },
    {  id: "", name: "KAPPOR'S", company: "T R ISPAT & POWER", product: "TMT Bar 700 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs" },
    {  id: "", name: "KAPPOR'S", company: "T R ISPAT & POWER", product: "TMT Bar 700 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs" },
    {  id: "kappor", name: "KAPPOR'S", company: "T R ISPAT & POWER", product: "TMT Bar 800 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs" },
  ];


  return (
    <DashboardLayout>
      <DashboardNavbarRegister onSearch={handleSearch} />
      <MDBox py={3}>
        <h3 style={{ paddingLeft: '10px', fontFamily: 'Poppins, sans-serif', paddingTop: '0%', marginTop: '0%' }}>Registration</h3>
        <SidenavRegister
  routes={Tmtroutes}
  onItemClick={(id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'center' });
    setHighlightedId(id); // Set the highlighted ID
  }}
/>
        {details.filter(filterDetails).map((detail, detailIndex) => (
          <div id={detail.id} key={detail.id} className={`card-container `} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 'auto', paddingBottom: '0%', paddingTop:'4vh', marginRight:'11vh'}}>
            <div className={`${highlightedId === detail.id? 'highlighted' : ''}`}>
            <MDBox mb={1.5} style={{ cursor: "pointer" }} >
              <Stats_card_for_register 
                icon="whatshot"
                title={<h3 style={{ fontSize: '20px', fontFamily: 'Poppins, sans-serif'}}>{detail.name}</h3>}
                percentage={{
                  amount: (
                    <MDTypography variant="body2" color="textSecondary" paddingLeft='10px'paddingRight='10px' paddingBottom='-10px'>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0px' }}>
                        <b><p style={{ marginBottom: '0px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>{detail.company}</p></b>
                        <b><div className="badge bg-secondary mb-4" style={{justifyContent:'flex-end'}}>Status</div></b>
                      </div>
                      <div style={{ marginTop: '-17px'}}>
                        <b><p style={{ marginBottom: '10px', fontSize: '12px', fontFamily: 'Poppins, sans-serif', display: "flex" }}>{detail.product}</p></b>
                        <div style={{ display: 'flex', justifyContent: 'space-between' ,paddingBottom:'-10px'}}>
                          <b><p style={{ marginBottom: '0px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>{detail.orderDate}</p></b>
                          <b><p style={{ marginBottom: '0px', color: 'red', fontWeight: 'bold', fontSize: '12px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{detail.quantity}</p></b>
                        </div>
                      </div>
                    </MDTypography>
                  ),
                }}
              />
            </MDBox>
            </div >
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
