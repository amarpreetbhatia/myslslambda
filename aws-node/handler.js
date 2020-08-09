'use strict';

module.exports.hello = async event => {
  console.log('Second update');
  await new Promise(resolve => setTimeout(resolve, 5000));
  // setInterval(() => console.log('timeout'), 4000);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello world!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
