import React, { useEffect } from 'react'
import {Auth0Provider, useAuth0} from '@auth0/auth0-react'
import axios from 'axios'

const Auth0ProviderWithNavigate = ({children}) => {

  const { user } = useAuth0();
    console.log(user)


      const domain = import.meta.env.VITE_AUTH0_DOMAIN
      const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID
      const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL
      const audience = import.meta.env.VITE_AUTH_AUDIENCE

      if(!domain || !clientId || !redirectUri || !audience) {throw new Error("Unable to initlaise AUTH")}

      const auth0config = {
        domain: domain,
        clientId: clientId,
        authorizationParams: {
          redirect_uri: redirectUri,
          audience
        }
      };
    
      return <Auth0Provider {...auth0config}>{children}</Auth0Provider>;
}

export default Auth0ProviderWithNavigate
