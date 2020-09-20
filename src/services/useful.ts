export const stringFy = (object?: object | null): string => {
    try {
        return JSON.stringify(object, null, 2);
    } catch (error) {
        loggerWarn('UsefulService', 'stringFy', error);
        throw error;
    }
};

export const loggerInfo = (
    fileName: string,
    functionName: string,
    data?: any,
) => {
    if (__DEV__) {
        const dateNow = new Date().toLocaleTimeString();
        if (data) {
            // tslint:disable-next-line: no-console
            console.info(
                `${dateNow} -> [${fileName}] -> ${functionName}() -> data = `,
                stringFy(data),
            );
        } else {
            // tslint:disable-next-line: no-console
            console.info(`${dateNow} -> [${fileName}] -> ${functionName}()`);
        }
    }
};

export const loggerWarn = (
    fileName: string,
    functionName: string,
    error: any,
) => {
    if (__DEV__) {
        const dateNow = new Date().toLocaleTimeString();
        // tslint:disable-next-line: no-console
        console.warn(
            `${dateNow} -> [${fileName}] -> ${functionName}() -> error = `,
            stringFy(error),
        );
    }
};
