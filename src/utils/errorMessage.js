export function getErrorMessage(response) {
  let messages = [];
  var isError = response.isError;

  if (isError) {
    if (response.message) {
      messages.push({
        key: "message",
        reason: response.message
      });
    } else {
      var responseException = response.responseException;
      var isValidationError =
        responseException.validationErrors &&
        responseException.validationErrors.length > 0;

      if (isValidationError) {
        responseException.validationErrors.forEach(element => {
          messages.push({
            key: element.name,
            reason: element.reason
          });
        });
      } else {
        messages.push({
          key: "exceptionMessage",
          reason: responseException.exceptionMessage
        });
      }
    }
  }
  return messages;
}
