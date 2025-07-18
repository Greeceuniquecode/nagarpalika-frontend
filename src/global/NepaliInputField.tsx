import { Field, useField } from 'formik';
import { type NepaliField } from '../../interface/Keyboard';

// Updated character map based on provided keyboard layout image
const englishToNepaliMap: Record<string, string> = {
  // Number row and special keys
  '`': 'ञ', '~': 'ञ',
  '1': '१', '!': 'ज्ञ',
  '2': '२', '@': 'ई',
  '3': '३', '#': 'घ',
  '4': '४', '$': 'ङ',
  '5': '५', '%': 'छ',
  '6': '६', '^': 'ट',
  '7': '७', '&': 'ठ',
  '8': '८', '*': 'ड',
  '9': '९', '(': 'ण',
  '0': '०', ')': 'ओ',
  '-': '-', '_': 'ओ',
  '=': '=', '+': '\u200C', // ZWNJ (zero width non-joiner)

  // QWERTY row
  'q': 'त', 'Q': 'थ',
  'w': 'भ', 'W': 'ठ',
  'e': 'च', 'E': 'छ',
  'r': 'त', 'R': 'ट',
  't': 'थ', 'T': 'ठ',
  'y': 'ग', 'Y': 'ङ',
  'u': 'ष', 'U': 'ञ',
  'i': 'य', 'I': 'ई',
  'o': 'उ', 'O': 'ऊ',
  'p': 'प', 'P': 'फ',
  '[': 'े', '{': 'ै',
  ']': 'ु', '}': 'ू',
  '\\': '्', '|': 'ॐ',

  // Home row
  'a': 'श', 'A': 'श्र',
  's': 'ह', 'S': 'ष',
  'd': 'अ', 'D': 'आ',
  'f': 'ख', 'F': 'घ',
  'g': 'द', 'G': 'ध',
  'h': 'ज', 'H': 'झ',
  'j': 'ल', 'J': 'ळ',
  'k': 'क', 'K': 'ख',
  'l': 'स', 'L': 'श',
  ';': '।', ':': ':',
  '\'': 'ि', '"': 'ी',

  // Bottom row
  'z': 'ञ', 'Z': 'ण',
  'x': 'व', 'X': 'व्',
  'c': 'ब', 'C': 'भ',
  'v': 'न', 'V': 'न्',
  'b': 'म', 'B': 'ं',
  'n': 'ल', 'N': 'ः',
  'm': 'त', 'M': 'त्',
  ',': ',', '<': '«',
  '.': '.', '>': '»',
  '/': 'र', '?': 'ऱ',

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
            <Field
                {...field}
                onChange={(e: any) => handleInputChange(e.target.value)}
                type="text"
                onBlur={() => helpers.setTouched(true)}
                placeholder={placeholder}
                className={
                    className ||
                    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                }
                style={{ fontFamily: 'Kalimati' }}
            />
            {meta.touched && meta.error && (
                <p className="text-red-500 text-sm mt-1">{meta.error}</p>
            )}
        </>
    );
};

export default NepaliInputField;
