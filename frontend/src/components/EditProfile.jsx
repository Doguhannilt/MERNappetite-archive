import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Box, useToast } from '@chakra-ui/react'

const EditProfile = () => {
    const { user } = useAuth0();
    const [profile, setProfile] = useState({});
    const email = user?.email
    const toast = useToast()
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (user && user.email) {
            axios.put(`http://localhost:7000/api/my/user/update/${email}`, profile)
                .then(res => {
                    console.log(res.data);
                    console.log(profile.address)
                    console.log(profile)
                })
                .catch(err => {
                    console.error(err);
                });
        }
    };

    return (
        <div className=''>
            <h1 className="text-3xl font-bold mb-10 mt-10">Edit Your Profile</h1>

                {/* EMAIL */}
            <span className='text-2xl'>-  {email}</span>

            <form 
            className=''
            onSubmit={handleSubmit}>
                {/* Name field */}
                <label className=" text-white text-md font-bold flex-1">
                    Name
                    <input
                        type="text"
                        className="border rounded w-full py-1 px-2 font-normal bg-inherit"
                        value={profile.name || ''}
                        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    />
                </label>

                {/* Address field */}
                <label className="text-white  bg-transparent text-md font-bold flex-1">
                    Adress
                    <input
                        type="text"
                        className="border rounded w-full py-1 px-2 font-normal bg-inherit"
                        value={profile.address || ''}
                        onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                    />
                </label>


                {/* Gender field */}
                <label className="text-white text-md font-bold flex-1 mb-2">
                    Gender
                    <select
                        id="gender" 
                        name='gender'
                        className="border rounded w-full py-1 px-2 font-normal bg-inherit"
                        value={profile.gender || ''}
                        onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
                   >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    </select> 
                </label>
                <button
                    class='btn bg-green-400 text-black mt-2 hover:bg-green-300'
                    type="submit"
                    onClick={() =>
                        toast({
                          title: "We've updated your account for you.",
                          status: 'success',
                          duration: 9000,
                          isClosable: true,
                        })
                      }>
                    Update
                </button>
            </form>
        </div>
    );
};

export default EditProfile;
