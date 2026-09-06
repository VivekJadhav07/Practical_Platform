const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.post("/run", async (req, res) => {
    try {
        const { code, language_id, stdin } = req.body;

        const response = await axios.post(
            "https://ce.judge0.com/submissions?base64_encoded=false&wait=true",
            {
                source_code: code,
                language_id: Number(language_id),
                stdin: stdin || ""
            }
        );

        res.json(response.data);

    } catch (error) {
        console.error(error.message);

        res.status(500).json({
            error: "Code execution failed"
        });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});