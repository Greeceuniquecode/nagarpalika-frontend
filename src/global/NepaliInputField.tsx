import { Field, useField } from 'formik';
import { type NepaliField } from '../../interface/Keyboard';

// Updated English to Nepali character mapping based on actual Nepali keyboard layout
const englishToNepaliMap: Record<string, string> = {
    // Numbers (normal state)
    '1': '१', '2': '२', '3': '३', '4': '४', '5': '५', '6': '६', '7': '७', '8': '८', '9': '९', '0': '०',

    // Numbers (shifted state) - from the keyboard image
    '!': 'ज्ञ', '@': 'द्ध', '#': 'घ', '%': 'च', '^': 'त', '&': 'थ', '*': 'ध', '(': 'ढ', ')': 'ण',
    '+': 'ः',

    // Top row letters (QWERTY) - normal state
    'q': 'त्र', 'w': 'ध', 'e': 'भ', 'r': 'च', 't': 'त', 'y': 'थ', 'u': 'ग', 'i': 'ष', 'o': 'य', 'p': 'उ',
    '[': 'ू', ']': 'े', '\\': 'ऽ',

    // Top row letters (QWERTY) - shifted state
    'Q': 'त्त', 'W': 'ध', 'E': 'भ', 'R': 'च', 'T': 'ट', 'Y': 'ञ', 'U': 'ग', 'I': 'क्ष', 'O': 'इ', 'P': 'ए',
    '{': 'ै', '}': 'ं', '|': 'ऽ',

    // Home row letters (ASDF) - normal state
    'a': 'श', 's': 'ह', 'd': 'अ', 'f': 'ख', 'g': 'द', 'h': 'ल', 'j': 'ः', 'k': 'प', 'l': '।', ';': 'स',
    '\'': 'ि',

    // Home row letters (ASDF) - shifted state
    'A': 'आ', 'S': 'श', 'D': 'आ', 'F': 'ख', 'G': 'ग', 'H': 'ह', 'J': 'ज', 'K': 'क', 'L': 'ल', ':': 'स',
    '"': 'ी',

    // Bottom row letters (ZXCV) - normal state
    'z': 'श', 'x': 'ह', 'c': 'अ', 'v': 'ख', 'b': 'द', 'n': 'ल', 'm': 'न', ',': ',', '.': '।', '/': 'र',

    // Bottom row letters (ZXCV) - shifted state
    'Z': 'श', 'X': 'ह', 'C': 'अ', 'V': 'ख', 'B': 'द', 'N': 'ल', 'M': 'न', '<': '्', '>': '।', '?': 'र',

    // Special characters
    '`': 'ञ', '~': 'ञ',

    // Space
    ' ': ' '
};


const NepaliInputField = ({ name, placeholder, className }: NepaliField) => {
    const [field, meta, helpers] = useField(name);

    const handleInputChange = (inputValue: string) => {
        let nepaliValue = '';

        for (let i = 0; i < inputValue.length; i++) {
            const char = inputValue[i];
            nepaliValue += englishToNepaliMap[char] || char;
        }

        helpers.setValue(nepaliValue);
    };

    return (
        <>
            <div
                className={`w-full border rounded-lg transition-all duration-200 bg-gray-50 ${meta.touched && meta.error
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent"
                    }`}
            ></div>
            <Field
                {...field}
                onChange={(e: any) => handleInputChange(e.target.value)}
                type="text"
                onBlur={() => helpers.setTouched(true)}
                placeholder={placeholder}
                className={className || "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"}
            />
        </>
    );
};

export default NepaliInputField;
