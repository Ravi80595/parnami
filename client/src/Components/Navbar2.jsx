import React, { useState, useEffect } from 'react';
import { Flex, Box, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css'

function Navbar2() {
  const [navbarBackground, setNavbarBackground] = useState('transparent');
  const [navbarTextColor, setNavbarTextColor] = useState('white');

  useEffect(() => {
    // Add an event listener to track scroll position and update the navbar background
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavbarBackground('black');
      setNavbarTextColor('white');
    } else {
      setNavbarBackground('transparent');
      setNavbarTextColor('white');
    }
  };

  const navbarStyle = {
    backgroundColor: 'black',
    color: 'white',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    transition: 'background-color 0.3s ease',
    zIndex: 1000,
  };

  return (
    <nav style={navbarStyle}>
      <Flex justifyContent='space-between' w={'90%'} m={'auto'} pt={'20px'} pb={'10px'}>
        <Box w={'50%'}>
          <Image background={'white'} borderRadius={'5px'} p='5px' position={'absolute'} w={'130px'} h={'115px'} src={'https://pranamigroup.com/static/assets/images/logo-black.png'} />
          {/* <Text fontSize={'26px'} fontFamily={'cursive'}>Enhance Projects</Text> */}
        </Box>
        <Flex fontSize={['15px', 20, 20, 20]} justifyContent='space-around' w={['70%', '30%', '30%', '60%']} pt={'5px'}>
          <Link to='/'>
          <Text fontFamily={'"Poppins", sans-serif'} color={navbarTextColor} className='Link_btns'>Home</Text>
          </Link>
          <Link to='/about'>
          <Text color={navbarTextColor} className='Link_btns'>About Us</Text>
          </Link>
          <Link to='/contractors'>
          <Text color={navbarTextColor} className='Link_btns'>Commercials</Text>
          </Link>
          <Link to='/about'>
          <Text color={navbarTextColor} className='Link_btns'>Rental</Text>
          </Link>
          <Link to='/projects'>
            <Text color={navbarTextColor} className='Link_btns'>Hospitality</Text>
          </Link>
          {/* <Link to='/awards'>
            <Text color={navbarTextColor} className='Link_btns'>Awards</Text>
          </Link>
          <Link to='/contact'>
          <Text color={navbarTextColor} className='Link_btns'>Contact Us</Text>
          </Link> */}
        </Flex>
      </Flex>
    </nav>
  );
}

export default Navbar2;