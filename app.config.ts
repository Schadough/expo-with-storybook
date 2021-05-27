import dotenv from "dotenv";
dotenv.config();

export default ({ config }) => {
  switch (process.env.NODE_ENV != null) {
    case(process.env.NODE_ENV === "development"): {
      return {
        extra: {
          __STORYBOOK__: process.env.STORYBOOK === "true",
        },
        ...config
      }
    } 
    case(process.env.NODE_ENV === "production"): {
      return {
        ...config
      }
    }
  }

  return {
    ...config,
  };
};