const logger = () => next => action => {
    const result = next(action);
    return result;
}

export default logger;