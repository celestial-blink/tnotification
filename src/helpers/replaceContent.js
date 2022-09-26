/*
    * @param {data} for replace
    * @param {string} template = ""
*/

const replaceContent = ({ data = {}, template = "" }) => {
    let result = template;

    Object.entries(data).forEach(item => {
        result = result.replaceAll(item[0], item[1]);
    });

    return result;
}

export default replaceContent;