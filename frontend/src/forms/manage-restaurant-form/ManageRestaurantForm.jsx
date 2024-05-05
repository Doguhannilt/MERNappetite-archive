import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import axios from 'axios'


// PAGES
import DetailsSection from './DetailsSection'
import CuisinesSection from './CuisinesSection'
import MenuSection from './MenuSection'
import ImageSection from './ImageSection'
import { useCreateMyRestaurant } from './MyRestaurantApi'


const ManageRestaurantForm = () => {
  axios.defaults.withCredentials = true

    const formMethods = useForm()
    const {handleSubmit} = formMethods
    


    const onSubmit = handleSubmit(async (formDataJson) => {
        try {
            
            const formData = new FormData()
            formData.append("restaurantName", formDataJson.restaurantName);
            formData.append("city", formDataJson.city);
            formData.append("country", formDataJson.country);
            formData.append("deliveryPrice", formDataJson.deliveryPrice); // required değilse parseFloat gerekmez
            formData.append("estimatedDeliveryTime", formDataJson.estimatedDeliveryTime);
            formData.append("cuisines", formDataJson.cuisines); // JSON.stringify gerekmez
            formData.append("menuItems", formDataJson.menuItems); // 2
        

          // cuisines -> object
          // imagefile -> undefined
          // menuItems -> object

          

            // const response = await axios.post("http://localhost:7000/", formData, {
            //     headers: {
            //         "Content-Type": "multipart/form-data",            
            //     }         
            // });

        } catch (err) {
          console.log(err)
          
        }
    })


  return (
    <div>
      <FormProvider {...formMethods}>
            <form onSubmit={onSubmit}>

            {/* FORM COMPONENTS */}

          <DetailsSection />
          <CuisinesSection />
          <MenuSection />
          <ImageSection />


            <span className='flex justify-end'>
                      <button type="submit" className='bg-red-600  text-white h-full mb-10 w-40 rounded hover:rounded-md hover:duration-300 duration-300 p-2 font-bold hover:bg-red-500 cursor-pointer text-2xl'>
                          Save
                     </button>
            </span>
            </form>
      </FormProvider>
    </div>
  )
}

export default ManageRestaurantForm
