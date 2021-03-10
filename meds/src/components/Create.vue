<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Add Item</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addItem">
                    <div class="form-group">
                        <label>Item Name:</label>
                        <input type="text" class="form-control" v-model="item.name"/>
                    </div>
                    <div class="form-group">
                        <label>Component 1:</label>
                        <input type="text" class="form-control" v-model="item.component1"/>
                    </div>
                    <div class="form-group">
                        <label>Component 2</label>
                        <input type="text" class="form-control" v-model="item.component2"/>
                    </div>
                    <div class="form-group">
                        <label>Component 3</label>
                        <input type="text" class="form-control" v-model="item.component3"/>
                    </div>
                    <div class="form-group">
                        <label>Component 4</label>
                        <input type="text" class="form-control" v-model="item.component4"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Add Item"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  Component: {
      name: 'AddItem'
  },
  data() {
      return {
          item: {}
      }
  },
  methods: {
      addItem() {
           let uri = 'http://localhost:4000/medicines/add';
            this.axios.post(uri, this.item).then((response) => {
                console.log(response.data)
            });
        }
    }
}
</script>