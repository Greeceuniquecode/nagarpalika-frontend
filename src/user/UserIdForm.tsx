import { Link } from "react-router-dom";

const UserIdForm = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 border rounded-xl shadow-lg bg-white">
      <h1 className="text-center text-red-600 text-3xl underline font-bold mb-6"> इटहरी उपमहानगरपालिका</h1>
      <h1 className="text-center text-2xl text-red-600 font-bold mb-6">१ नम्बर वडा कार्यालय</h1>

      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <label className="flex flex-col">

            निवेदकको नाम
            (Name of Applicant):
            <input type="text" className="border-2 rounded-lg border-blue-600 p-1" />
          </label>
          <label className="flex flex-col">

            जन्ममिति(Date of Birth):
            <input type="date" className="border-2 rounded-lg border-blue-600 p-1" />
          </label>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <label className="flex flex-col">

            बाबुकोनाम (Father's Name):
            <input type="text" className="border-2 rounded-lg border-blue-600 p-1" />
          </label>
          <label className="flex flex-col">

            आमाको नाम(Mother's Name):
            <input type="text" className="border-2 rounded-lg border-blue-600 p-1" />
          </label>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <label className="flex flex-col">

            जन्मस्थान(Birth place)
            <input type="text" className="border-2 rounded-lg border-blue-600 p-1" />
          </label>
          <label className="flex flex-col">
            लिंग (Gender):
            <select className="border-2 rounded-lg border-blue-600 p-1">
              <option>पुरुष (Male)</option>
              <option>महिला (Female)</option>
              <option>अन्य (Other)</option>
            </select>
          </label>
        </div>

        <label className="flex flex-col">
          स्थायी पता (Permanent Address):
          <input type="text" className="border-2 rounded-lg border-blue-600 p-1" />
        </label>

        <label className="flex flex-col">
          मोबाइल नंबर (Mobile No.):
          <input type="text" className="border-2 rounded-lg border-blue-600 p-1" />
        </label>

        <div className="flex flex-col items-center mt-6">
          <Link to="/user-details" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Submit
          </Link >
        </div>
      </form>
    </div>
  );
};

export default UserIdForm;
