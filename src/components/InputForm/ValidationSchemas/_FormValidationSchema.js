import PersonalInformationSchema from "./PersonalInfoSchema";
import AddressDetailsSchema from "./AddressDetailsSchema";
import AccountSetupSchema from "./AccountSetupSchema";

export const FormValidationSchema = PersonalInformationSchema
                    .marge(AddressDetailsSchema)
                    .merge(AccountSetupSchema);
export default FormValidationSchema