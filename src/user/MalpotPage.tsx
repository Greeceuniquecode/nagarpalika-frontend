import Img5 from '../assets/images/logo.png';
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

const MalpotPage = () => {
  const malpot = useSelector((state: RootState) => {
    const malpots = state.malpot.malpots;
    return malpots[malpots.length - 1];
  });

  if (!malpot) {
    return <div className="max-w-4xl mx-auto p-6 bg-white">No data available.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      {/* Header Section */}
      <div className="text-center mb-8">
        {/* Government Logo and Title */}
        <div className="flex items-left justify-left ">
          <div className="w-33 h-20 mr-20">
            {/* Nepal Government Emblem */}
            <div className="align-left">
              <img
                src={Img5}
                alt="Nepal Government Emblem"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">
              इटहरी उपमहानगरपालिका
            </h1>
            <h2 className="text-3xl text-black mb-5">
              Itahari Sub-Metropolitan City
              <p className="text-2xl text-black">१ नं. वडा कार्यालय</p>
              <p className="text-xl text-black">कोशी प्रदेश, नेपाल</p>
            </h2>
          </div>
        </div>

        {/* Document Info */}
        <div className="flex justify-between items-start mt-6 text-sm">
          <div className="text-left">
            <p className="mb-1">पत्र संख्या २०८२/०६३</p>
            <p>च.नं. ...........................</p>
          </div>
          <div className="text-right">
            <p>मिति </p>
          </div>
        </div>

        {/* Addressing */}
        <div className="text-left mt-6 mb-4">
          <p className="text-lg font-semibold mb-2">श्री भूमिसुधार तथा मालपोत कार्यालय</p>
          <p className="text-lg font-semibold mb-2">इनरुवा , सुनसरी</p>
        </div>

        {/* Subject Line */}
        <div className="text-center my-6">
          <p className="text-lg font-semibold border-b-2 border-black inline-block pb-1">
            विषय:- घर बाटो प्रमाणित सम्बन्धमा ।
          </p>
        </div>

        {/* Malpot Data Display */}
        <div className="space-y-4 text-left">
          <p><strong>नाम:</strong> {malpot.name}</p>
          <p><strong>ठेगाना:</strong> {malpot.address}</p>
          <p><strong>वडा:</strong> {malpot.ward}</p>
          <p><strong>न.पा./गा.वि.स.:</strong> {malpot.municipality}</p>
          <p><strong>नं.:</strong> {malpot.number}</p>
          <p><strong>क्षेत्रफल:</strong> {malpot.area}</p>
          <p><strong>प्रमाणित गरिएको व्यहोरा:</strong> {malpot.certifiedDetails}</p>
          <p><strong>कैफियत:</strong> {malpot.remarks}</p>
        </div>
      </div>
    </div>
  );
};

export default MalpotPage;
