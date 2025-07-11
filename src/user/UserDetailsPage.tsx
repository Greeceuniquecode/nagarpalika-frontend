import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import BikramSambat from "bikram-sambat-js";

const UserDetailsPage = () => {
const user = useSelector((state: RootState) => {
  const users = state.users.users;
  return users[users.length - 1];
});
console.log("redux user", user)
  const {
    fullName = "पदम बहादुर खड्का",
    dob = "1992-12-26",
    fatherName = "तेज बहादुर खड्का",
    motherName = "सरस्वती खड्का",
    birthPlace = "धनगढी",
    gender = "Male",
    citizenshipNumber = "67-01-69-01341",
    citizenshipIssueDate = "२०३९/०२/३२",
    citizenshipType = "जन्मसिद्ध",
    district = "कैलाली",
    municipality = "धनगढी",
    wardNo = "१",
    fatherCitizenshipType = "जन्मसिद्ध",
    motherCitizenshipType = "जन्मसिद्ध",
    spouseName = "सीता खड्का",
    spouseCitizenshipType = "जन्मसिद्ध",
  } = user || {};

  const bsDate = new BikramSambat(dob, "AD").toBS();
  const [bYear, bMonth, bDay] = bsDate.split("-");
  const [yearStr, monthStr, dayStr] = dob.split("-");

  const handlePrint = () => window.print();

  return (
    <div className="">
      {/* Printable Content */}
      <div
        id="print-area"
        className="w-[794px] mx-auto p-[20px] bg-white text-[12px] leading-[1.4] font-[Kalimati,serif] text-black print:w-full"
      >
        {/* Header Section */}
        <div className="mb-3 space-y-1">
          <p>श्रीमान प्रमुख जिल्ला अधिकारी ज्यू,</p>
          <p>जिल्ला प्रशासन कार्यालय, धनगढी, कैलाली,</p>
          <p>सुदूरपश्चिम प्रदेश नेपाल ।</p>
        </div>

        {/* Subject Line */}
        <div className="mb-3 text-center">
          <p className="font-bold underline">विषय :- नेपाली नागरिकताको प्रमाण-पत्रको प्रतिलिपि पाऊँ ।</p>
        </div>

        {/* Main Content */}
        <div className="mb-4 space-y-3">
          <p className="text-justify">
            मैले मेजिष्ट्रेट अफिस/अञ्चलाधीशको कार्यालय/जिल्ला प्रशासन कार्यालय धनगढी, कैलाली/यसै कार्यालयबाट देहायको विवरण भएको
            नेपाली नागरिकताको प्रमाण-पत्र लिएकोमा सो प्रमाण-पत्रको सक्कल प्रति झुत्रो भएको÷हराएको÷नयाँ ढाँचाको आवश्यकता भएको हुँदा
            सोको प्रतिलिपि पाउनका लागि सो नागरिकता प्रमाण पत्रको सक्कल÷नक्कल प्रति संलग्न राखी रु. १३/- (तेह्र) को टिकट टाँसी सिफारिस
            सहित यो निवेदन पेश गरेको छु ।
          </p>

          <p className="font-bold">मैले नागरिकताको प्रमाणपत्र लिँदाको विवरण यस प्रकार छ:-</p>

          {/* Details Section */}
          <div className="space-y-2 border-2 p-1">
            <p>१. ना.प्र.प.नं:- <strong>{citizenshipNumber || "67-01-69-01341"}</strong> मिति:- <strong>{citizenshipIssueDate || "२०३९/०२/३२"}</strong> किसिम:- <strong>{citizenshipType || "जन्मसिद्ध"}</strong></p>
            <p>२. नाम थर:- <strong>{fullName || "राम बहादुर खड्का"}</strong></p>
            <p className="ml-4">Full Name (In Block Letter) <strong>{fullName || "RAM BAHADUR KHADKA"}</strong></p>
            <p>३. लिंग :- <strong>{gender === 'Male' ? 'पुरुष' : 'महिला'}</strong> Sex <strong>{gender === 'Male' ? 'M' : 'F'}</strong></p>
            <p>४. जन्म स्थान :- <strong>{birthPlace || "धनगढी"}</strong></p>
            <p className="ml-4">Place Of Birth (In Block Letter) <strong>{birthPlace || "DHANGADHI"}</strong></p>
            <p>५. स्थायी बासस्थान :- सुदूरपश्चिम प्रदेश जिल्ला <strong>{district || "कैलाली"}</strong> गा.पा./न.पा. <strong>{municipality || "धनगढी"}</strong> वडा नं <strong>{wardNo || "१"}</strong></p>
            <p className="ml-4">Permanent Address : Sudurpashchim Province District <strong>{district || "KAILALI"}</strong> Municipality <strong>{municipality || "DHANGADHI"}</strong> Ward No <strong>{wardNo || "1"}</strong></p>
            <p>६. जन्म मिति :- <strong>{bYear || "२०४९"}</strong> साल <strong>{bMonth || "०९"}</strong> महिना <strong>{bDay || "१०"}</strong> गते</p>
            <p className="ml-4">Date Of Birth (A.D) <strong>{yearStr || "1992"}</strong> Year <strong>{monthStr || "12"}</strong> Month <strong>{dayStr || "26"}</strong> Day</p>
            <p>७. बाबुको नाम, थर :- <strong>{fatherName || "तेज बहादुर खड्का"}</strong> नागरिकताको किसिम <strong>{fatherCitizenshipType || "जन्मसिद्ध"}</strong></p>
            <p>८. आमाको नाम, थर :- <strong>{motherName || "सरस्वती खड्का"}</strong> नागरिकताको किसिम <strong>{motherCitizenshipType || "जन्मसिद्ध"}</strong></p>
            <p>९. पति/पत्नीको नाम, थर :- <strong>{spouseName || "सीता खड्का"}</strong> नागरिकताको किसिम <strong>{spouseCitizenshipType || "जन्मसिद्ध"}</strong></p>
          </div>

          <p className="text-justify">
            माथि लेखिएको विवरण मैले कैलाली जिल्ला प्रशासन कार्यालयबाट लिएको नं. <strong>67-01-69-01341</strong> को ना.प्र.प.को व्यहोरा सँग दुरुस्त छ फरक छैन ।
            लेखिएको व्यहोरा झुठा ठहरेमा कानुन बमोजिम सहुँला/बुझाउँला ।
          </p>
        </div>

        {/* Signature Section */}
        <div className="flex justify-between items-end mt-6 mb-8">
          <div className="text-center">
            <p className="text-xs mb-2">औंठाको छाप</p>
            <table className="table-fixed border-2 border-black text-left">
              <thead>
                <tr>
                  <th className="border-2 border-black px-6 py-1">Daya</th>
                  <th className="border-2 border-black px-6 py-1">Baya</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-2 border-black px-4 py-8"></td>
                  <td className="border-2 border-black px-4 py-8"></td>
                </tr>
              </tbody>
            </table>

          </div>
          <div className="text-right space-y-1">
            <p>निवेदकको</p>
            <p>दस्तखत:</p>
            <p>नाम थर:- <strong>{fullName || "राम बहादुर खड्का"}</strong></p>
            <p>मिति:- <strong>२०८०÷१२÷१४</strong></p>
          </div>
        </div>

        {/* Recommendation Section */}
        <div className="border-t-2 border-black pt-4">
          <p className="text-center font-bold mb-3 underline">(प्रतिलिपिमा ना.प्र.प.का लागि सिफारिस)</p>

          <p className="mb-4 text-justify">
            <strong>{municipality || "धनगढी"}</strong> गाउँपालिका/नगरपालिका वडा नं <strong>{wardNo || "१"}</strong> मा मिति <strong>२०४९/०९/१०</strong> मा जन्म भई हालसम्म स्थायी रुपमा बसोबास गरी आएका
            यसमा लेखिएका श्रीमान् <strong>{fatherName || "तेज बहादुर खड्का"}</strong> को छोरा/छोरी/पत्नी वर्ष <strong>33</strong> को श्री/सुश्री/श्रीमती <strong>{fullName || "राम बहादुर खड्का"}</strong> लाई म राम्ररी चिन्छु ।
            निजको माग बमोजिम उपयुक्त विवरण भएको नं. <strong>67-01-69-01341</strong> मिति <strong>२०३९/०२/३२</strong> को नागरिकता प्रमाणपत्रको सक्कल प्रति झुत्रो भएको/हराएको/नयाँ
            ढाँचाको आवश्यक भएको व्यहोरा साँचो हुँदा प्रतिलिपि बनाई दिएमा फरक नपर्ने व्यहोरा सिफारिस गर्दछु।
          </p>

          <p className="mb-4">मिति:- <strong>२०८०÷१२÷१४</strong></p>

          <div className="flex justify-between items-start">
            <div>
              <p>कार्यालयको नाम र छाप:</p>
              <p><strong>{municipality || "धनगढी"}</strong> गाउँपालिका/नगरपालिका</p>
              <p>वडा नं <strong>{wardNo || "१"}</strong> कैलाली</p>
            </div>
            <div className="text-right">
              <p>सिफारिस गर्नेको:</p>
              <p>दस्तखत :</p>
              <p>नाम थर : <strong>डम्बर बहादुर सिंह</strong></p>
              <p>पद : <strong>वडा अध्यक्ष</strong></p>
            </div>
          </div>
        </div>

        {/* Photo Section */}
        <div className="flex justify-end mt-4">
          <div className="border-2 border-black w-[60px] h-[80px] text-[10px] flex flex-col justify-center items-center text-center leading-tight">
            <p>निवेदकको हालसालै</p>
            <p>खिचिएको फोटो</p>
          </div>
        </div>
      </div>
      {/* Print Button - hidden when printing */}
      <div className="mb-4 flex  print:hidden">
        <button
          onClick={handlePrint}
          className="bg-blue-600 text-white mx-auto my-2 px-4 py-2 rounded hover:bg-blue-700"
        >
          Print Document
        </button>
      </div>
    </div>
  );
};

export default UserDetailsPage;