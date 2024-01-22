const getEnvVariable = (varName: keyof ImportMetaEnv): string => {
  const value = import.meta.env[varName] as string;
  if (!value) {
    throw new Error(`${varName} is not defined in .env file`);
  }
  return value;
};

export const getBaseUrl = (): string => {
  return getEnvVariable('VITE_REACT_APP_BASE_URL');
};
export const getEnvironmentName = (): string => {
  return getEnvVariable('VITE_REACT_APP_ENVIRONMENT_NAME');
};
