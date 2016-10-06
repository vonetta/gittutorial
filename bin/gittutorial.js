(function(main, undefined) {
    console.log('this is my main js file');
}(window.main == window.main || {}));


(function(controller, undefined) {
    console.log('this is a controller');
    var a = 'Controller Name';
}(main.controller == main.controller || {}));
