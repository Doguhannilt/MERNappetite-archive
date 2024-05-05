import React from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'

const MenuSection = () => {
    const { register, formState: { errors } } = useFormContext()
    const { fields, append, remove } = useFieldArray({
        name: "menuItems",
    })

    const handleAddItem = () => {
        append({ name: "", price: "" }); // Yeni bir öğe eklemek için append fonksiyonunu kullanıyoruz
    };

    return (
        <div>
            <div className='space-y-2'>
                <div>
                    <h2 className='text-2xl font-bold pt-4'>Menu</h2>
                </div>

                <div className='flex flex-col gap-2'>
                    {fields.map((item, index) => (
                        <div key={item.id} className="flex gap-2 items-center">
                            <input
                                type="text"
                                placeholder="Name"
                                className='bg-inherit border-white border-2 rounded'
                                {...register(`menuItems[${index}].name`)}
                            />
                            <input
                                type="text"
                                className='bg-inherit border-white border-2 rounded'
                                placeholder="Price"
                                {...register(`menuItems[${index}].price`)}
                            />
                            <button type="button" className='font-bold btn' onClick={() => remove(index)}>Remove</button> 
                        </div>
                    ))}
                    <button type="button" className='btn mb-10 mt-4' onClick={handleAddItem}>Add Item</button> 
                </div>
            </div>
        </div>
    )
}

export default MenuSection
