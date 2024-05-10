export { };

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            REST_PORT: string,
            DB_DIALECT: string,
            DB_NAME: string,
            DB_USER: string,
            DB_PASS: string,
            DB_HOST: string,
            DB_PORT: number,
        }
    }
}

