// Declaring Password character Arrays Globally
const uppercaseCharacters = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
];

const lowercaseCharacters = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const specialCharacters = [
	"+",
	"-",
	"&&",
	"||",
	"!",
	"(",
	")",
	"{",
	"}",
	"[",
	"]",
	"^",
	"~",
	"*",
	"?",
	":",
];

export const passwordGenerator = ({
	passwordLength,
	isLowercase,
	isUppercase,
	isNumeric,
	isSpecial,
}) => {
	// Validate Password passwordLength
	const passwordLengthNumber = parseInt(passwordLength, 10);

	if (isNaN(passwordLengthNumber)) {
		// Handle error
		throw new Error("Please enter a valid number as password length");
	} else {
		if (passwordLengthNumber >= 8 && passwordLengthNumber <= 128) {
			console.log(passwordLengthNumber);

			const criteria = [];

			if (isLowercase) {
				criteria.push(lowercaseCharacters);
			}

			if (isUppercase) {
				criteria.push(uppercaseCharacters);
			}

			if (isNumeric) {
				criteria.push(numericCharacters);
			}

			if (isSpecial) {
				criteria.push(specialCharacters);
			}

			const isValidOptions = criteria.filter((each) => each).length >= 2;

			if (isValidOptions) {
				const emptyPasswordArray = new Array(passwordLengthNumber).fill("");

				const passwordArray = emptyPasswordArray.map(() => {
					const randomCriteriaIndex = Math.floor(
						Math.random() * criteria.length
					);

					const randomCriteriaArray = criteria[randomCriteriaIndex];

					const randomCharacterIndex = Math.floor(
						Math.random() * randomCriteriaArray.length
					);

					const randomCharacter = randomCriteriaArray[randomCharacterIndex];

					return randomCharacter;
				});

				return passwordArray.join("");
			} else {
				// Handle error
				throw new Error("Please select 2 or more options");
			}
		} else {
			// Handle error
			throw new Error("password length must be between 8 and 128");
		}
	}
};
