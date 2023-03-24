type SystemConfiguration = {
  api: string;
};

const config: SystemConfiguration = Object.freeze({
  api: process.env.NEXT_PUBLIC_API_BASE_URL ?? '',
});

export default config;
