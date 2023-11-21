declare global{
    namespace NodeJS{
        interface ProcessEnv{
            REACT_APP_SENDGRID_API_KEY: string
            REACT_APP_FETCH_TODOS: string
            NODE_ENV: 'development' | 'production' | "test"
        }
    }
}

export {}