import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import "./index.scss";
import { Link } from 'react-router-dom';

export default function Breadcrumb() {

  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb" className="breadcrumb">
        <Link 
            key="1" 
            to="/"
        >
            Home
        </Link>
        <Link
            key="2"
            to="/shop"
        >
            Son môi
        </Link>
        <Typography key="3" color="grey" className="breadcrumb__active">
            Son Shu Uemura Rouge Unlimited Matte Lipstick Rouge À Lèvres M OR 570 (3g)
        </Typography>
    </Breadcrumbs>
  );
}
