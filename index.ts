import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import * as _ from "lodash";

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  let response: APIGatewayProxyResult;
  // TODO implement
  response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda 123 next versopn!"),
  };
  return response;
};
