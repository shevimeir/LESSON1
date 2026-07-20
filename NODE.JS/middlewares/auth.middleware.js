
export function checkAuthKey(req, res, next) {
    console.log(`[Middleware] Checking authentication for: ${req.method} ${req.url}`);

    const clientKey = req.headers['auth-key'];

    const SECRET_KEY = "mySecret123"; 

    if (!clientKey || clientKey !== SECRET_KEY) {
        return res.status(401).json({ message: "שגיאת אימות: מפתח auth-key חסר או שגוי" });
    }

    next();
}