const Enquiry = require('../models/Enquiry');

exports.submitEnquiry = async (req, res) => {
  try {
    const enquiry = new Enquiry(req.body);
    const newEnquiry = await enquiry.save();
    res.status(201).json(newEnquiry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.json(enquiries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateEnquiryStatus = async (req, res) => {
  try {
    const enquiry = await Enquiry.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    if (!enquiry) return res.status(404).json({ message: 'Enquiry not found' });
    res.json(enquiry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
