import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import BikramSambat from "bikram-sambat-js";
import { toNepalidate } from "../global/NepaliDate";
import { getNepalCurrentDate } from "../global/CurrentDate";

const UserDetailsPage = () => {
  const user = useSelector((state: RootState) => {
    const users = state.users.users;
    return users[users.length - 1];
  });
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
    nDistrict = "",
    nMunicipality = "",
    nWardNo = "",
    nFullName = "",
    municipality = "धनगढी",
    wardNo = "१",
    fatherCitizenshipType = "जन्मसिद्ध",
    motherCitizenshipType = "जन्मसिद्ध",
    spouseName = "सीता खड्का",
    spouseCitizenshipType = "जन्मसिद्ध",
    citizenshipIssuePlace = "",
  } = user || {};

  const [bYear, bMonth, bDay] = dob.split("-");
  const adDOB = new BikramSambat(dob, "BS").toAD();
  const [yearStr, monthStr, dayStr] = adDOB.split("-");
  const nepaliDob = `${toNepalidate(bYear)} साल ${toNepalidate(bMonth)} महिना ${toNepalidate(bDay)} गते`;
  const nDob = `${toNepalidate(bYear)}/${toNepalidate(bMonth)}/${toNepalidate(bDay)}`;

const currentDate = getNepalCurrentDate();
const bsCurrent = new BikramSambat(currentDate, "AD").toBS();

  console.log(bsCurrent)
  const [cYear, cMonth, cDay] = bsCurrent.split("-");
  const nToday = `${toNepalidate(cYear)}/${toNepalidate(cMonth)}/${toNepalidate(cDay)}`;
  const nepaliToday = `${cYear} साल ${toNepalidate(cMonth)}  महिना ${toNepalidate(cDay)} गते`;
const adDobDate = new Date(parseInt(yearStr), parseInt(monthStr) - 1, parseInt(dayStr));
  let age = currentDate.getFullYear() - adDobDate.getFullYear();
const monthDiff = currentDate.getMonth() - adDobDate.getMonth();

