angular-validation (ru, en, pl, ua)
=========================

Using angular-validation
---
```html
<script src="angular-validation.js"></script>
<script src="locale/angular-validation-rule-ru.js"></script>
```

angular.module('yourApp', ['validation']);

// including your validation rule
angular.module('yourApp', ['validation', 'validation.rule']);
```

Writing your First Code
====
```html
<form name="Form">
    <div class="row">
        <div>
            <label>Required</label>
            <input type="text" name="required" ng-model="form.required" validator="required">
        </div>
        <div>
            <label>Url</label>
            <input type="text" name="url" ng-model="form.url" validator="required, url">
        </div>
        <button validation-submit="Form" ng-click="next()">Submit</button>
        <button validation-reset="Form">Reset</button>
    </div>
</form>
```