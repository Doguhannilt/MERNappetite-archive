import axios from 'axios';
import React from 'react';
export const useCreateMyRestaurant = () => {
    axios.defaults.withCredentials = true
   

    const createMyRestaurantRequestApi = async (restaurantFormData) => {
        try {
            

            const response = await axios.post("http://localhost:7000/api/my/restaurant", restaurantFormData);

            if (response.status !== 200) {
                throw new Error("Request failed with status " + response.status);
            }

            return response.data;
        } catch (error) {
            console.error("Error creating restaurant:", error);
            throw error; 
        }
    };

    return { createMyRestaurantRequestApi };
};