export const parseResponseError = (error: any) => {
    return error.response?.data?.message ?? error.message;
};
