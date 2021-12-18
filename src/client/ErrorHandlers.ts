type GpgResponse = {
  status: number;
  text: string;
};

export const handleGpgError = (response: GpgResponse): boolean => {
  if (response.status === 400) {
    console.error(response.text);
    return false;
  }
  return true;
};
