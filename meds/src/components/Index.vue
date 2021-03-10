<template>
    <div>
        <h2>Medicine</h2>
            <div class="form-group">
                <input type="text" v-model="searchString.text" v-on:input="changeItems" id="credit-limit-input" class="form-control" placeholder="Search"/>
            </div>
        <div class="col" style="border:1px black solid; margin-bottom:5px" v-for="item in filteredItems" :key="item._id">
            <div class="row">
                <div class="col">
                    {{ item.name }}
                </div>
                
            </div>
            <div class="row">
                <div class="col-3">{{ item.component1 }}</div>
                <div class="col-3">{{ item.component2 }}</div>
                <div class="col-3">{{ item.component3 }}</div>
                <div class="col-3">{{ item.component4 }}</div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data(){
            return{
                filteredItems: [],
                items: [],
                searchString: []
            }
        },

        created: function()
        {
            this.fetchItems();
        },

        methods: {
            changeItems(){
                console.log(this.searchString.text);
                if(this.searchString.text!=""){
                    this.filteredItems = [];
                    for(let item in this.items){
                        var stringName = this.items[item].name;
                        console.log(stringName.includes(this.searchString.text))
                        if(stringName.includes(this.searchString.text)){
                            this.filteredItems.push(this.items[item]);
                        }
                    }
                }else{
                    this.filteredItems = this.items;
                }
            },
            fetchItems()
            {
              let uri = 'http://localhost:4000/medicines';
              this.axios.get(uri).then((response) => {
                  this.items = response.data;
                  this.filteredItems = this.items;
              });
            }
        }
    }
</script>