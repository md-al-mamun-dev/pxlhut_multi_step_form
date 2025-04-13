"use client"
import Form from "next/form"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useQueryClient, useQuery } from "@tanstack/react-query"


export default function AddressDetails() {
    const formSchema = z.object({
        streetAddress: z.string().min( 1, { message: "Street Address is required" }),
        city: z.string().min( 1, { message: "City is required" }),
        zipCode: z.string().min(4, { message: "Zip Code must be at least 4 digits" })
                                .regex(/^\d+$/, { message: "Zip Code must be digits only" }),
    })
    const queryClient = useQueryClient();


    const { streetAddress, city, zipCode, formSequence } = queryClient.getQueryData(['form_data']);

    const { register, handleSubmit, watch, formState: { errors, isSubmitting,  } } = useForm({
        defaultValues: { streetAddress, city, zipCode },
        resolver: zodResolver(formSchema)
    })

    function backToPrevious(params) {
        const formData = watch();
        queryClient.setQueryData(['form_data'], (prev) => ({...prev, ...formData, formSequence: formSequence -1}))
    }

    const onSubmit = (data) => {
        queryClient.setQueryData(['form_data'], (prev) => ({...prev, ...data, formSequence: 3}))
      };
    
  return (
    <Form onSubmit={handleSubmit(onSubmit)}    className="max-w-2xl mx-auto p-4 rounded-lg ">
        <div className="space-y-4 my-2 py-4">
            <h1 className="text-3xl font-semibold text-gray-500 text-center mb-8 animate-slide-down">
                Address Details
            </h1>
            <hr className="h-px my-8 bg-gray-300 border-0 dark:bg-gray-500" />
            <div className="form-input-wrapper">
                <input className={`form-input ${errors.streetAddress ? 'outline-red-600' : 'form-input-outline'}`} {...register("streetAddress")} placeholder="Enter your Street Address" />
                {   
                    errors.streetAddress 
                        && ( <p className="form-input-error-msg">{errors.streetAddress.message}</p>) 
                }
            </div>
            
            <div className="form-input-wrapper">
                <input className={`form-input ${errors.city ? 'outline-red-600' : 'form-input-outline'}`} {...register("city", )} placeholder="Enter Your City" />
                {
                    errors.city 
                        && (<p className="form-input-error-msg">{errors.city.message}</p>)
                }
            </div>
            
            <div className="form-input-wrapper">
                <input className={`form-input ${errors.zipCode ? 'outline-red-600' : 'form-input-outline'}`} {...register("zipCode")} placeholder="Enter your Zip Code" />
                {
                    errors.zipCode 
                        && (<p className="form-input-error-msg">{errors.zipCode.message}</p>)
                }
            </div>
        </div>
        <div className="flex justify-between mt-8">
            <button onClick={backToPrevious} type="button" disabled={isSubmitting} 
                className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                {"Back"}
            </button>
            <button type="submit" disabled={isSubmitting || Object.keys(errors).length > 0} 
                className={`ml-auto px-6 py-3 w-1/2 rounded-lg  transition 
                    ${isSubmitting || Object.keys(errors).length > 0
                      ? 'bg-gray-300 text-gray-500 opacity-60 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}>
                {"Next"}
            </button>
        </div>        
    </Form>
  )
}

