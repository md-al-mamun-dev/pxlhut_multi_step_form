"use client"

import PersonalInformation from "./PersonalInformation"
import AddressDetails from "./AddressDetails"
import AccountSetup from "./AccountSetup";
import { useQuery, useQueryClient } from "@tanstack/react-query";


export default function index() {
  const queryClient = useQueryClient();

  const { data: initialData } = useQuery({
    queryKey: ['form_data'],
    queryFn: () => ({}), // dummy fetcher;
    staleTime: Infinity,
    initialData: () => queryClient.getQueryData(['form_data']) || { fullName: '', email: '', phoneNumber: '', streetAddress: '', city: '', zipCode: '', username: '', password: '', confirmPassword: '', formSequence: 1},
});

if (initialData.formSequence === 1) {
  return <PersonalInformation />
}

if (initialData.formSequence === 2) {
  return <AddressDetails />
}

if (initialData.formSequence === 3) {
  return <AccountSetup />
}

return null;

}
