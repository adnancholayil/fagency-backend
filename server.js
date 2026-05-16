require('dotenv').config(); // Load env vars
const app = require('./src/app');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

const User = require('./src/models/User');

mongoose.connect(MONGODB_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    
    // Seed admin user if not exists
    const adminExists = await User.findOne({ role: 'admin' });
    if (!adminExists) {
      const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
      const adminUsername = process.env.ADMIN_USERNAME || 'admin';
      
      await User.create({
        username: adminUsername,
        password: adminPassword,
        role: 'admin'
      });
      console.log('Admin user created successfully');
      console.log(`Username: ${adminUsername}`);
      console.log(`Password: ${adminPassword}`);
    }

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
  });

