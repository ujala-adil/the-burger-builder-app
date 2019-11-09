import React from 'react';

import classes from './Spinner.css';

const spinner = () => (
    <div className={classes.Loader}>Loading...</div> //Loader... text is a fallback in case the CSS is not working
);

export default spinner;