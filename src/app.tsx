import 'src/global.css';

import Fab from '@mui/material/Fab';

import { Router } from 'src/routes/sections';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import { ThemeProvider } from 'src/theme/theme-provider';

import { Iconify } from 'src/components/iconify';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/sign-in');
    }
  }, [navigate]);

  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}
