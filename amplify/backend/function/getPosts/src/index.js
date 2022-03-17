const storiesFetcher = require("medium-stories-fetcher");

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  const feed = await storiesFetcher.getFeed("@jan-sommer");
  console.log(`FEED: ${JSON.stringify(feed)}`);
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify(feed),
  };
};
