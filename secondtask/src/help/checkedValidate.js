const checkedValidate = (titleInp, time, fn) => {
    if (time !== '' && titleInp !== '') {
        fn(true);
    } else {
        fn(false);
    }
}

export default checkedValidate;