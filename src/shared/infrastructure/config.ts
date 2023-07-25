export const config = {
  server: {
    port: process.env.PORT || 3000,
  },
  mongodb: {
    url: process.env.DB_URL || "mongodb://127.0.0.1:27017/business-review-api",
  },
};
