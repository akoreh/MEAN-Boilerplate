import mongoose, {
    Schema
} from 'mongoose';

const RoleSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    number: {
        type: Number,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

export default mongoose.model('Role', RoleSchema);