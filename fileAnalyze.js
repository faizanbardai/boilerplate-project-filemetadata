const fs = require("fs");

const fileAnalyze = (req, res) => {
  const file = req.file;
  const name = file.originalname;
  const type = file.mimetype;
  const size = file.size;
  fs.unlinkSync(file.path);
  res.send({ name, type, size });
};

module.exports = fileAnalyze;
