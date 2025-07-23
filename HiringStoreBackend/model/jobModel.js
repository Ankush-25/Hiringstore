const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: false
    },
    jobType: {
        type: String,
        enum: ['Full-time', 'Part-time', 'Contract', 'Freelance', 'Internship'],
        required: true
    },
    category: {
        type: String,
        enum: ['IT', 'Marketing', 'Design', 'Finance', 'Healthcare', 'Education', 'Other'],
        required: true
    },
    skillsRequired: [{
        type: String
    }],
    experienceLevel: {
        type: String,
        enum: ['Entry', 'Mid', 'Senior', 'Executive'],
        required: true
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    applications: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Application'
    }],
    isActive: {
        type: Boolean,
        default: true
    },
    Vacancies:{
        type: Number,
    },
    deadline: {
        type: Date,
        required: false
    }
});
const Job = mongoose.model('Job', jobSchema);
module.exports = Job;