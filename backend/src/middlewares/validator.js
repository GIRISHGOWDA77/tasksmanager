const validator = (Schema) => {
    return (req, res, next) => {
        const { error , value } = Schema.validate(req.body,{abortEarly:true});
        if (error) {
            error.status = 400;
             next(error);
        }
        req.body = value;
        next();
    };
};


export default validator;