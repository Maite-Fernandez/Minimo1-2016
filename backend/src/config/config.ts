//Configuration for database connection
export default {
    DB: {
        URI: process.env.MONGODB_URI || 'mongodb://localhost/subjectsdb',
        USER: process.env.MONGODB_USER,
        PASSWORD: process.env.MONGODB_PASSWORD
    }
}