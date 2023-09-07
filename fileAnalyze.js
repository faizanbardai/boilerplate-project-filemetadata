const fs = require("fs");

const fileAnalyze = (req, res) => {
  const file = req.file;
  const name = file.originalname;
  const type = file.mimetype;
  const size = file.size;

  const dir = "./uploads";
  fs.rmSync(dir, { recursive: true, force: true });
  res.send({ name, type, size });
};

module.exports = fileAnalyze;
