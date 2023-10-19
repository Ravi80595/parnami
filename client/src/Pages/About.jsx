import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Navbar2 from '../Components/Navbar2'
import Footer from '../Components/Footer'



const About = () => {


return (
    <Box>
        <Navbar2/>
        <Box w={'100%'}>
            <Image w={'100%'} src='https://kyiv.wpresidence.net/wp-content/uploads/2022/03/team2-e1648108354549.jpg'/>
        </Box>
        <Box pt={'120px'} w={'50%'} m={'auto'} textAlign={'center'}>
        <Heading fontSize={'33px'} fontWeight={'700'} lineHeight={'2.2rem'} fontFamily={'roboto,Sans-serif'}>
        About our company
        </Heading>
        <Text color={'#696969'} fontSize={'16px'} fontWeight={'600'} lineHeight={'1.6em'} mt={'20px'}>
        Utilizing our exceptional experience and knowledge of the luxury waterfront markets,we serve an extensive and elite worldwide client base. 
        </Text>
      </Box>
      <Box w={'75%'} m={'auto'} mt={'80px'} mb={'90px'}>
        <Flex justifyContent={'space-between'}>
            <Box w={'47%'}>
            <Text fontFamily={'"Roboto", Sans-serif'} fontSize={'20px'} fontWeight={'600'} lineHeight={'1.1em'} mb={'10px'}>Our Mission</Text>
            <Text color={'#696969'} fontSize={'18px'} fontWeight={'400'} lineHeight={'1.6em'}>With over $2 Billion in sales, Our agency is the industry’s top luxury producer with over 27 years of experience in marketing Seattles’s most prestigious waterfront properties. </Text>
            </Box>
            <Box w={'47%'}>
            <Text fontFamily={'"Roboto", Sans-serif'} fontSize={'20px'} fontWeight={'600'} lineHeight={'1.1em'} mb={'10px'}>Our Vision</Text>
            <Text color={'#696969'} fontSize={'18px'} fontWeight={'400'} lineHeight={'1.6em'}>Due to our unparalleled results, expertise and dedication, we rank amongst the Top 6 agencies in Seattle and our area. She is also and is an elite member to Corcoran’s Presidents Council.  </Text>
            </Box>
        </Flex>
        <Flex justifyContent={'space-between'} mt={'90px'}>
            <Box w={'47%'}>
            <Text fontFamily={'"Roboto", Sans-serif'} fontSize={'20px'} fontWeight={'600'} lineHeight={'1.1em'} mb={'10px'}>Our Values</Text>
            <Text color={'#696969'} fontSize={'18px'} fontWeight={'400'} lineHeight={'1.6em'}>With her years of experience, impressive property portfolio, celebrity clientele, and unparalleled knowledge of the market and pedigree estates, Simone estimable business is sophisticated and renowned. </Text>
            </Box>
            <Box w={'47%'}>
            <Text fontFamily={'"Roboto", Sans-serif'} fontSize={'20px'} fontWeight={'600'} lineHeight={'1.1em'} mb={'10px'}>Our Resources</Text>
            <Text color={'#696969'} fontSize={'18px'} fontWeight={'400'} lineHeight={'1.6em'}>With her years of experience, impressive property portfolio, celebrity clientele, and unparalleled knowledge of the market and pedigree estates, Simone estimable business is sophisticated and renowned.</Text>
            </Box>
        </Flex>
      </Box>

{/* ********************************** Team ******************************************** */}
<Box background={'#f8f8f8'} pb={'40px'}>
      <Box pt={'100px'} w={'50%'} m={'auto'} textAlign={'center'} pb={'60px'} background={'#f8f8f8'}>
        <Heading fontSize={'33px'} fontWeight={'700'} lineHeight={'2.2rem'} fontFamily={'roboto,Sans-serif'}>
        Meet Our Team
        </Heading>
        <Text color={'#696969'} fontSize={'16px'} fontWeight={'600'} lineHeight={'1.6em'} mt={'20px'}>
        If you want the best care possible for your real estate needs, our certified professionals are here to help
        </Text>
      </Box>

      <Box w={'70%'} m='auto' mt={'70px'} backgroundColor={'#f8f8f8'}>
        <Flex justifyContent={'space-around'} backgroundColor={'#f8f8f8'} gap={'50px'}>
          <Box background={'white'} borderRadius={'10px'} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'>
            <Image p={'10px'} borderRadius={'10px'} src='https://kyiv.wpresidence.net/wp-content/uploads/2014/05/person9-500x328.jpeg'/>
            <Box p={'15px'}>
            <Text fontFamily={'roboto,Sans-serif'} fontSize={'20px'} fontWeight={'700'} color={'#030303'} pt={'5px'}  >Michael Rutter</Text>
            <Text color={'#696969'} fontSize={'14px'} fontWeight={'400'} lineHeight={'1.6em'} pb={'10px'}>
              Buying agent
            </Text>
            <Text color={'#696969'} fontSize={'14px'} fontWeight={'400'} lineHeight={'1.6em'}>
              Get a free evaluation before selling before your home.
            </Text>
            <Button mt={'25px'} backgroundColor='#cbb26a' color={'white'}>Read more</Button>
            </Box>
          </Box>
          <Box background={'white'} borderRadius={'10px'} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'>
            <Image p={'10px'} borderRadius={'10px'} src='https://kyiv.wpresidence.net/wp-content/uploads/2014/05/person-10-500x328.jpg'/>
            <Box p={'15px'}>
            <Text fontFamily={'roboto,Sans-serif'} fontSize={'20px'} fontWeight={'700'} color={'#030303'} pt={'5px'}  >Michael Rutter</Text>
            <Text color={'#696969'} fontSize={'14px'} fontWeight={'400'} lineHeight={'1.6em'} pb={'10px'}>
              Buying agent
            </Text>
            <Text color={'#696969'} fontSize={'14px'} fontWeight={'400'} lineHeight={'1.6em'}>
              Get a free evaluation before selling before your home.
            </Text>
            <Button mt={'25px'} backgroundColor='#cbb26a' color={'white'}>Read more</Button>
            </Box>
          </Box>
          <Box background={'white'} borderRadius={'10px'} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'>
            <Image p={'10px'} borderRadius={'10px'} src='https://kyiv.wpresidence.net/wp-content/uploads/2014/05/person3-4-500x328.jpg'/>
            <Box p={'15px'}>
            <Text fontFamily={'roboto,Sans-serif'} fontSize={'20px'} fontWeight={'700'} color={'#030303'} pt={'5px'}  >Michael Rutter</Text>
            <Text color={'#696969'} fontSize={'14px'} fontWeight={'400'} lineHeight={'1.6em'} pb={'10px'}>
              Buying agent
            </Text>
            <Text color={'#696969'} fontSize={'14px'} fontWeight={'400'} lineHeight={'1.6em'}>
              Get a free evaluation before selling before your home.
            </Text>
            <Button mt={'25px'} backgroundColor='#cbb26a' color={'white'}>Read more</Button>
            </Box>
          </Box>
        </Flex>
       </Box>
       </Box>


{/* ********************************   Testimonials ************************************ */}

<Box pt={'100px'} w={'50%'} m={'auto'} textAlign={'center'} pb={'60px'}>
        <Heading fontSize={'33px'} fontWeight={'700'} lineHeight={'2.2rem'} fontFamily={'roboto,Sans-serif'}>
        Testimonials
        </Heading>
        <Text color={'#696969'} fontSize={'16px'} fontWeight={'600'} lineHeight={'1.6em'} mt={'20px'}>
        Publish the best of your client testimonials and let the world know what a great agent or real estate agency you are. Testimonials build trust        </Text>
      </Box>




    <Footer/>
    </Box>

  )
}

export default About