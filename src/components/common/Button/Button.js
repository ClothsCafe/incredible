import React from 'react';

import clsx from 'clsx';
import {  Button as MUIButton, CircularProgress } from '@material-ui/core';



const Button = ({ isLoading,className, children, ascent = null, variant = "contained", color = "primary", ...props }) => {


    return (
        <MUIButton
            
            color={ color}
            disabled={isLoading}
            variant={variant}
            className={clsx(className)}
            {...props}
        >
            {!isLoading?children:<CircularProgress />}
        </MUIButton>
    );
};

export default (Button);