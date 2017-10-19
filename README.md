# vue-draggable

An easy-to-use draggable for [Vue.js](https://vuejs.org/) powered by [Atomic NYC](http://atomicsoftware.com).

## Installation
```
$ npm install @atomic-nyc/vue-draggable --save
```

### Browser
Include the script file then install the component with `Vue.use(VueDraggable);`

```html
<script type="text/javascript" src="/node_modules/vue/dist/vue.min.js"></script>
<script type="text/javascript" src="node_modules/@atomic-nyc/vue-draggable/dist/vue-draggable.min.js"></script>
<script type="text/javascript">
    Vue.use(VueDraggable);
</script>
```

### Module
```js
import VueDraggable from '@atomic-nyc/vue-draggable';
```

## Usage
Once installed, use it in a [Vue template](https://vuejs.org/v2/guide/syntax.html) as follows:


```html
<vue-draggable>
    <div>This div is draggable.</div>
</vue-draggable>
```

Images even become draggable:
```html
<vue-draggable>
    <img src="./assets/draggable-logo.png">
</vue-draggable>
```
