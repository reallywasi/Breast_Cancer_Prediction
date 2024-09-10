export const requireAuth = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    // Verify token logic here
    next();
  };
  