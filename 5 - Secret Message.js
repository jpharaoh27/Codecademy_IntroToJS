let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '- 2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Step 1
secretMessage.pop();
// Step 2
console.log(`This secret message is ${secretMessage.length} words long.`);
// Step 3
secretMessage.push('to', 'program');
// Step 4
secretMessage[7] = 'right';
// Step 5
secretMessage.shift();
// Step 6
secretMessage.unshift('Programming');
// Step 7
secretMessage.splice(6, 5, 'know,');
// Step 8
console.log(secretMessage.join(' '));