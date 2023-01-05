function myFunc(btn) {
    var name = btn.parentElement.parentElement.firstElementChild.innerText;
    var userName = btn.parentElement.parentElement.firstElementChild.nextElementSibling.innerText;
    return {
        name: name,
        userName: userName
    }
};

module.exports = myFunc;