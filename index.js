const replace = require('replace-in-file');
const path = require('path');

const regex = /import\s+(\w+)\s+from\s+'([0-9a-zA-Z/.]+)'/g;

const options = {
  files: path.resolve(__dirname, './asset/temp.js'),
  from: regex,
  to: (...args) => {
    return `const ${args[1]} = () => ({
      component: import('${args[2]}'),
      loading: LoadingComponent,
      error: ErrorComponent,
      delay: delayTime,
      timeout: timeoutTime
    });`;
  }
};

replace(options)