export const successResponse = (data) => ({
  result: true,
  message: '',
  data,
});

export const failureResponse = (data) => ({});

export const pageableResponse = ({
  totalPages,
  currentPage,
  totalElements,
  ...data
}) => ({
  totalPages,
  currentPage,
  totalElements,
  ...data,
});
