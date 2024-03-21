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
import { useAuth0 } from '@auth0/auth0-react'
import UsernameMenu from './UsernameMenu'


const Mobilenav = () => {
    const {loginWithRedirect, isAuthenticated } = useAuth0()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  return (
    <span className='flex space-x-2 items-center'>
    {isAuthenticated 
    ?  <UsernameMenu  /> 
    : <div>
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
           <button onClick={async () => await loginWithRedirect()} className='font-bold font-mono'>
            Login!
           </button>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </div>}
  </span>
    
  )
}

export default Mobilenav
