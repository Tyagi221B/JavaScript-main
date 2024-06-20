function isBalanced(s) {
	const stack = [];

	const matchingParenthis = {
		")": "(",
		"}": "{",
		"]": "[",
	};

	// Iterate through each charater in the string;
	for (let i = 0; i < s.length; i++) {
		const char = s[i];

		// If a character is an opening parenthis push it in the stack
		if (char === "(" || char === "{" || char === "[") {
			stack.push(char);
		} else if (char === ")" || char === "}" || char === "]") {
			// Check if the stack is empty or the top element of the stack doesn't match the corresponding opening parenthesis
			if (stack.length === 0 || stack.pop() !== matchingParenthis[char]) {
				return false;
			}
		}
	}
}
// Example usage:
console.log(isBalanced("({[()]})")); // true
console.log(isBalanced("({[([)])})")); // false
console.log(isBalanced("{{[[(())]]}}")); // true
console.log(isBalanced("[(])")); // false
