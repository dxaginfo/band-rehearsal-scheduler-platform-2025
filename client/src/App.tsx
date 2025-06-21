import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Layout components
import MainLayout from './layouts/MainLayout';

// Pages
import Dashboard from './pages/Dashboard';
import CalendarPage from './pages/Calendar';
import SetlistsPage from './pages/Setlists';
import BandsPage from './pages/Bands';
import SettingsPage from './pages/Settings';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import NotFoundPage from './pages/NotFound';

// Create a client for React Query
const queryClient = new QueryClient();

// Create theme
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2e7d32', // Green
    },
    secondary: {
      main: '#f50057', // Pink
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="calendar" element={<CalendarPage />} />
              <Route path="setlists" element={<SetlistsPage />} />
              <Route path="bands" element={<BandsPage />} />
              <Route path="settings" element={<SettingsPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
