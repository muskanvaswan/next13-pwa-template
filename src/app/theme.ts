'use client';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import localFont from 'next/font/local';

const leagueSpartan = localFont({src: '../../fonts/LeagueSpartan-VF.ttf'})

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
    typography: {
        fontFamily: leagueSpartan.style.fontFamily,
    }
});

export default responsiveFontSizes(theme);
