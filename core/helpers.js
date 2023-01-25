import util from 'util';
import childProcess from 'child_process';

export const exec = async cmd => {
    const execute = util.promisify(childProcess.exec);
    return execute(cmd);
};

export const series = async cmds => {
    /* eslint-disable no-restricted-syntax, no-await-in-loop */
    for (const cmd of cmds) {
        const { stderr, stdout } = await exec(cmd);

        if (stderr) {
            console.log(stderr);
            console.log(stdout);
            return stderr;
        }
    }
    return null;
};

export const allPropertiesAreNull = obj => {
    for (const key in obj) {
        if (obj[key]) {
            return false;
        }
    }

    return true;
};

export const uniqBy = (array, key) => {
    return [...new Map(array.map(item => [item[key], item])).values()];
};

export const formatSqlData = async (data, uniqProperty) => {
    try {
        const result = JSON.parse(`[${data}]`);

        if (result && result.length) {
            const isArrayEmpty = await allPropertiesAreNull(result[0]);
            return isArrayEmpty ? [] : uniqProperty ? uniqBy(result, uniqProperty) : result;
        }

        return [];
    } catch (error) {
        console.log(`Error happened in formatting SQL query: `, error);
        return [];
    }
};

