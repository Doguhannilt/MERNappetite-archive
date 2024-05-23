import React from 'react'
import { useFormContext } from 'react-hook-form'


const DetailsSection = () => {
    const {register, formState: {errors}} = useFormContext()

    return (
        <div className='space-y-2'>
            <div>
                <h2 className='text-2xl font-bold'>Details</h2>
            </div>

             {/* Restaurant Name field */}
          <label className="text-sm font-bold xl:grid">
          Restaurant Name
          <input
            type="text"
            placeholder="the Moon"
            name='restaurantName'
            autoFocus
            className="border-2 border-white rounded pt-2 bg-inherit w-80  mt-4 focus py-1 px-2 font-normal"
            {...register('restaurantName', { required: 'This field is required' })}/>
          {errors.restaurantName && <span className="text-red-500 pl-2">{errors.restaurantName.message}</span>}
            </label>

        <div className='xl:grid xl:grid-cols-2'>

            {/* City Field */}
        <label className="text-sm font-bold xl:grid">
          City
          <input
              type="text"
              name='city'
              placeholder='Istanbul'             
              className="border-2 border-white rounded pt-2 bg-inherit w-80  mt-4 focus py-1 px-2 font-normal"           
            {...register('city', 
            { required: 'This field is required' })}/>
            {errors.city &&
            <span className="text-red-500 pl-2">{errors.city.message}</span>}
        </label>


             {/* Country Field */}
        <label className="text-sm font-bold xl:grid">
          Country
          <input
              type="text"
              name="country"
              placeholder='Turkey'
              className="border-2 border-white rounded pt-2 bg-inherit w-80  mt-4 focus py-1 px-2 font-normal"
            {...register('country', 
            { required: 'This field is required' })}/>
            {errors.country && 
            <span className="text-red-500 pl-2">{errors.country.message}</span>}
        </label>
        </div>


        <div className='xl:grid xl:grid-cols-2'>
             {/* deliveryPrice Field */}
        <label className="text-sm font-bold grid">
          Delivery Price
          <input
              type="number"
              name="deliveryPrice"
              placeholder='16 €'
              className="border-2 border-white rounded pt-2 bg-inherit w-80  mt-4 focus py-1 px-2 font-normal"          
            {...register('deliveryPrice', 
            { required: 'This field is required' })}/>
            {errors.deliveryPrice && 
            <span className="text-red-500 pl-2">{errors.deliveryPrice.message}</span>}
        </label>


             {/* estimatedDeliveryTime Field */}
        <label className="text-sm font-bold grid">
          Estimated Delivery Time (minutes)
          <input
            type="number"
              max="60"
              name='estimatedDeliveryTime'
              placeholder='20'
              className="border-2 border-white rounded pt-2 bg-inherit w-80  mt-4 focus py-1 px-2 font-normal"
            {...register('estimatedDeliveryTime',
            { required: 'This field is required', 
            min: { value: 1, message: 'Minimum value is 1' },
            max: { value: 60, message: 'Maximum value is 60' }})}/>
            {errors.estimatedDeliveryTime && 
            <span className="text-red-500 pl-2">{errors.estimatedDeliveryTime.message}</span>}
        </label>
        </div>
        </div>
    )
}

export default DetailsSection

