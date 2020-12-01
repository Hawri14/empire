import React from 'react';
import { homeObjOne } from './Data';
import { MoreInfo } from '../../components';

const Home = () => {
    return (
        <>
        <MoreInfo {...homeObjOne} />           
        </>
    );
};

export default Home;
