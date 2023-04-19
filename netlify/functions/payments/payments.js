// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const dotenv = require('dotenv')
dotenv.config()
const paystack = require('paystack')(process.env.PAYSTACK_SECRET)
const validateCartItems = require('use-shopping-cart/utilities').validateCartItems

const handler = async (event) => {
  let product;
  try {
    const subject = event.queryStringParameters.name || 'World'
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${subject}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