// Adjust age if birthday hasn't occurred yet this year
if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < adDobDate.getDate())) {
    age--;
}
  const [iYear, iMonth, iDay] = citizenshipIssueDate.split("-");
  const nepaliIssueDate = `${toNepalidate(iYear)}/${toNepalidate(iMonth)}/${toNepalidate(iDay)}`;

  console.log("Nepali dob", dob)

  //   // Convert BS to AD
  // const adDate = new BikramSambat(bsDate, "BS").toAD();

  // // Split AD date into components
  // const [aYear, aMonth, aDay] = adDate.split("-");

  // // Convert parts to Nepali numerals (assuming this is your function)
  // const nepaliAdDateFormatted = `${toNepalidate(aYear)} साल ${toNepalidate(aMonth)} महिना ${toNepalidate(aDay)} गते`;
  // const nepaliAdDateSlash = `${toNepalidate(aYear)}/${toNepalidate(aMonth)}/${toNepalidate(aDay)}`;

  // // You can also get current date in AD if needed
  // const currentDate = new Date().toISOString().split("T")[0]; // current date in "YYYY-MM-DD"
  // const [cYear, cMonth, cDay] = currentDate.split("-");
  // const nepaliToday = `${toNepalidate(cYear)} साल ${toNepalidate(cMonth)} महिना ${toNepalidate(cDay)} गते`;


  const handlePrint = () => window.print();

  return (
    <div className="tracking-wider font-medium">
      {/* Printable Content */}
      <div
        id="print-area"
        className="w-[830px] mx-auto px-10 py-12 bg-white text-[12px] leading-[1.4] font-[Kalimati,serif] text-black print:w-full"
      >
        {/* Header Section */}
        <div className="mb-3 space-y-1 font-semibold">
          <p>श्रीमान प्रमुख जिल्ला अधिकारी ज्यू,</p>
          <p>जिल्ला प्रशासन कार्यालय</p>
          <p>इनरुवा, सुनसरी ।</p>
        </div>

        {/* Subject Line */}
        <div className="mb-3 text-center">
          <p className="font-semibold">विषय :- नेपाली नागरिकताको प्रमाणपत्रको प्रतिलिपि पाऊँ ।</p>
        </div>
        <div>
          <p className="text-[14px] font-semibold">महोदय,</p>
        </div>

        {/* Main Content */}
        <div className="mb-4 space-y-3">
          <p className="text-justify indent-12">
            मैले मेजिष्ट्रेट अफिस ...../..... अञ्चलाधीशको कार्यालय..... गोश्वारा कार्यालय र यसै कार्यालयबाट देहायको विवरण भएको
            नेपाली नागरिकताको प्रमाणपत्र लिएकोमा सो प्रमाणपत्रको सक्कल झुत्रो भएको/ हराएको/ नयाँ ढाँचाको आवश्यक भएको हुँदा
            सोको प्रतिलिपि पाउनका लागि सो नागरिकता प्रमाण पत्रको सक्कल/ नक्कल प्रति संलग्न राखी रु. १० (दश) को टिकट टाँसी सिफारिस
            सहित यो निवेदन पेश गर्दछु ।
          </p>

          {/* Details Section */}
          <div className="space-y-1 border-2 p-1">
            <div className="grid grid-cols-3">
              <p className="">१. ना.प्र.प.नं.- {citizenshipNumber}</p>
              <div className="flex justify-between">
                <p> मिति:- {nepaliIssueDate}</p>
                <p> किसिम:- {citizenshipType}</p>
              </div>
            </div>
            <p>२. नाम, थर - {nFullName || "राम बहादुर खड्का"}</p>
            <p className="text-[16px]">Full Name (In Block):- <span className="uppercase">{fullName}</span></p>
            <div className="grid grid-cols-4">
              <div className="flex justify-between">
                <p>३. लिंग :- {gender}</p>
                <p className="text-left"> SEX - {gender === 'पुरुष' ? 'Male' : (gender === 'महिला' ? 'Female' : 'Other')}</p>
              </div>
              <div className="text-center col-span-2">
                <p>४. जन्म स्थान - {birthPlace}</p>
              </div>
            </div>
            <p>५. स्थायी बासस्थान -जिल्ला {nDistrict}</p>
            <p className="ml-3"> {nMunicipality} वडा नं.-{nWardNo}</p>
            <div className="text-[16px] ml-3">
              <p className="">Permanent Address : District {district}</p>
              <p>Sub-Metropolitan City:- {municipality} Ward No. {wardNo}</p>
            </div>

            <p>६. जन्म मिति :- {nepaliDob}</p>
            <p className="text-[16px]">Date Of Birth (A.D) {yearStr || "1992"} Year {monthStr || "12"} Month {dayStr || "26"} Day</p>
            <p>७. बाबुको नाम, थर :- {fatherName}</p>
            <div className="grid grid-cols-3">
              {fatherName ? (
                <p className="col-span-2 ml-3">वतन - {nMunicipality} वडा नं {nWardNo}</p>
              ) : (<p className="col-span-2 ml-3">वतन - </p>
              )}              <p> नागरिकताको किसिम- {fatherCitizenshipType}</p>
            </div>
            <p>८. आमाको नाम, थर :- {motherName} </p>
            <div className="grid grid-cols-3">
              {motherName ? (
                <p className="col-span-2 ml-3">वतन - {nMunicipality} वडा नं {nWardNo}</p>
              ) : (<p className="col-span-2 ml-3">वतन - </p>
              )}
              <p> नागरिकताको किसिम- {motherCitizenshipType}</p>
            </div>
            <p>९. पति/पत्नीको नाम, थर :- {spouseName}</p>
            <div className="grid grid-cols-3">
              {spouseName ? (
                <p className="col-span-2 ml-3">वतन - {nMunicipality} वडा नं {nWardNo}</p>
              ) : (<p className="col-span-2 ml-3">वतन - </p>
              )}              <p> नागरिकताको किसिम- {spouseCitizenshipType}</p>
            </div>
            <p className="text-justify">
              माथि लेखिएको विवरण मैले जिल्ला प्रशासन कार्यालय, {citizenshipIssuePlace} लिएको नं. {citizenshipNumber} को ना.प्र.प.को व्यहोरा सँग दुरुस्त छ फरक छैन ।
              लेखिएको व्यहोरा झुठा ठहरेमा कानुन बमोजिम सहुँला/बुझाउँला ।
            </p>

            {/* Signature Section */}
            <div className="grid grid-cols-5 mb-8">
              <div className="text-center">
                <p className="text-xs">औंठाको छाप</p>
                <table className="table-fixed border-2 border-black text-left">
                  <tbody>
                    <tr>
                      <td className="border-2 border-black px-8 py-8"></td>
                      <td className="border-2 border-black px-8 py-8"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="text-center col-span-4">
                <p className="underline">भवदीय</p>
                <p>निवेदकको दस्तखत:</p>
                <p>नाम थर:- {nFullName}</p>
                <p>मिति:- {nToday}</p>
              </div>
            </div>
          </div>
        </div>


        {/* Recommendation Section */}
        <div className="flex gap-1">
          <div className="pt-4">
            <p className="text-center font-bold underline">(प्रतिलिपि ना.प्र.प.का लागि सिफारिस)</p>
            <p className="mb-4 text-justify">
              {birthPlace} वडा नं {nWardNo} मा मिति {nDob} मा जन्म भई हालसम्म {nMunicipality} वडा नं {nWardNo} मा स्थायी रुपमा बसोबास गरी आएका
              यसमा लेखिएका श्रीमान् {fatherName} को छोरा/छोरी/पत्नी वर्ष {age} को श्री/सुश्री/श्रीमती {nFullName || "राम बहादुर खड्का"} लाई म राम्ररी चिन्दछु ।
              निजको माग बमोजिम उपयुक्त विवरण भएको नं. {citizenshipNumber} मिति {nepaliIssueDate} को नागरिकता प्रमाणपत्रको सक्कल प्रति झुत्रो भएको/हराएको/नयाँ
              ढाँचाको आवश्यक भएको व्यहोरा साँचो हुँदा प्रतिलिपि बनाई दिएमा फरक नपर्ने व्यहोरा सिफारिस गर्दछु।
            </p>
          </div>
          <div className="border-2 border-black my-auto p-10"></div>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <p className="">मिति:- {nepaliToday}</p>
            <p>कार्यालयको नाम र छाप:</p>
            <p>इटहरी उपमहानगरपालिका</p>
            <p>१ नम्वर वडा कार्यालय </p>
          </div>
          <div className="text-left">
            <p className="font-semibold">सिफारिस गर्नेको नाम</p>
            <p>दस्तखत - ..................</p>
            <p>नाम थर - रतन कार्की</p>
            <p>पद - वडा अध्यक्ष</p>
          </div>
        </div>
      </div>

      {/* Photo Section */}

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