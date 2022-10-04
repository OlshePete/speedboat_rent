import { createTheme, ThemeProvider } from "@mui/material";
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
      variants: [
          {
            props: { variant: 'caption' },
            style: {
              textTransform: 'uppercase',
              fontSize: "10px",
            },
          },
          {
            props: { variant: 'phone' },
            style: {
              textTransform: 'uppercase',
              fontSize: "10px",
            },
          }            
        ],
    },
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: 'outlined' },
            style: {
              textTransform: 'uppercase',
              border:'none',
              fontSize:{xs:'10px',md:'20px'},
              backgroundColor: "rgba(135,2,3,0)",
              color: "rgba(135,2,3,1)",
              "&:hover":{
              backgroundColor: "#99ce65",
              border:'none',
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
        path="dashboard"
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        }
      >

      </Route>
        <Route  path="dashboard/check-customer" element={<PrivateRoute><CheckPage /></PrivateRoute>} />
        <Route  path="dashboard/new-order" element={<PrivateRoute><NewOrderPage /></PrivateRoute>} />
        <Route  path="dashboard/personal-account" element={<PrivateRoute><PersonalPage /></PrivateRoute>} />
        <Route exac path="/agent" element={<AgentPage />} />
        <Route exac path="/agent-money" element={<AgentMoney />} />
      </Route>
      {/* <Route path="/login" component={<LoginPage/>} /> */}
    </Routes>
    </ThemeProvider>
  );
}

export default App;
