import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'


// PAGES
import DetailsSection from './DetailsSection'
import CuisinesSection from './CuisinesSection'
import MenuSection from './MenuSection'
import ImageSection from './ImageSection'
import { forumFill } from '../../fetch/Fetch'


const ManageRestaurantForm = () => {

  const formMethods = useForm(); 
    const { handleSubmit } = formMethods; 

    
    const onSubmit = handleSubmit(async (formDataJson) => {
      try {
          
          const formData = new FormData();

          formData.append("restaurantName", formDataJson.restaurantName);
          formData.append("city", formDataJson.city);
          formData.append("country", formDataJson.country);
      
          formData.append(
            "deliveryPrice",
            (formDataJson.deliveryPrice * 100).toString());

          formData.append(
            "estimatedDeliveryTime",
            formDataJson.estimatedDeliveryTime.toString());
          
          formData.append("cuisines", formDataJson.cuisines)

          formDataJson.menuItems.forEach((menuItem, index) => {
            formData.append(`menuItems[${index}][name]`, menuItem.name);
            formData.append(
              `menuItems[${index}][price]`,
              (menuItem.price * 100).toString()
            );
          });

        console.log(formDataJson.menuItems)
       formDataJson.menuItems.forEach((menuItem, index) => {
        formData.append(`menuItems[${index}][name]`, menuItem.name);
        formData.append(
          `menuItems[${index}][price]`,
          (menuItem.price * 100).toString()
        );
      });

      if (formDataJson.imageFiles && formDataJson.imageFiles.length > 0) {
        Array.from(formDataJson.imageFiles).forEach((file, index) => {
          formData.append(`imageFiles[${index}]`, file);
        });
      }
      
      console.log(formData)
        await forumFill("http://localhost:7000/api/my/restaurant", formData);

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
          <CuisinesSection/>
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
