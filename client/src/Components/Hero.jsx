import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';


const events = [
    {
      image:'https://d3dy70zhjs5mi1.cloudfront.net/s3fs-public/styles/large/public/2023-09/orl-Transforming-Spaces-Into-Extraordinary-Destinations-562x382px-010923.jpg?itok=QUh-cb2r'
    },
    {
      image:'https://d3dy70zhjs5mi1.cloudfront.net/s3fs-public/styles/large/public/2023-09/orl-Transforming-Spaces-Into-Extraordinary-Destinations-562x382px-010923.jpg?itok=QUh-cb2r'
    },
  ]
  

  var items = [
    {
      name: "Designer Jewellery",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing  ",
      img_src: "./assets/img/slider/slider1.jpg"
    },
    {
      name: "Designer Jewellery",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
      img_src: "./assets/img/slider/slider2.jpg"
    },
    {
      name: "Designer Jewellery",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
      img_src: "./assets/img/slider/slider3.jpg"
    }
  ];

const Hero = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        // nextArrow: <NextArrow />,
        //   prevArrow: <PrevArrow />,
    };
  
return (
    <Box pt={75}>
      <Slider {...settings} style={{width:"50%"}}>
                {events.map((event, index) => (
                  <>
                  <Flex mt={'50px'}>
                    <Image borderRadius={'20px'} src={event.image}/>
                    </Flex>
                  </>
                ))}
              </Slider>
    </Box>
  )
}

export default Hero