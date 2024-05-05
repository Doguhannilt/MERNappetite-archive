import React from 'react';
import { useFormContext } from 'react-hook-form';

const ImageSection = () => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div>
            <h2 className='text-2xl mt-6 font-bold'>Images</h2>
            <div className='border rounded p-4 mb-6 flex flex-col gap-4'>
                <input
                    type="file"
                    multiple
                    accept='image/*'
                    className='w-40 text-gray-700 font-normal'
                    {...register("imageFiles", {
                        validate: (imageFiles) => {
                            if (!imageFiles || imageFiles.length === 0) {
                                return "At least one image should be added";
                            }
                            if (imageFiles.length > 6) {
                                return "Total number of images cannot be more than 6";
                            }
                            return true;
                        }
                    })}
                />
            </div>
            {errors.imageFiles && (
                <span className='text-red-500 mb-4 text-sm font-bold'>
                    {errors.imageFiles.message}
                </span>
            )}
        </div>
    );
};

export default ImageSection;
