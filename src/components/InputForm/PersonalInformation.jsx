"use client"
import Form from "next/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useQueryClient } from "@tanstack/react-query"
import FormTitle from "./FormTitle"
import FormValidationSchema from "./ValidationSchemas/PersonalInfoSchema"


export default function PersonalInformation() {
    const queryClient = useQueryClient();
    const { fullName, email, phoneNumber } = queryClient.getQueryData(['form_data']);

    const { register, handleSubmit, formState: { errors, isSubmitting,  } } = useForm({
        defaultValues: { fullName, email, phoneNumber },
        resolver: zodResolver(FormValidationSchema)
    })

    const onSubmit = (data) => {
        queryClient.setQueryData(['form_data'], (prev) => ({...prev, ...data, formSequence: 2}))
      };

    
  return (
    <Form onSubmit={handleSubmit(onSubmit)}  className="max-w-2xl mx-auto p-4 rounded-lg ">
        <div className="space-y-4 my-2 py-4">
            <FormTitle title="Personal Information" />
            <div className="form-input-wrapper">
                <input className={`form-input ${errors.fullName ? 'outline-red-600' : 'form-input-outline'}`} {...register("fullName")} placeholder="Enter your Full Name" />
                {   
                    errors.fullName 
                        && ( <p className="form-input-error-msg">{errors.fullName.message}</p>) 
                }
            </div>
            
            <div className="form-input-wrapper">
                <input className={`form-input ${errors.email ? 'outline-red-600' : 'form-input-outline'}`} {...register("email", )} placeholder="Enter proper Email" />
                {
                    errors.email 
                        && (<p className="form-input-error-msg">{errors.email.message}</p>)
                }
            </div>
            
            <div className="form-input-wrapper">
                <input className={`form-input ${errors.phoneNumber ? 'outline-red-600' : 'form-input-outline'}`} {...register("phoneNumber")} placeholder="Enter your Phone Number" />
                {
                    errors.phoneNumber 
                        && (<p className="form-input-error-msg">{errors.phoneNumber.message}</p>)
                }
            </div>
        </div>

        <div className="flex justify-between mt-8">
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

