export function sagaWrapper(saga: any, errorHandle: any) {
    return function* (action: {}) {
        try {
            yield saga(action);
        } catch (e) {
            yield errorHandle(action);
        }
    };
}