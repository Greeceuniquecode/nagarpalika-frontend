import { Field, useField } from 'formik';
import { type NepaliField } from '../../interface/Keyboard';
import { useRef, useState, useEffect } from 'react';

const NepaliInputField = ({ name, placeholder, className }: NepaliField) => {
    const [field, meta, helpers] = useField(name);
    const inputRef = useRef<HTMLInputElement>(null);
    
    // State for buffering and shift tracking
    const [buffer, setBuffer] = useState('');
    const [buffStart, setBuffStart] = useState(false);
    const [shiftPressed, setShiftPressed] = useState(false);

    // Base mapping for normal keys
    const baseMap: Record<string, string> = {
        // First row
        '`': 'ञ', '1': '१', '2': '२', '3': '३', '4': '४', '5': '५', 
        '6': '६', '7': '७', '8': '८', '9': '९', '0': '०', 
        '-': '-', '=': 'ृ',
        
        // Second row
        'q': 'त्र', 'w': 'ध', 'e': 'भ', 'r': 'च', 't': 'त', 
        'y': 'थ', 'u': 'ग', 'i': 'ष', 'o': 'य', 'p': 'उ', 
        '[': 'े', ']': 'ै', '\\': '्',
        
        // Third row
        'a': 'ब', 's': 'क', 'd': 'म', 'f': 'ा', 'g': 'न', 
        'h': 'ज', 'j': 'व', 'k': 'प', 'l': 'ि', ';': 'र', 
        '\'': '्',
        
        // Fourth row
        'z': 'श', 'x': 'ह', 'c': 'अ', 'v': 'स', 'b': 'द', 
        'n': 'ल', 'm': 'य', ',': ',', '.': '।', '/': 'य्',
        
        // Space
        ' ': ' '
    };

    // Shift mapping for uppercase/special characters
    const shiftMap: Record<string, string> = {
        // First row shifted
        '~': 'ञ्', '!': 'ज्ञ', '@': 'द्ध', '#': 'घ', '$': 'द्घ', 
        '%': 'झ', '^': 'ठ', '&': 'छ', '*': 'ट', '(': '(', 
        ')': ')', '_': 'ः', '+': 'ृ',
        
        // Second row shifted
        'Q': 'त्र', 'W': 'ध', 'E': 'भ', 'R': 'च', 'T': 'त', 
        'Y': 'थ', 'U': 'ग', 'I': 'ष', 'O': 'य', 'P': 'ऊ', 
        '{': 'ो', '}': 'ौ', '|': '्',
        
        // Third row shifted
        'A': 'ब', 'S': 'क', 'D': 'म', 'F': 'ँ', 'G': 'न', 
        'H': 'ज', 'J': 'व', 'K': 'प', 'L': 'ी', ':': 'र', 
        '"': '्',
        
        // Fourth row shifted
        'Z': 'श', 'X': 'ह', 'C': 'आ', 'V': 'स', 'B': 'द', 
        'N': 'ल', 'M': 'य', '<': ',', '>': '.', '?': 'य्'
    };

    // Alt key combinations (from images)
    const altMap: Record<string, string> = {
        '0161': '¡', '0191': '¿', '0223': 'ß', '0147': '“', '0231': 'ç',
        '0205': 'Í', '0203': 'Ë', '0139': '‹', '0218': 'Ú', '0230': 'æ',
        '0247': '÷', '0198': 'Æ', '0177': '±', '0150': '–', '0151': '—',
        '0133': '…', '0167': '§', '0182': '¶', '0176': '°', '0149': '•',
        '0140': 'Œ', '0229': 'å', '0129': '', '0162': '¢', '0132': '„',
        '0204': 'Ì', '0216': 'Ø', '0171': '«', '0165': '¥', '0248': 'ø',
        '0207': 'Ï', '0137': '‰', '0170': 'ª'
    };

    // Sequence mapping with back_track values
    const sequenceMap: Record<string, { replacement: string, back_track: number }> = {
        "em": { replacement: "झ", back_track: 2 },
        "If": { replacement: "क्ष", back_track: 2 },
        "if": { replacement: "ष", back_track: 2 },
        ")f": { replacement: "ण", back_track: 2 },
        "f]": { replacement: "ो", back_track: 2 },
        "f}": { replacement: "ौ", back_track: 2 },
        "cf": { replacement: "आ", back_track: 2 },
        "cf]": { replacement: "ओ", back_track: 3 },
        "cf}": { replacement: "औ", back_track: 3 },
        "Qm": { replacement: "क्त", back_track: 2 },
        "km": { replacement: "फ", back_track: 2 },
        "O{": { replacement: "ई", back_track: 2 },
        "qm": { replacement: "क्र", back_track: 2 },
        "pm": { replacement: "फ्र", back_track: 2 },
        "P]": { replacement: "ऊ", back_track: 2 },
        "c+": { replacement: "आ", back_track: 2 },
        "cM": { replacement: "आ", back_track: 2 },
        "0f": { replacement: "द", back_track: 2 },
        "k+m": { replacement: "फ्र", back_track: 3 },
        "e+m": { replacement: "झ", back_track: 3 },
        "bI": { replacement: "द्य", back_track: 2 },
        "Alt+0165+o": { replacement: "¥o", back_track: 10 }
    };

    // Characters that initiate buffering
    const init_check = ['e','I','i',')','f','c','Q','k','O','q','p','P','0','k+','e+','b','Alt+0165'];

    // Track shift key state globally
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Shift') setShiftPressed(true);
        };

        const handleKeyUp = (e: KeyboardEvent) => {
            if (e.key === 'Shift') setShiftPressed(false);
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    const insertAtCursor = (text: string, back_track: number) => {
        const input = inputRef.current;
        if (!input) return;
        
        const start = input.selectionStart || 0;
        const end = input.selectionEnd || 0;
        const value = field.value || '';
        
        const newValue = value.substring(0, start - back_track) + text + value.substring(end);
        helpers.setValue(newValue);
        
        // Move cursor to correct position
        setTimeout(() => {
            if (input) {
                const newPos = start - back_track + text.length;
                input.selectionStart = newPos;
                input.selectionEnd = newPos;
            }
        }, 0);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // Handle shift key separately
        if (e.key === 'Shift') {
            setShiftPressed(true);
            return;
        }

        // Allow all control and navigation keys
        const controlKeys = [
            'Control', 'Alt', 'Meta', 'Escape', 'Tab', 'CapsLock',
            'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 
            'ArrowUp', 'ArrowDown', 'Enter', 'Home', 'End',
            'PageUp', 'PageDown', 'Insert', 'Pause', 'ScrollLock', 
            'PrintScreen', 'ContextMenu', 'NumLock', 'F1', 'F2', 
            'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10',
            'F11', 'F12'
        ];
        
        if (controlKeys.includes(e.key)) {
            return;
        }

        e.preventDefault();
        const key = e.key;

        // Handle space separately
        if (key === ' ') {
            setBuffer('');
            setBuffStart(false);
            insertAtCursor(' ', 0);
            return;
        }

        // Determine actual character to use
        let char = key;
        if (shiftPressed) {
            char = shiftMap[key] || baseMap[key.toLowerCase()] || key;
        } else {
            char = baseMap[key] || key;
        }

        // Handle alt key combinations (simulated)
        if (e.altKey && key.match(/^[0-9]$/)) {
            // This would require tracking the full alt code
            // In real implementation, you'd need to capture the full code
            char = altMap[`01${key}`] || key;
        }

        // Start buffering if key is in init_check
        if (!buffStart && init_check.includes(key)) {
            setBuffStart(true);
            setBuffer(key);
            insertAtCursor(char, 0);
            return;
        }

        // Process buffered sequences
        if (buffStart) {
            const newBuffer = buffer + key;
            setBuffer(newBuffer);

            // Check for matching sequence
            const sequence = sequenceMap[newBuffer];
            if (sequence) {
                insertAtCursor(sequence.replacement, sequence.back_track);
                setBuffer('');
                setBuffStart(false);
                return;
            }

            // Reset buffer if too long
            if (newBuffer.length >= 3) {
                // Insert the buffer characters individually
                for (let i = 0; i < buffer.length; i++) {
                    const bufKey = buffer[i];
                    const bufChar = shiftPressed ? 
                        (shiftMap[bufKey] || baseMap[bufKey.toLowerCase()] || bufKey) : 
                        (baseMap[bufKey] || bufKey);
                    insertAtCursor(bufChar, 0);
                }
                insertAtCursor(char, 0);
                setBuffer('');
                setBuffStart(false);
            }
            return;
        }

        // Default key insertion
        insertAtCursor(char, 0);
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pastedText = e.clipboardData.getData('text/plain');
        let convertedText = '';
        
        // Convert each character individually
        for (let i = 0; i < pastedText.length; i++) {
            const char = pastedText[i];
            convertedText += baseMap[char] || shiftMap[char] || altMap[char] || char;
        }
        
        const input = inputRef.current;
        if (!input) return;
        
        const start = input.selectionStart || 0;
        const end = input.selectionEnd || 0;
        const value = field.value || '';
        
        const newValue = value.substring(0, start) + convertedText + value.substring(end);
        helpers.setValue(newValue);
        
        // Update cursor position
        setTimeout(() => {
            if (input) {
                const newPos = start + convertedText.length;
                input.selectionStart = newPos;
                input.selectionEnd = newPos;
            }
        }, 0);
    };

    return (
        <>
            <Field
                innerRef={inputRef}
                {...field}
                onKeyDown={handleKeyDown}
                onPaste={handlePaste}
                type="text"
                onBlur={() => helpers.setTouched(true)}
                placeholder={placeholder}
                className={
                    className ||
                    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                }
                style={{ fontFamily: 'Kalimati, Preeti, sans-serif' }}
            />
            {meta.touched && meta.error && (
                <p className="text-red-500 text-sm mt-1">{meta.error}</p>
            )}
        </>
    );
};

export default NepaliInputField;