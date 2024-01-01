import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";

interface User {
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    avatar?: string;
}

interface UserWithMethods extends User {
    matchPassword: (enteredPassword: string) => Promise<boolean>
}

const userSchema = new Schema<UserWithMethods>(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        },
        avatar: {
            type: String,
            required: true,
            default: "/avatar-placeholder.jpg"
        }
    },
    {
        timestamps: true, 
        //Adds createdAt and updatedAt fields to the documents, automatically tracking the time of creation and last update. 
    }
)

//Method for matching the password entered while logging in with the password stored in the Mongodb database.
userSchema.methods.matchPassword = async function (enteredPassword: string) {
    const user = this;
    return await bcrypt.compare(enteredPassword, user.password);
};


//Below chunk of code is being used hashing the password for security
// This pre-save middleware will hash the password before saving it to the database, ensuring that stored passwords are secure.
userSchema.pre('save', async function (next) {
    const user = this;

    // Hash the password only if it has been modified or is new
    if (!user.isModified('password')) {
        next();
    }    
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        user.password = hashedPassword;
        next();
    } catch(error: any) {
        next(error);
    }
})





const User = mongoose.model<UserWithMethods>("User", userSchema);
//Above line creates a Mongoose model named User based on the userSchema we defined above. This model will be used to interact with the MongoDB collection associated with users.

export default User;