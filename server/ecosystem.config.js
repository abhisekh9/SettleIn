module.exports = {
  apps: [
    {
      name: "SettleIN",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};