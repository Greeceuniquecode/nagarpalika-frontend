import { useField } from "formik";
import BikramSambatDatePicker from "bs-datepicker"; // Assuming this is your datepicker import

const BSDatePicker = ({ name }: { name: any }) => {
  const [field, meta, helpers] = useField(name);

  // A function to handle focus styles for custom component (if needed)
  // Here just matching styles on the wrapper div
  return (
    <div>
      <div
        className={`w-full border rounded-lg transition-all duration-200 bg-gray-50 ${
          meta.touched && meta.error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent"
        }`}
      >
        <BikramSambatDatePicker
          value={field.value}
          onChange={(val) => helpers.setValue(val)}
          onBlur={() => helpers.setTouched(true)}
          className="w-full bg-transparent outline-none" // Make input transparent and no outline, to inherit wrapper styles
        />
      </div>
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm mt-1">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default BSDatePicker;
