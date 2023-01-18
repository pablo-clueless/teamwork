const requiredServerEnvs = [
    'NODE_ENV',
    'MONGO_URI',
    'MONGO_URI',
    'CLOUD_NAME',
    'CLOUD_KEY',
    'CLOUD_SECRET',
    'JWT_SECRET',
    'APP_URI',
] as const

type RequiredServerEnvKeys = (typeof requiredServerEnvs)[number]

declare global {
    namespace NodeJS {
        interface ProcessEnv extends Record<RequiredServerEnvKeys, string>{}
    }
}

export {}