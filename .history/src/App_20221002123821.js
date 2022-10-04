import { ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AgentMoney from "./components/AgentMoneyPage/AgentMoney";
import AgentPage from "./components/AgentPage/AgentPage";
import CheckPage from "./components/CheckPage/CheckPage";
import LoginPage from "./components/LoginPage/LoginPage";
import MainOutlet from "./components/MainOutlet/MainOutlet";
import NewOrderPage from "./components/NewOrderPage/NewOrderPage";
import DashboardPage from "./components/pages/DashboardPage";
import PersonalPage from "./components/PersonalPage/PersonalPage";
import PrivateRoute from "./hoc/PrivateRoute";
const theme = createTheme({   
  palette:{
    primary:{
      main:"#1976d2",
      dark:"#1976d2",
      light:"#1976d2",
    }
  },    
    typography: {
      fontFamily: [
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ].join(','),
    advanced_caption: {
      lineHeight: 1.5,
      fontSize: "18px",
      fontWeight: 300,
    },
    exh_text: {
      lineHeight: 1.4,
      fontSize: "20px",
      fontWeight: 400,
    },
    exh_description_label: {
       color:'rgba(135,2,3,1)',
      lineHeight: 1.4,
      fontSize: "24px",
      fontWeight: 400,
    },
    person_label: {
       color:'rgba(135,2,3,1)',
      lineHeight: 2.4,
      fontSize: "24px",
      fontWeight: 400,
    },
    person_caption: {
      lineHeight: 1.4,
      fontSize: "14px",
      fontWeight: 300,
      textDecration:'none',
      textTransform:'uppercase'
    },
    person_text: {
      lineHeight: 1.4,
      fontSize: "18px",
      fontWeight: 400,
    },
    person_link: {
       color:'rgba(135,2,3,1)',
      lineHeight: 1.4,
      fontSize: "18px",
      fontWeight: 400,
    },
    mobile_card_title: {
      //  color:'rgba(135,2,3,1)',
       color:'rgba(0,0,0,0.8)',
      lineHeight: 1.4,
      fontSize: "18px",
      fontWeight: 500,
    },
    mobile_card_label: {
       color:'rgba(0,0,0,0.8)',
      lineHeight: 1.4,
      fontSize: "14px",
      fontWeight: 400,
    },
    mobile_card_text: {
       color:'rgba(135,2,3,1)',
      lineHeight: 1.4,
      fontSize: "16px",
      fontWeight: 400,
    },
      variants: [
          {
            props: { variant: 'caption' },
            style: {
              textTransform: 'uppercase',
            },
          }          
        ],
      // ,         
      // body1: {
      //   fontFamily: "'Poppins', Arial, sans-serif",
      // },
    },
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: 'contained' },
            style: {
              textTransform: 'uppercase',
              fontSize:{xs:'10px',md:'20px'},
              border: `1px solid rgba(135,2,3,0.8)`,
              backgroundColor: "rgba(135,2,3,0)",
              color: "rgba(135,2,3,1)",
              "&:hover":{
              backgroundColor: "rgba(135,2,3,1)",
                color:'white',
              }
            },
          },  
          {
            props: { variant: 'text' },
            style: {
              fontSize:'18px',
              fontWeight:400,
              color: "rgba(0,0,0,0.8)",
              "&:hover":{
                color:'rgba(135,2,3,1)',
              },
              "& .MuiSvgIcon-root":{
                width:'20px',
                marginLeft:4,
              }
            },
          },            
        ],
      },
      MuiCheckbox: {
        variants: [
          {
            props: { variant: 'body2' },
            style: {
              textTransform: 'uppercase',
              borderRadius:0,
              fontSize:{xs:'10px',md:'20px'},
              backgroundColor: "rgba(135,2,3,0)",
              color: "rgba(135,2,3,1)",
              "&.Mui-checked":{
                color:'rgba(135,2,3,1)',
              },
            },
          },              
        ],

      },
      MuiChip: {
        variants: [
          {
            props: { variant: 'filled' },
            style: {
              textTransform: 'uppercase',
              borderRadius:0,
              fontSize:'18px',
              backgroundColor:'inherit',
              border: "1px solid rgba(135,2,3,1)",
              borderRadius:'4px',
              display:'flex',
              alignItems:'center',
              color: "rgba(135,2,3,1)",
              "& .MuiChip-icon":{
                color:'rgba(0,0,0,0.6)',
              }
            },
          },              
        ],

      },
      MuiCircularProgress: {
        variants: [
          {
            props: { variant: 'filled' },
            style: {
              textTransform: 'uppercase',
              borderRadius:0,
              fontSize:'18px',
              backgroundColor:'inherit',
              border: "1px solid rgba(135,2,3,1)",
              borderRadius:'4px',
              display:'flex',
              alignItems:'center',
              color: "rgba(135,2,3,1)",
              "& .MuiChip-icon":{
                color:'rgba(0,0,0,0.6)',
              }
            },
          },              
        ],
      },
    },
  });

function App() {
  return (

    <ThemeProvider theme={theme}>

    <Routes>
      <Route exac path="/" element={<MainOutlet />}>
        <Route exac index element={<LoginPage />} />
        <Route exac path="/login" element={<LoginPage />} />
        <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        }
      />
        <Route exac path="/agent" element={<AgentPage />} />
        <Route exac path="/new-order" element={<NewOrderPage />} />
        <Route exac path="/personal-account" element={<PersonalPage />} />
        <Route exac path="/check-customer" element={<CheckPage />} />
        <Route exac path="/agent-money" element={<AgentMoney />} />
      </Route>
      {/* <Route path="/login" component={<LoginPage/>} /> */}
    </Routes>
    </ThemeProvider>
  );
}

export default App;