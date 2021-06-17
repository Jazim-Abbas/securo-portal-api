exports.promise = (handler) => {
    return async (req, res, next) => {
        try {
            await handler(req, res);
        }
        catch (err) {
            res.status(404).json({
                message: `${err}`
            })
        }
    }
}