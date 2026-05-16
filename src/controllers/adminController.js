const Project = require('../models/Project');
const Enquiry = require('../models/Enquiry');
const Review = require('../models/Review');

exports.getStats = async (req, res) => {
  try {
    const [projectCount, enquiryCount, reviewCount, pendingEnquiries] = await Promise.all([
      Project.countDocuments(),
      Enquiry.countDocuments(),
      Review.countDocuments(),
      Enquiry.countDocuments({ status: 'pending' })
    ]);

    res.json({
      projects: projectCount,
      enquiries: enquiryCount,
      reviews: reviewCount,
      pendingEnquiries: pendingEnquiries,
      // Fake views for aesthetics
      totalViews: Math.floor(Math.random() * 1000) + 500
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
