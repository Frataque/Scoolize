const { OpenAI } = require("openai");

const openai: any = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});
export default openai;
