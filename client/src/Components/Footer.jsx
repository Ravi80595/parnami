import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import styles from '../CSS/footer.module.css'
import { BsFacebook, BsInstagram,BsTwitter,BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import {AiFillLinkedin} from 'react-icons/ai'
// import ScrollToTopLink from "./ScrollToTopLink";
// import {ScrollToFAQLink, ScrollToReviewLink} from "./Scrolls";



const Footer = () => {


return (
  <div zIndex={999999999} className={styles.container} style={{background:'black'}}>
  <Stack color='white' direction={["column",'row',"horizontal","horizontal"]} justify="space-around" w={'80%'}  m={'auto'}>
  <Stack gap="10px" marginRight="20px">
    <Box color={'white'} pb={5}>
    <Heading pb={3}>PRANAMI</Heading>
      <Text pt={3} fontSize={'14px'} lineHeight={'1.6em'}>We We are the top real estate agency <br/> in Hosuton, with agents available <br/> to answer any question 24/7.</Text>
  </Box>
      <Stack direction="horizontal" gap="25px">
        <a href="https://www.instagram.com/zenoo186/ "target="blank">
        <BsInstagram
          style={{ width: "25px", height: "25px", cursor: "pointer" }}
        /></a>
        <a href="https://www.facebook.com/zenoo18"target="blank">
        <BsFacebook
          style={{ width: "25px", height: "25px", cursor: "pointer" }}
        /></a>
        <a href="https://www.linkedin.com/company/zenoo.in/"target="blank">
        <AiFillLinkedin
          style={{ width: "25px", height: "25px", cursor: "pointer" }}
        /></a>
        <a href="https://twitter.com/ZENOO719261821" target="blank">
        <BsTwitter
          style={{ width: "25px", height: "25px", cursor: "pointer" }}
        /></a>
        <a href="https://www.youtube.com/channel/UCk5O3EwfOobD_vhZnlT0CLg" target="blank">
        <BsYoutube
          style={{ width: "25px", height: "25px", cursor: "pointer" }}
        /></a>
      </Stack>
    </Stack>
    <Stack gap="10px">
      <Text fontSize="20px" fontWeight="700">
        Company
      </Text>
      {/* <ScrollToTopLink to='/about'> */}
    <Text fontSize="16px" fontWeight="500" cursor="pointer">About us</Text>
    {/* </ScrollToTopLink> */}
    {/* <ScrollToTopLink to='/contact'> */}
    <Text fontSize="16px" fontWeight="500" cursor="pointer">Contact us</Text>
    {/* </ScrollToTopLink> */}
    {/* <Text fontSize="14px" fontWeight="500" cursor="pointer">Blog</Text> */}
    <Text color={'white'}>Email : info@pranami.in</Text>
    </Stack>
    <Stack gap="10px">
    <Text fontSize="20px" fontWeight="700">Featured Categories</Text>
    <a href="https://www.linkedin.com/company/zenoo.in/" target="blank">
    <Text fontSize="16px" fontWeight="500" cursor="pointer">Real Estate</Text></a>
    <a href="https://www.linkedin.com/company/zenoo.in/" target="blank">
    <Text fontSize="16px" fontWeight="500" cursor="pointer">Financial Advisory</Text></a>
    <a href="https://www.linkedin.com/company/zenoo.in/" target="blank">
    <Text fontSize="16px" fontWeight="500" cursor="pointer">Insurance Solution</Text></a>
    <a href="https://www.linkedin.com/company/zenoo.in/" target="blank">
    <Text fontSize="16px" fontWeight="500" cursor="pointer">Legal Assistance </Text></a>
    </Stack>
    <Stack gap="10px">
    <Text fontSize="20px" fontWeight="700">Need Help</Text>
    {/* <ScrollToFAQLink to='/home'>
    <Text fontSize="16px" fontWeight="500" cursor="pointer"> FAQs</Text>
    </ScrollToFAQLink> */}
    {/* <ScrollToReviewLink to='/about'> */}
    <Text fontSize="16px" fontWeight="500" cursor="pointer"> Testimonials</Text>
    {/* </ScrollToReviewLink> */}
    
    <Text fontSize="20px" fontWeight="700" paddingTop="20px"> Policy Info</Text>
    {/* <ScrollToTopLink to='/privacy'> */}
    <Text fontSize="16px" fontWeight="500" cursor="pointer">Privacy Policy</Text>
    {/* </ScrollToTopLink> */}
    {/* <ScrollToTopLink to='/terms'> */}
    <Text fontSize="16px" fontWeight="500" cursor="pointer">Terms of Use</Text>
    {/* </ScrollToTopLink> */}
    </Stack>
    
  </Stack>

  <Text textAlign='center' pt={5} color='white'>Created by Laudco Media</Text>
  {/* <Text textAlign={'right'}>@all right reserved</Text> */}
</div>
  );
};

export default Footer;