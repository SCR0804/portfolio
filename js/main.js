const str = 'Hello World';

const changeStr = (string) => {
    const newStr = string.split(' ')
    .map(item => item.slice(1) + item[0]+ 'ay').join(' ');
    return newStr;

};

console.log(changeStr(str));

