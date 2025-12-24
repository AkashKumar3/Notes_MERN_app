import mongoose from 'mongoose'

const connectDb = async () => {
    console.log(process.env.MONGO_DB)
    try {
        const connectdb = await mongoose.connect(process.env.MONGO_DB, {})
        console.log(`mongodb connected ${connectdb.connection.host}`)
    } catch (error) {
        console.log(`mongodb not connected ${error}`)
    }
}

export default connectDb;