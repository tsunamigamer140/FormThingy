export default function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, phone, gender, message } = req.body;

        if (!name || !email || !phone || !gender) {
            return res.status(400).json({ message: 'All fields are required!' });
        }

        res.status(200).json({
            message: `Thank you, ${name}! Your form has been successfully submitted.`,
            data: { name, email, phone, gender, message },
        });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
