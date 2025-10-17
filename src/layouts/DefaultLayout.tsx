import React from 'react';
import { styled } from '@mui/material';

const Main = styled('main')(({ theme }) => ({
  alignItems: 'center',
  backgroundColor: theme.palette.common.light,
  display: 'flex',
  flexGrow: 1,
  height: '100%',
  justifyContent: 'center',
}));

const Content = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  overflow: 'auto',
  padding: 32,
  paddingTop: 16,
  width: '100%',
});

const ContentTop = styled('div')(({ children }) => ({
  display: 'flex',
  justifyContent:
    // Count only truthy children
    React.Children.toArray(children).filter(Boolean).length > 1 ? 'space-between' : 'flex-end',
  paddingBottom: 20,
}));

export default Object.assign(Main, { Content, ContentTop });
