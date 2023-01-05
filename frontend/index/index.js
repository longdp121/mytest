var myFunc = require('./src/func');
var resultComps = require('./comps/result');

var app = {
    btnHandler : function() {
        var btns = document.querySelectorAll('.btn.btn-primary');
        btns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                var demo = document.querySelector('#demo');
                demo.innerHTML = '';
                var data = myFunc(btn);
                demo.innerHTML = resultComps(data);
            });
        });
    },
    start: function() {
        this.btnHandler();
    }
};

app.start();