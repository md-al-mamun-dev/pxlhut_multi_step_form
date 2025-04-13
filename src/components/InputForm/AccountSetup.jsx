"use client"
import Form from "next/form"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useQueryClient, useQuery } from "@tanstack/react-query"
import { useRouter } from 'next/navigation'
import FormValidationSchema from "./ValidationSchemas/AccountInfoSchema"


export default function AccountSetup() {
    const router = useRouter();
    const queryClient = useQueryClient();

    const { fullName, email, phoneNumber,        
        streetAddress, city, zipCode,
        username, password, confirmPassword, formSequence } = queryClient.getQueryData(['form_data']);

    const { register, handleSubmit, watch, formState: { errors, isSubmitting,  } } = useForm({
        defaultValues: { username, password, confirmPassword },
        resolver: zodResolver(FormValidationSchema)
    })


    const onSubmit = (data) => {
        queryClient.setQueryData(['form_data'], (prev) => ({...prev, ...data}))
        router.push(`/user-details?name=${fullName}&username=${data.username}&email=${email}&phone=${phoneNumber}&address=${streetAddress}&city=${city}&zip=${zipCode}`);
      };
    function backToPrevious(params) {
        const formData = watch();
        queryClient.setQueryData(['form_data'], (prev) => ({...prev, ...formData, formSequence: formSequence -1}))
    }


  return (
    <Form onSubmit={handleSubmit(onSubmit)}   className="max-w-2xl mx-auto p-4 rounded-lg ">
        <div className="space-y-4 my-2 py-4">
            <h1 className="text-3xl font-semibold text-gray-500 text-center mb-8 animate-slide-down">
                Account Setup
            </h1>
            <hr className="h-px my-8 bg-gray-300 border-0 dark:bg-gray-500" />
            <div className={`form-input-wrapper `} >
                <input className={`form-input ${errors.username ? 'outline-red-600' : 'form-input-outline'}`} {...register("username")} placeholder="Enter your username" />
                {   
                    errors.username 
                        && ( <p className="form-input-error-msg">{errors.username.message}</p>) 
                }
            </div>
            
            <div className="form-input-wrapper">
                <input type="password" className={`form-input ${errors.password ? 'outline-red-600' : 'form-input-outline'}`} {...register("password", )} placeholder="Password" />
                {
                    errors.password 
                        && (<p className="form-input-error-msg">{errors.password.message}</p>)
                }
            </div>
            
            <div className="form-input-wrapper">
                <input type="password" className={`form-input ${(errors.confirmPassword || errors.password) ? 'outline-red-600' : 'form-input-outline'}`} {...register("confirmPassword")} placeholder="Confirm Password" />
                {
                    errors.confirmPassword 
                        && (<p className="form-input-error-msg">{errors.confirmPassword.message}</p>)
                }
            </div>
        </div>
        <div className="flex justify-between mt-8">
            <button onClick={backToPrevious} type="button" disabled={isSubmitting} 
                className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                {"Back"}
            </button>
            <button type="submit" disabled={isSubmitting || Object.keys(errors).length > 0} 
                className={`ml-auto px-6 py-3 w-1/2 rounded-lg transition
                    ${isSubmitting || Object.keys(errors).length > 0
                        ? 'bg-gray-300 text-gray-500 opacity-60 cursor-not-allowed'
                        : 'bg-green-600 text-white hover:bg-green-700'
                      }`}>
                {"Submit"}
            </button>
        </div>
    </Form>
  )
}

