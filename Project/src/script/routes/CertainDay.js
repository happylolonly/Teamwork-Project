var div = document.querySelector('div.main');
var index = {
    name: 'CertainDay',
    match: '',
    onBeforeEnter: () => console.log(`onBeforeEnter index`),
    onEnter: () => console.log(),
    onLeave: () => console.log('onLeave index')
};

export { index };