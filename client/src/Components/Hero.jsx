import React from 'react';
import { Box, Image, Text, Stack, Input, Button, Center, Heading, Flex } from '@chakra-ui/react';
import {AiOutlineCheck} from 'react-icons/ai'
import Navbar from './Navbar';
import {GiCrystalGrowth} from 'react-icons/gi'
import '../CSS/Hero.css'


const Hero = () => {


return (
    <Box position="relative" backgroundColor={'#f8f8f8'}>
      <Navbar />
      <Box position="relative">
        <Image
          src="https://kyiv.b-cdn.net/wp-content/uploads/2022/03/header3-e1647596119347.jpeg"
          w="100%"
          h="90vh"
          objectFit="cover"
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="black"
          opacity="0.5"
        />
      </Box>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
        color="white"
        zIndex="1"
        
      >
        <Text fontSize="3xl" fontWeight="bold">
          Your Heading
        </Text>
        <Text fontSize="lg">Your Subheading</Text>
      </Box>
      <Center position="absolute" top="83vh" w="100%" zIndex="1">
        <Box w="70%" background="white" p={6} borderRadius={'10px'} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'>
          <form>
            <Stack direction="row" m="auto">
              <Input placeholder="Name" />
              <Input placeholder="Email" />
              <Button colorScheme="blue" type="submit">
                Submit
              </Button>
            </Stack>
          </form>
        </Box>
      </Center>
      <Box pt={'120px'} w={'50%'} m={'auto'} textAlign={'center'} backgroundColor={'#f8f8f8'}>
        <Heading fontSize={'33px'} fontWeight={'700'} lineHeight={'2.2rem'} fontFamily={'roboto,Sans-serif'}>
        We offer a complete spectrum
          of services for your real estate needs
        </Heading>
        <Text color={'#696969'} fontSize={'16px'} fontWeight={'600'} lineHeight={'1.6em'} mt={'20px'}>
        We help our clients sell, buy or rent properties hassle free. Due to our unparalleled results, expertise and dedication, we rank amongst the top 6 agencies in Pranami.
        </Text>
      </Box>
      <Box w={'70%'} m='auto' mt={'90px'} backgroundColor={'#f8f8f8'}>
        <Flex justifyContent={'space-around'} backgroundColor={'#f8f8f8'} gap={'50px'}>
          <Box background={'white'} p='35px' borderRadius={'10px'} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'>
            <GiCrystalGrowth fontSize={'50px'}/>
            <Text fontFamily={'roboto,Sans-serif'} fontSize={'20px'} fontWeight={'500'} color={'#030303'} pt={'10px'}  >Sell your home</Text>
            <Text color={'#696969'} fontSize={'14px'} fontWeight={'400'} lineHeight={'1.6em'}>
              Get a free evaluation before selling before your home.
            </Text>
            <Box w={'60%'}>
              <Flex mt={'15px'} justifyContent={'space-around'}>
                <AiOutlineCheck/>
                <Text color={'#696969'} fontSize={'14px'} fontWeight={'400'} lineHeight={'1.6em'}>Transfer of title</Text>
              </Flex>
              <Flex mt={'15px'} justifyContent={'space-around'}>
                <AiOutlineCheck/>
                <Text color={'#696969'} fontSize={'14px'} fontWeight={'400'} lineHeight={'1.6em'}>Transfer of title</Text>
              </Flex>
              <Flex mt={'15px'} justifyContent={'space-around'}>
                <AiOutlineCheck/>
                <Text color={'#696969'} fontSize={'14px'} fontWeight={'400'} lineHeight={'1.6em'}>Transfer of title</Text>
              </Flex>
            </Box>
            <Button mt={'25px'} backgroundColor='#cbb26a' color={'white'}>Read more</Button>
          </Box>
          <Box background={'white'} p='35px' borderRadius={'10px'} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'>
            <GiCrystalGrowth fontSize={'50px'}/>
            <Text fontFamily={'roboto,Sans-serif'} fontSize={'20px'} fontWeight={'500'} color={'#030303'} pt={'10px'}  >Sell your home</Text>
            <Text color={'#696969'} fontSize={'14px'} fontWeight={'400'} lineHeight={'1.6em'}>
              Get a free evaluation before selling before your home.
            </Text>
            <Box w={'60%'}>
              <Flex mt={'15px'} justifyContent={'space-around'}>
                <AiOutlineCheck/>
                <Text color={'#696969'} fontSize={'14px'} fontWeight={'400'} lineHeight={'1.6em'}>Transfer of title</Text>
              </Flex>
              <Flex mt={'15px'} justifyContent={'space-around'}>
                <AiOutlineCheck/>
                <Text color={'#696969'} fontSize={'14px'} fontWeight={'400'} lineHeight={'1.6em'}>Transfer of title</Text>
              </Flex>
              <Flex mt={'15px'} justifyContent={'space-around'}>
                <AiOutlineCheck/>
                <Text color={'#696969'} fontSize={'14px'} fontWeight={'400'} lineHeight={'1.6em'}>Transfer of title</Text>
              </Flex>
            </Box>
            <Button mt={'25px'} backgroundColor='#cbb26a' color={'white'}>Read more</Button>
          </Box>
          <Box background={'white'} p='35px' borderRadius={'10px'} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'>
            <GiCrystalGrowth fontSize={'50px'}/>
            <Text fontFamily={'roboto,Sans-serif'} fontSize={'20px'} fontWeight={'500'} color={'#030303'} pt={'10px'}  >Sell your home</Text>
            <Text color={'#696969'} fontSize={'14px'} fontWeight={'400'} lineHeight={'1.6em'}>
              Get a free evaluation before selling before your home.
            </Text>
            <Box w={'60%'}>
              <Flex mt={'15px'} justifyContent={'space-around'}>
                <AiOutlineCheck/>
                <Text color={'#696969'} fontSize={'14px'} fontWeight={'400'} lineHeight={'1.6em'}>Transfer of title</Text>
              </Flex>
              <Flex mt={'15px'} justifyContent={'space-around'}>
                <AiOutlineCheck/>
                <Text color={'#696969'} fontSize={'14px'} fontWeight={'400'} lineHeight={'1.6em'}>Transfer of title</Text>
              </Flex>
              <Flex mt={'15px'} justifyContent={'space-around'}>
                <AiOutlineCheck/>
                <Text color={'#696969'} fontSize={'14px'} fontWeight={'400'} lineHeight={'1.6em'}>Transfer of title</Text>
              </Flex>
            </Box>
            <Button mt={'25px'} backgroundColor='#cbb26a' color={'white'}>Read more</Button>
          </Box>
        </Flex>
      </Box>


      <Box pt={'120px'} w={'50%'} m={'auto'} textAlign={'center'} backgroundColor={'#f8f8f8'}>
        <Heading fontSize={'33px'} fontWeight={'700'} lineHeight={'2.2rem'} fontFamily={'roboto,Sans-serif'}>
        Discover the latest properties in Pranami available for rent or sale
        </Heading>
        <Text color={'#696969'} fontSize={'16px'} fontWeight={'600'} lineHeight={'1.6em'} mt={'20px'}>
        We are very proud of the service we provide and what our guests have to say about us. Our locations and services prove we are the best.
        </Text>
      </Box>


       {/* ************************ Listnings ********************************* */}
       <Box w={'70%'} m='auto' mt={'90px'} backgroundColor={'#f8f8f8'}>
        <Flex justifyContent={'space-around'} backgroundColor={'#f8f8f8'} gap={'50px'}>
          <Box background={'white'} borderRadius={'10px'} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'>
            <Image borderTopRadius={'10px'} src='https://kyiv.b-cdn.net/wp-content/uploads/2014/05/interior50_1-525x328.jpg'/>
            <Box p={'15px'}>
            <Text fontFamily={'roboto,Sans-serif'} fontSize={'20px'} fontWeight={'700'} color={'#030303'} pt={'10px'}  >Modern Condo for rent</Text>
            <Text color={'#696969'} fontSize={'14px'} fontWeight={'400'} lineHeight={'1.6em'}>
              Get a free evaluation before selling before your home.
            </Text>
            <Button mt={'25px'} backgroundColor='#cbb26a' color={'white'}>Read more</Button>
            </Box>
          </Box>
          <Box background={'white'} borderRadius={'10px'} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'>
            <Image borderTopRadius={'10px'} src='https://kyiv.b-cdn.net/wp-content/uploads/2014/05/interior50_1-525x328.jpg'/>
            <Box p={'15px'}>
            <Text fontFamily={'roboto,Sans-serif'} fontSize={'20px'} fontWeight={'700'} color={'#030303'} pt={'10px'}  >Modern Condo for rent</Text>
            <Text color={'#696969'} fontSize={'14px'} fontWeight={'400'} lineHeight={'1.6em'}>
              Get a free evaluation before selling before your home.
            </Text>
            <Button mt={'25px'} backgroundColor='#cbb26a' color={'white'}>Read more</Button>
            </Box>
          </Box>
          <Box background={'white'} borderRadius={'10px'} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'>
            <Image borderTopRadius={'10px'} src='https://kyiv.b-cdn.net/wp-content/uploads/2014/05/interior50_1-525x328.jpg'/>
            <Box p={'15px'}>
            <Text fontFamily={'roboto,Sans-serif'} fontSize={'20px'} fontWeight={'700'} color={'#030303'} pt={'10px'}  >Modern Condo for rent</Text>
            <Text color={'#696969'} fontSize={'14px'} fontWeight={'400'} lineHeight={'1.6em'}>
              Get a free evaluation before selling before your home.
            </Text>
            <Button mt={'25px'} backgroundColor='#cbb26a' color={'white'}>Read more</Button>
            </Box>
          </Box>
        </Flex>
       </Box>
       <Box w={'70%'} m='auto' mt={'90px'} backgroundColor={'#f8f8f8'}>
        <Flex justifyContent={'space-around'} backgroundColor={'#f8f8f8'} gap={'50px'}>
          <Box background={'white'} borderRadius={'10px'} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'>
            <Image borderTopRadius={'10px'} src='https://kyiv.b-cdn.net/wp-content/uploads/2014/05/interior50_1-525x328.jpg'/>
            <Box p={'15px'}>
            <Text fontFamily={'roboto,Sans-serif'} fontSize={'20px'} fontWeight={'700'} color={'#030303'} pt={'10px'}  >Modern Condo for rent</Text>
            <Text color={'#696969'} fontSize={'14px'} fontWeight={'400'} lineHeight={'1.6em'}>
              Get a free evaluation before selling before your home.
            </Text>
            <Button mt={'25px'} backgroundColor='#cbb26a' color={'white'}>Read more</Button>
            </Box>
          </Box>
          <Box background={'white'} borderRadius={'10px'} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'>
            <Image borderTopRadius={'10px'} src='https://kyiv.b-cdn.net/wp-content/uploads/2014/05/interior50_1-525x328.jpg'/>
            <Box p={'15px'}>
            <Text fontFamily={'roboto,Sans-serif'} fontSize={'20px'} fontWeight={'700'} color={'#030303'} pt={'10px'}  >Modern Condo for rent</Text>
            <Text color={'#696969'} fontSize={'14px'} fontWeight={'400'} lineHeight={'1.6em'}>
              Get a free evaluation before selling before your home.
            </Text>
            <Button mt={'25px'} backgroundColor='#cbb26a' color={'white'}>Read more</Button>
            </Box>
          </Box>
          <Box background={'white'} borderRadius={'10px'} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'>
            <Image borderTopRadius={'10px'} src='https://kyiv.b-cdn.net/wp-content/uploads/2014/05/interior50_1-525x328.jpg'/>
            <Box p={'15px'}>
            <Text fontFamily={'roboto,Sans-serif'} fontSize={'20px'} fontWeight={'700'} color={'#030303'} pt={'10px'}  >Modern Condo for rent</Text>
            <Text color={'#696969'} fontSize={'14px'} fontWeight={'400'} lineHeight={'1.6em'}>
              Get a free evaluation before selling before your home.
            </Text>
            <Button mt={'25px'} backgroundColor='#cbb26a' color={'white'}>Read more</Button>
            </Box>
          </Box>
        </Flex>
       </Box> 
        <Flex justifyContent={'center'} mt={'20px'}>
        <Button mt={'25px'} backgroundColor='#cbb26a' color={'white'}>Load more</Button>
        </Flex>





        {/* ************************** Gallery ******************************* */}
        <Box pt={'120px'} w={'50%'} m={'auto'} textAlign={'center'} backgroundColor={'#f8f8f8'}>
        <Heading fontSize={'33px'} fontWeight={'700'} lineHeight={'2.2rem'} fontFamily={'roboto,Sans-serif'}>
        We offer a complete spectrum
          of services for your real estate needs
        </Heading>
        <Text color={'#696969'} fontSize={'16px'} fontWeight={'600'} lineHeight={'1.6em'} mt={'20px'}>
        We help our clients sell, buy or rent properties hassle free. Due to our unparalleled results, expertise and dedication, we rank amongst the top 6 agencies in Pranami.
        </Text>
      </Box>

      <Box>
      <div className="grid-container">
      <div className="grid-item grid-item-1">
        <span className="image-name">Image 1</span>
      </div>
      <div className="grid-item grid-item-2">
        <span className="image-name">Image 2</span>
      </div>
      <div className="grid-item grid-item-3">
        <span className="image-name">Image 3</span>
      </div>
      <div className="grid-item grid-item-4">
        <span className="image-name">Image 4</span>
      </div>
      <div className="grid-item grid-item-5">
        <span className="image-name">Image 5</span>
      </div>
      <div className="grid-item grid-item-6">
        <span className="image-name">Image 6</span>
      </div>
    </div>
      </Box>

    </Box>  
  );
};

export default Hero;
