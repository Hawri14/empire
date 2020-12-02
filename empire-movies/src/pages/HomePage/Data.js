export const homeObjOne = {
    lightBg: false,
    Primary: true,
    imgStart: '',
    lightTopLine: true,    //we use true and false to change if we want dark more or light mode
    lightTextDesc: true,
    buttonLabel: 'Get started',    //this is for the top part of the info section on the homepage
    description: 'Find a movie for you', 
    headline: 'Best Movies', 
    lightText: true,
    topLine: 'Empire Movies',
    img: require('../../images/svg1.svg').default, //here we say require otherwise the image will not show but we have to put .default to make it show too
    alt: 'Image',
    start: '',
};

export const homeObjTwo = {
    lightBg: true,
    Primary: false,
    imgStart: 'start',
    lightTopLine: false,    
    lightTextDesc: false,
    buttonLabel: 'Get started',   
    description: 'Find a movie for you', 
    headline: 'Best Movies', 
    lightText: false,
    topLine: 'Empire Movies',
    img: require('../../images/svg1.svg').default, 
    alt: 'Image',
    start: 'true',
};