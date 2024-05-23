import React from 'react'
import { useFormContext } from 'react-hook-form'
import { cuisineList } from '../../config/restaurant-options-config'

const CuisinesSection = () => {
    const { register, formState: { errors } } = useFormContext()
    return (
        <div>
            <h2 className="text-2xl font-bold mb-3 mt-6">Cuisines</h2>
            <div className="grid grid-cols-5 gap-3">
                {cuisineList.map((cuisine, index) => (
                    <label key={index} className="text-sm flex gap-1 text-gray-500 cursor-pointer">
                        <input
                            type="checkbox"
                            name="cuisines"
                            defaultValue={cuisine}
                            {...register("cuisines", {
                                validate: (cuisines) => {
                                    if (cuisines && cuisines.length > 0) return true;
                                    return "At least one cuisine is required";
                                }
                            })}
                        />
                        {cuisine}
                        
                    </label>
                ))}
            </div>
            {errors.cuisines && (
                <span className="text-red-500 text-sm font-bold">{errors.cuisines.message}</span>
            )}
        </div>
    )
}

export default CuisinesSection
