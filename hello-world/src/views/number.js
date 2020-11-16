const set = () => {
    console.log('set');
}

const get = () => {
    console.log('get');
    set();
};

export default {
    set,
    get
}