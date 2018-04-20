# Button

```html

<rx-button size="normal" type="red" size='small'>确定</rx-button>

```
```javascript
export default {
  
  data() {
    return {
      message:1
    }
  },
  methods: {
    btnclick(){
      console.log(1)
    }
  }
}
```
::: demo

<div>
<rx-button @click="btnclick" size="large" type="red" size='small'>确定</rx-button>
<rx-button @click="btnclick" size="small" type="green">确定</rx-button>
<rx-button @click="btnclick" type="yellow">确定</rx-button>
<rx-button @click="btnclick" type="blue">确定</rx-button>
<rx-button @click="btnclick" >确定</rx-button>
</div>

<script>
  
export default {
  
  data() {
    return {
      message:1
    }
  },
  methods: {
    btnclick(){
      console.log(1)
    }
  }
}
</script>

:::