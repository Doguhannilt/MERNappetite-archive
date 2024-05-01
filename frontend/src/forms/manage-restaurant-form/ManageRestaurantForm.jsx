import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import axios from 'axios'


// PAGES
import DetailsSection from './DetailsSection'


const ManageRestaurantForm = () => {

    const formMethods = useForm()
    const {handleSubmit} = formMethods
    axios.defaults.withCredentials = true


    const onSubmit = handleSubmit(async (formDataJson) => {
        try {
            
            const formData = new FormData()

            formData.append("restaurantName", formDataJson.restaurantName)
            formData.append("city", formDataJson.city.toString())
            formData.append("country", formDataJson.country)
            formData.append("deliveryPrice", formDataJson.deliveryPrice.toString()); 
            formData.append("estimatedDeliveryTime", formDataJson.estimatedDeliveryTime.toString());
            formData.append("cuisines", formDataJson.cuisines.join(","));
            formData.append("menuItems", JSON.stringify(formDataJson.menuItems));
            
            Array.from(formDataJson.imageFiles).forEach((imageFile) => {
                formData.append(`imageFiles`, imageFile);
            });
            

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

            <DetailsSection/>


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
