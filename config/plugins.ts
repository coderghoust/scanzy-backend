export default () => ({
  'cloudinary-media-library': {
    enabled: true,
    config: {
      cloudName: process.env.CLOUDINARY_NAME,
      apiKey: process.env.CLOUDINARY_API_KEY,
      encryptionKey: process.env.CLOUDINARY_ENCRYPTION_KEY,
    },
  },
  'content-type-builder': {
    enabled: true,
  },
});
