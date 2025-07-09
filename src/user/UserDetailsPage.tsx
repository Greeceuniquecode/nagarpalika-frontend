import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import BikramSambat from "bikram-sambat-js";

const InputLine = ({ value = "", className = "" }: { value?: string | number; className?: string }) => (
  <input
    type="text"
    value={value}
    readOnly
    className={`border-b border-dotted border-black bg-transparent outline-none ${className}`}
  />
);

const UserDetailsPage = () => {
  const {
    studentName,
    dob,
    fatherName,
    motherName,
    birthPlace,
    gender,
    address,
    mobile,
    citizenshipNumber,
    citizenshipIssueDate,
    citizenshipType,
    district,
    municipality,
    wardNo,
    fatherCitizenshipType,
    motherCitizenshipType,
    spouseName,
    spouseCitizenshipType,

  } = useSelector((state: RootState) => state.user);
const [yearStr, monthStr, dayStr] = dob.split('-');
const year = Number(yearStr);
const month = Number(monthStr);
const day = Number(dayStr);

// Convert to BS using BikramSambat
const bsDate = new BikramSambat(dob, "AD").toBS(); 

// Now split BS date into parts
const [bYear, bMonth, bDay] = bsDate.split('-');

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white border border-black text-sm leading-6 font-[kalimati,Arial,Helvetica,sans-serif]">
      <div className="text-left mb-4">
        <p className="font-semibold">श्रीमान प्रमुख जिल्ला अधिकारी ज्यू</p>
        <p>जिल्ला प्रशासन कार्यालय</p>
        <h2 className="text-lg font-bold text-center mt-4 underline">
          विषयः– नेपाली नागरिकताको प्रमाण–पत्रको प्रतिलिपि पाऊँ ।
        </h2>
      </div>

      <div className="space-y-3 mb-6">
        <p>महाशय,</p>
        <p>
          मैले मेजिष्ट्रट अफिस............................................ अञ्चलाधीशको
          कार्यालय/.......................................गोश्वरा कार्यालय र यसै
          कार्यालयबाट देहायको विवरण भएको नेपाली नागरिकता प्रमाणपत्र लिएकोमा सो प्रमाणपत्रको
          सक्कल, भुत्रो भएको/हराएको/नयाँ ढाँचाको आवश्यक भएको हुँदा सोको १ प्रतिलिपी पाउनका
          लागि सो नागरिकता प्रमाणपत्रको सक्कल/नक्कल प्रति संलग्न राखि रु १३ (तेह) को टिकट
          टाँसी सिफारिस सहित यो निवेदन पेश गरेको छु । मैलै नागरिकता प्रमाण-पत्र लिदाँको विवरण
          यस प्रकार छ ।
        </p>

        <div className="space-y-2 pl-6">
          <p>१. ना.प्र.प. <InputLine value={citizenshipNumber} className="w-40" /> मिति: <InputLine value={citizenshipIssueDate} className="w-32 text-center" /> किसिम: <InputLine value={citizenshipType} className="w-32 text-center" /></p>
          <p>२. नाम, थर: <InputLine value={studentName} className="w-80" /></p>
          <p className="ml-4">Full Name (in block): <InputLine value={studentName} className="w-80" /></p>
          <p>३. लिंग: <InputLine value={gender} className="w-24 text-center" />
            Sex: <InputLine value={gender} className="w-24 text-center" />
            सम्पर्क न.: <InputLine value={mobile} className="w-32 text-center" /></p>
          <p>४. जन्म स्थान: <InputLine value={birthPlace} className="w-40" />
            Place of Birth (in block): <InputLine value={birthPlace} className="w-40" /></p>
          <p>५. स्थायी बास स्थान: <InputLine value={address} className="w-32 text-center" />
            जिल्ला: <InputLine value={district} className="w-24 text-center" />
            न.पा./गा.वि.स.: <InputLine className="w-24 text-center" />
            वडा न.: <InputLine className="w-16" /></p>
          <p className="ml-4">Permanent Address:- District: <InputLine className="w-24 text-center" />
            V.D.C./Municipality: <InputLine value={municipality} className="w-32 text-center" />
            Ward No.: <InputLine value={wardNo} className="w-16" /></p>
          <p>६. जन्म मिति: <InputLine value={bYear} className="w-24 text-center" />
            साल <InputLine value={bMonth} className="w-16" />
            महिना: <InputLine value={bDay} className="w-16" /> गते</p>
          <p className="ml-4">Date of birth (AD): <InputLine value={year} className="w-24 text-center" />
            Year <InputLine value={month} className="w-16" /> Month
            <InputLine value={day} className="w-16" /> Day</p>
          <p>७. बाबुको नाम, थर र जन्म: <InputLine value={fatherName} className="w-40" />
            नागरिकताको किसिम: <InputLine value={fatherCitizenshipType} className="w-32 text-center" /></p>
          <p>८. आमाको नाम, थर र जन्म: <InputLine value={motherName} className="w-40" />
            नागरिकताको किसिम: <InputLine value={motherCitizenshipType} className="w-32 text-center" /></p>
          <p>९. पतिको नाम, थर र जन्म: <InputLine value={spouseName} className="w-40" /> नागरिकताको किसिम: <InputLine value={spouseCitizenshipType} className="w-32 text-center" /></p>
        </div>

        <p className="mt-6">
          माथि लेखिएको विवरण मेरो <InputLine className="w-32 text-center" /> कार्यालयमा दिएको न.{" "}
          <InputLine className="w-24 text-center" />
        </p>
        <p>
          को ना.प्र.प. को व्यहोरा सँग मिल्दछ । फरक छैन । सिफारिसको व्यहोरा भएको ठाउँमा कानूनी
          सहुलियत हुँदा हुमकुम गरिदिनु ।
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="text-center">
          <div className="text-sm font-bold mb-2">औंठा छाप</div>
          <div className="flex gap-2">
            <div className="border border-black h-20 w-20 flex items-center justify-center text-xs">दाया</div>
            <div className="border border-black h-20 w-20 flex items-center justify-center text-xs">बाया</div>
          </div>
        </div>
        <div className="text-center">
          <div className="text-sm font-bold mb-2">निवेदकको</div>
          <div className="border border-black h-20 mb-2 flex items-center justify-center text-xs">दस्तखत</div>
          <p className="text-xs">नाम, थर: <InputLine value={studentName} className="w-32 text-center" /></p>
          <p className="text-xs">मिति: <InputLine className="w-24 text-center" /></p>
        </div>
        <div></div>
      </div>

      <div className="border-t-2 border-black pt-4">
        <h3 className="text-center font-bold underline mb-4">
          प्रतिलिपि ना.प्र.प. का लागि सिफारिस
        </h3>
        <p className="mb-4">
          <InputLine className="w-20" /> गाउँ विकास समिति /नगरपालिका /उपमहानगरपालिका /महानगरपालिका/
          वडा नं. <InputLine className="w-12" /> मा मिति: <InputLine value={dob} className="w-24 text-center" />
        </p>
        <p className="mb-4">
          मा जन्म भई हालसम्म स्थायी रूप्मा बसोबास गरी आएको व्यहोराले श्रीमान्/श्रीमती{" "}
          <InputLine value={studentName} className="w-40" /> को बारे/ चोरी/ फत्रो वडा{" "}
          <InputLine className="w-16" /> को श्री/श्रीमती/श्रीमान् <InputLine className="w-40" /> लाई म
          राम्री चिनजु । निज़को नाम कानूनी उपयुक्त विवरण भएको न. <InputLine className="w-24 text-center" /> मिति:{" "}
          <InputLine className="w-24 text-center" /> को नागरिकता प्रमाणपत्रको सकिएको प्रति भएको/ भएको/ हराएको/
          चोरी छुटेको आवश्यक भएको व्यहोरा सचिनु देई प्रतिलिपि बनाई दिनु फरक आपत्ति व्यहोरा सँचिनु
          न्धे । अन्त विवरण भएको छैन कानूनी सहुलियत हुँदा हुमकुम गरिदिनु ।
        </p>

        <div className="mt-6 space-y-2">
          <p>मिति: <InputLine className="w-32 text-center" /></p>
          <p>सिफारिस गर्नेको दस्तखत:</p>
          <p>कार्यालयको नाम र छाप</p>
          <p className="ml-20">नाम, थर: <InputLine className="w-40" /></p>
          <p className="ml-20">पद: <InputLine className="w-40" /></p>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center">
        <div className="border border-black h-32 w-24 flex items-center justify-center text-xs text-center">
          <div>
            <p>पासपोर्ट</p>
            <p>साइजको</p>
            <p>दुबै कान</p>
            <p>देखिने</p>
            <p>दुई प्रति</p>
            <p>फोटो</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;
