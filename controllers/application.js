export const health = (req, res) => {
    try {
        res.status(200).json({ message: 'API is up and running' });
    } catch (error) {
        console.log('In controller error ', error);
    }
};

