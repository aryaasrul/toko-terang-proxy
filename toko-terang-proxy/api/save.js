export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwN3qR9-3RGgktVwsepqpodtIqW7yo4y0ISHlOmhnRmKgdH01p6v0nkC33dDvrEI6U/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(req.body)
      });

      const data = await response.json();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: "Failed to reach Google Apps Script", detail: error.message });
    }
  }

  res.status(405).json({ error: "Method Not Allowed" });
}