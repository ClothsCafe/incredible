import React from 'react';
import clsx from 'clsx';
import { Typography, makeStyles } from '@material-ui/core';

import { styledBy } from '../../helpers/styles';


const useStyle = makeStyles((theme) => ({
    root: {
        color: styledBy('ascent', theme.palette.ascents),
        
    },
    signUp:{
        fontSize:theme.typography.body2
    }
}))

const Text = ({ ascent, children, className, ...props }) => {

    const classes = useStyle({ ascent });

    return (
        <Typography className={clsx(classes.root, className)} {...props}>
            {children}
        </Typography>
    );
};



export default Text;