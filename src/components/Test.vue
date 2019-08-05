<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-6">
                <button class="btn btn-primary" @click="getList">Demo List</button>
                <button class="btn btn-primary" @click="getArray">Demo Array</button>
                <button class="btn btn-primary" @click="clone">Demo Clone</button>
            </div>
        </div>
    </div>
</template>

<script>
import { 
    demoArray, 
    demoList, 
    listIteration, 
    arrayIteration,
    clone
} from '../core/methods/list';
export default {
  name: 'Test',
  data: () => {
      return {
      }
  },
  methods: {
      getList () {
          let list = demoList(10000);
          console.log(list);
          console.time('list');
          let item = listIteration(list);
          console.timeEnd('list');
          console.log(item.id);
      },
      getArray () {
          let arr = demoArray(10000);
          console.log(arr);
          console.time('array');
          let item = arrayIteration(arr);
          console.timeEnd('array');
          console.log(item.id);
      },
      clone () {
          let myObj = {a: 123, b: 'abcd', c: {
              ad: 11,
              ac: 'str',
              user: {
                  name: 'name',
                  id: '0009'
              }
          }};
          let copyObj = clone(myObj);
          console.log(copyObj);
      }
  }
}
</script>

<style scoped>

</style>
