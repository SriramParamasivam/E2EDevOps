export const HANDLE_ERROR = "HANDLE_ERROR";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export function handleError(reason, message) {
    return {
        type: HANDLE_ERROR,
        message,
        reason
    };
}