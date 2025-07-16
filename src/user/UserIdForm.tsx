import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { addUser } from "../redux/slices/userSlice";
import type { UserData } from "../../interface/User";
import BSDatePicker from "../global/BSDatePicker";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Required"),
  dob: Yup.string().required("Required"),
  gender: Yup.string().required("Required"),
  fatherName: Yup.string().required("Required"),
  motherName: Yup.string().required("Required"),
  birthPlace: Yup.string().required("Required"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Must be a valid 10-digit number")
    .required("Required"),
  citizenshipNumber: Yup.string().required("Required"),
  citizenshipIssueDate: Yup.string().required("Required"),
  citizenshipType: Yup.string().required("Required"),
  district: Yup.string().required("Required"),
  municipality: Yup.string().required("Required"),
  nMunicipality: Yup.string().required("Required"),
  nDistrict: Yup.string().required("Required"),
  nWardNo: Yup.string().required("Required"),
  citizenshipIssuePlace: Yup.string().required("Required"),
  wardNo: Yup.string().required("Required"),
  fatherCitizenshipType: Yup.string().required("Required"),
  motherCitizenshipType: Yup.string().required("Required"),
  spouseName: Yup.string().required("Required"),
  spouseCitizenshipType: Yup.string().required("Required"),
});

const initialValues: UserData = {
  id: uuidv4(),
  fullName: "",
  nFullName: "",
  dob: "",
  fatherName: "",
  motherName: "",
  birthPlace: "",
  gender: "",
  mobile: "",
  citizenshipNumber: "",
  citizenshipIssueDate: "",
  citizenshipIssuePlace: "",
  citizenshipType: "",
  district: "",
  nDistrict: "",
  municipality: "",
  nMunicipality: "",
  wardNo: 1,
  nWardNo: "१",
  fatherCitizenshipType: "",
  motherCitizenshipType: "",
  spouseName: "",
  spouseCitizenshipType: "",
};

const UserIdForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (values: UserData) => {
    dispatch(addUser(values));
    navigate("/user-details");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="bg-white rounded-t-xl shadow-lg border border-gray-200">
          <div className="bg-gradient-to-r from-blue-200 to-blue-500 text-white p-6 rounded-t-xl">
            <div className="text-center">
              <h1 className="text-3xl text-red-500 font-bold mb-2">
                इटहरी उपमहानगरपालिका
              </h1>
              <h2 className="text-xl font-semibold">१ नम्बर वडा कार्यालय</h2>
              <div className="mt-3 h-1 w-24 bg-white mx-auto rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-b-xl shadow-lg border-x border-b border-gray-200">
          <div className="p-8">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form className="space-y-6">
                {/* Personal Information Section */}
                <div className="border-l-4 border-blue-600 pl-4 mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    व्यक्तिगत जानकारी
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      नाम:
                    </label>
                    <Field
                      name="nFullName"
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    />
                    <ErrorMessage
                      name="fullName"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      NAME IN BLOCK
                    </label>
                    <Field
                      name="fullName"
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    />
                    <ErrorMessage
                      name="fullName"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div className="space-y-2 w-full">
                    <label className="block text-sm font-medium text-gray-700">
                      जन्म मिति:
                    </label>
                    <BSDatePicker name="dob" />
                    <ErrorMessage
                      name="dob"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      लिंग:
                    </label>
                    <Field
                      as="select"
                      name="gender"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    >
                      <option value="">Select</option>
                      <option value="पुरुष">पुरुष</option>
                      <option value="महिला">महिला</option>
                      <option value="अन्य">अन्य</option>
                    </Field>
                    <ErrorMessage
                      name="gender"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      मोबाइल नम्बर:
                    </label>
                    <Field
                      name="mobile"
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    />
                    <ErrorMessage
                      name="mobile"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>

                {/* Citizenship Information Section */}
                <div className="border-l-4 border-blue-600 pl-4 mb-6 mt-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    नागरिकता विवरण
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      ना.प्र.प. (Citizenship No.):
                    </label>
                    <Field
                      name="citizenshipNumber"
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    />
                    <ErrorMessage
                      name="citizenshipNumber"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      ना.प्र.प. (Issue Place):
                    </label>
                    <Field
                      name="citizenshipIssuePlace"
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    />
                    <ErrorMessage
                      name="citizenshipIssuePlace"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      जारी मिति:
                    </label>
                    <BSDatePicker name="citizenshipIssueDate" />
                    <ErrorMessage
                      name="citizenshipIssueDate"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      नागरिकताको किसिम:
                    </label>
                    <Field
                      as="select"
                      name="citizenshipType"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    >
                      <option value="">Select</option>
                      <option value="वंशज">वंशज</option>
                      <option value="जन्म">जन्म</option>
                      <option value="स्वाभाविक">स्वाभाविक</option>
                    </Field>
                    <ErrorMessage
                      name="citizenshipType"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>

                {/* Address Information Section */}
                <div className="border-l-4 border-blue-600 pl-4 mb-6 mt-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">ठेगाना विवरण</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">District:</label>
                    <Field name="district" type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white" />
                    <ErrorMessage name="district" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Mun/VDC.:</label>
                    <Field name="municipality" type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white" />
                    <ErrorMessage name="municipality" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Ward no.:</label>
                    <Field name="wardNo" type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white" />
                    <ErrorMessage name="wardNo" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">जिल्ला:</label>
                    <Field name="nDistrict" type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white" />
                    <ErrorMessage name="nDistrict" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">न.पा./गा.वि.स.:</label>
                    <Field name="nMunicipality" type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white" />
                    <ErrorMessage name="nMunicipality" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">वडा नं.:</label>
                    <Field name="nWardNo" type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white" />
                    <ErrorMessage name="nWardNo" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">जन्म स्थान:</label>
                  <Field name="birthPlace" type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white" />
                  <ErrorMessage name="birthPlace" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Family Information Section */}
                <div className="border-l-4 border-blue-600 pl-4 mb-6 mt-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">पारिवारिक विवरण</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">बाबुको नाम:</label>
                    <Field name="fatherName" type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white" />
                    <ErrorMessage name="fatherName" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">बाबुको नागरिकताको किसिम:</label>
                    <Field as="select" name="fatherCitizenshipType"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white">
                      <option value="">Select</option>
                      <option value="
वंशज">
                        वंशज</option>
                      <option value="जन्म">जन्म</option>

                    </Field>
                    <ErrorMessage name="fatherCitizenshipType" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">आमाको नाम:</label>
                    <Field name="motherName" type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white" />
                    <ErrorMessage name="motherName" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">आमाको नागरिकताको किसिम:</label>
                    <Field as="select" name="motherCitizenshipType"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white">
                      <option value="">Select</option>
                      <option value="
वंशज">
                        वंशज</option>
                      <option value="जन्म">जन्म</option>

                    </Field>
                    <ErrorMessage name="motherCitizenshipType" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">पतिको/पत्नीको नाम:</label>
                    <Field name="spouseName" type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white" />
                    <ErrorMessage name="spouseName" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">पतिको/पत्नीको नागरिकताको किसिम:</label>
                    <Field as="select" name="spouseCitizenshipType"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white">
                      <option value="">Select</option>
                      <option value="
वंशज">
                        वंशज</option>
                      <option value="जन्म">जन्म</option>

                    </Field>
                    <ErrorMessage name="spouseCitizenshipType" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-8">
                  <button type="submit"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-12 py-4 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300">
                    Submit
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserIdForm;
