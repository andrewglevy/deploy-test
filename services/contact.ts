import * as AWS from 'aws-sdk';

let handler: any;
handler = async function (event: any, context: any, callback: any) {
	try {
		callback(null, 'hello world');
	} catch (err) {
		callback(err, null);
	}
};

export { handler };
