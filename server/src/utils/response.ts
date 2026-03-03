export const successResponse = (data: any) => ({
  success: true,
  data,
  error: null,
});

export const errorResponse = (message: string) => ({
  success: false,
  data: null,
  error: message,
});