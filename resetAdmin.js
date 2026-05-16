require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./src/models/User');

const resetAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected');

    // Delete existing admin user(s)
    await User.deleteMany({ role: 'admin' });
    console.log('Old admin user deleted');

    // Create new admin with updated credentials
    const adminUsername = process.env.ADMIN_USERNAME;
    const adminPassword = process.env.ADMIN_PASSWORD;

    await User.create({
      username: adminUsername,
      password: adminPassword,
      role: 'admin'
    });

    console.log(`New admin created:`);
    console.log(`  Username: ${adminUsername}`);
    console.log(`  Password: ${adminPassword}`);
    console.log('Done!');
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
};

resetAdmin();
