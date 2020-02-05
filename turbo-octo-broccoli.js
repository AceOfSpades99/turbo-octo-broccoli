const readline = require('readline');

console.log('TESTING');
// TODO(1) MAKE A BOT #TestTODO

const reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	prompt: 'TurdBroShell> ',
});

reader.prompt();

reader.on('line', (line) => {
	switch (line.trim()) {
	case 'hello':
		console.log('Hello!');
		break;
	case 'exit':
		console.log('Goodbye!');
		process.exit(0);
		break;
	default:
		console.log(`Say what? I might have heard '${line.trim()}'`);
		break;
	}
	reader.prompt();
}).on('close', () => {
	console.log('Have a great day!');
	process.exit(0);
});
