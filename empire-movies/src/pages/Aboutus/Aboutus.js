import React from 'react';
import { homeObjOne, homeObjTwo } from './Data';
import { MoreInfo } from '../../components';

const Aboutus = () => {
    return (
        <>  
        <MoreInfo {...homeObjOne} />  
        <MoreInfo {...homeObjTwo} />   
        </>
    );    //above we just create the page sections that we have in our Data.js file so it shows on the page
};

export default Aboutus;
