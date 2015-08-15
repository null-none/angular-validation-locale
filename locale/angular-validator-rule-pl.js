(function() {
    angular.module('validation.rule', ['validation'])
        .config(['$validationProvider',
            function($validationProvider) {
                var expression = {
                    required: function(value) {
                        return !!value;
                    },
                    url: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
                    email: /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
                    number: /^\d+$/,
                    name: /[ё\wа-я]+/ig,
                    minlength: function(value, scope, element, attrs, param) {
                        return value.length >= param;
                    },
                    maxlength: function(value, scope, element, attrs, param) {
                        return value.length <= param;
                    }
                };

                var defaultMsg = {
                    required: {
                        error: 'Nie zapełnione pola',
                        success: ''
                    },
                    url: {
                        error: 'Nieprawidłowy adres URL',
                        success: ''
                    },
                    email: {
                        error: 'Nieprawidłowy format adresu email',
                        success: ''
                    },
                    number: {
                        error: 'Nieprawidłowy format numeru',
                        success: ''
                    },
                    name: {
                        error: 'Proszę podać swoje imię i nazwisko. Dozwol',
                        success: ''
                    },
                    minlength: {
                        error: 'Za krótki',
                        success: ''
                    },
                    maxlength: {
                        error: 'Za długo',
                        success: ''
                    }
                };

                $validationProvider.setExpression(expression).setDefaultMsg(defaultMsg);

                angular.extend($validationProvider, {
                    validCallback: function (element){

                    },
                    invalidCallback: function (element) {

                    }
                });
    
            }
        ]);
}).call(this);