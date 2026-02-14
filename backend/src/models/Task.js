import mongoose from 'mongoose';
const { Schema } = mongoose;

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default : "",
    },

    status: {
        type: String,
        enum: ['pending', 'in-progress', 'completed'],
        default: 'pending',
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium',
    },

    dueDate:{
        type: Date,
        default: null,

    },

    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
}, { timestamps: true },
);


export default mongoose.model('Task', taskSchema);
