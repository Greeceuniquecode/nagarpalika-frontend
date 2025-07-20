import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { Form, useNavigate } from "react-router-dom";

import { Formik } from "formik";
import { ErrorMessage, Field } from "formik";

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  ward: Yup.string().required("Required"),
  municipality: Yup.string().required("Required"),
  number: Yup.string().required("Required"),
  area: Yup.string().required("Required"),
  certifiedDetails: Yup.string().required("Required"),
  remarks: Yup.string(),
});

const initialValues = {
  id: uuidv4(),
  name: "",
  address: "",
  ward: "",
  municipality: "",
  number: "",
  area: "",
  certifiedDetails: "",
  remarks: "",
};

const MalpotIdForm = () => {
  const navigate = useNavigate();

  const onSubmit = (_values: typeof initialValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    setSubmitting(true);
    // Dispatch or other logic here isf needed
    setSubmitting(false);
    navigate("/sifaris"); // Navigate to MalpotPage route
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
                onSubmit={(values, formikHelpers) => onSubmit(values, formikHelpers)}
                validateOnChange={false}
                validateOnBlur={false}
              >
                <Form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      नाम:
                    </label>
                    <Field
                      name="name"
                      placeholder="नाम प्रविष्ट गर्नुहोस्"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      ठेगाना:
                    </label>
                    <Field
                      name="address"
                      placeholder="ठेगाना प्रविष्ट गर्नुहोस्"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    />
                    <ErrorMessage
                      name="address"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      वडा:
                    </label>
                    <Field
                      name="ward"
                      placeholder="वडा नम्बर"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    />
                    <ErrorMessage
                      name="ward"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      न.पा./गा.वि.स.:
                    </label>
                    <Field
                      name="municipality"
                      placeholder="न.पा./गा.वि.स. प्रविष्ट गर्नुहोस्"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    />
                    <ErrorMessage
                      name="municipality"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      नं.:
                    </label>
                    <Field
                      name="number"
                      placeholder="नं. प्रविष्ट गर्नुहोस्"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    />
                    <ErrorMessage
                      name="number"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      क्षेत्रफल:
                    </label>
                    <Field
                      name="area"
                      placeholder="क्षेत्रफल प्रविष्ट गर्नुहोस्"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    />
                    <ErrorMessage
                      name="area"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      प्रमाणित गरिएको व्यहोरा:
                    </label>
                    <Field
                      name="certifiedDetails"
                      placeholder="प्रमाणित गरिएको व्यहोरा प्रविष्ट गर्नुहोस्"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    />
                    <ErrorMessage
                      name="certifiedDetails"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      कैफियत:
                    </label>
                    <Field
                      name="remarks"
                      placeholder="कैफियत प्रविष्ट गर्नुहोस्"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    />
                    <ErrorMessage
                      name="remarks"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>

                {/* Submit Button */} 
                <div className="flex justify-center pt-8">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-12 py-4 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
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
export default MalpotIdForm;
