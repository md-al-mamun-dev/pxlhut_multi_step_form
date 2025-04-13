import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from 'next/navigation'
import FormTitle from "./FormTitle";

export default function UsersSummery() {
    const router = useRouter();
    const queryClient = useQueryClient();

    const { fullName, email, phoneNumber,        
        streetAddress, city, zipCode,
        username, password, confirmPassword, formSequence } = queryClient.getQueryData(['form_data']);


    const onSubmit = () => {        
        router.push(`/user-details?name=${fullName}&username=${username}&email=${email}&phone=${phoneNumber}&address=${streetAddress}&city=${city}&zip=${zipCode}`);
      };
    function backToPrevious() {
        queryClient.setQueryData(['form_data'], (prev) => ({...prev, formSequence: formSequence -1}))
    }
  
    return (
    <div className="max-w-4xl mx-auto px-4 py-8 h-full min-h-screen animate-fade-in">
      <FormTitle title="User Details" />

      <div className=" w-full max-w-2xl mx-auto p-4  rounded-lg  animate-pop-in">
        <div className="space-y-2 grid grid-cols-2 gap-4">
          <p className="user-detail-item col-span-full">Name: {fullName}</p>
          <p className="user-detail-item col-span-full">Email: {email}</p>
            <p className="user-detail-item">Phone: {phoneNumber}</p>
          {/* <div className="col-span-full">
            
          </div> */}
          <p className="user-detail-item">Username: {username}</p>
          
        </div>

        <hr className="h-px my-8 bg-gray-300 border-0 dark:bg-gray-500" />

        <div className="grid grid-cols-2 gap-4 mt-10">
          <h3 className="col-span-full text-xl font-semibold px-6">Address</h3>
          <p className="user-detail-item col-span-full">Street Address: {streetAddress}</p>
          <p className="user-detail-item">City: {city} </p>
          <p className="user-detail-item">Zip Code: {zipCode} </p>
        </div>
        <div className="flex justify-between mt-8">
            <button 
                onClick={backToPrevious} 
                type="button" 
                className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                {"Previous"}
            </button>
            
            <button type="button"
                onClick={onSubmit}
                className="ml-auto px-6 py-3 w-1/2 rounded-lg transition bg-green-600 text-white hover:bg-green-700">
                Submit
            </button>
        </div>


      </div>
      
    </div>
  )
}
