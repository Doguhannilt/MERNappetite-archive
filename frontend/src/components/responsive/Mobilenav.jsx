import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Mobilenav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  return (
    <div>
       <Button ref={btnRef} colorScheme='red'  onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Are you hungary?!</DrawerHeader>

          <DrawerBody>
           <Link to={"/login"} className='font-bold font-mono'>
            Login!
           </Link>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default Mobilenav
