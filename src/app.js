const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
const projectRoutes = require('./routes/projectRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const enquiryRoutes = require('./routes/enquiryRoutes');
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const uploadRoutes = require('./routes/uploadRoutes');

app.use('/api/projects', projectRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/enquiries', enquiryRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/upload', uploadRoutes);

// Basic Route
app.get('/', (req, res) => {
  res.json({ message: 'Fagency API is running' });
});

module.exports = app;
