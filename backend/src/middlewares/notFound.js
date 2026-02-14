const notFound = (req, res, next) => {
    const err = new Error("page/resource not found");
    err.status = 404;
    next(err);
};

export default notFound;