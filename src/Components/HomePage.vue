<template>
  <el-main>
    <el-row>
      <el-col :span="24" class="label">
          <label>
               Enter the Process:
          </label>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" class="searchBar">
        <div class="search">
          <el-input v-model="search"></el-input>
        </div>
        <el-button type="primary" v-on:click="display = true">Search</el-button>
      </el-col>
    </el-row>
    <el-row>
      <div v-if="display === true">
        <el-col :span="24">
          <div :key="guide.name" v-for="guide in filteredGuide">
        <span>
          <router-link :to="`${guide.routerLink}`">
             <h3>{{guide.name}}</h3>
          </router-link>
              <p>{{guide.info}}</p>
        </span> 
        </div>
      </el-col>

      </div>

    </el-row>
      
  </el-main>
</template>

<script>
export default {
    data() {
      return {
        search: '',
        display: false,
        guides: [
            {name: 'Creating a Remedy Change', info: 'How to create a simple Change in Remedy',  routerLink: 'Remedy/RemedyChange'},
            {name: 'Creating a Remedy Incident', info:  'How to raise an Incident in Remedy', routerLink: 'Remedy/RemedyIncident'},
            {name: 'AURDEV Access', info: 'Getting Access to AURDEV', routerLink: 'FolderAccess'},
            {name: 'AURTEST Access', info: 'Getiting Access to AURTEST',  routerLink: 'Folder'},
            {name: 'Requestings Hardware', info: 'Requesting Access to Certain Hardware', routerLink: 'Remedy'}
          ]
        } 
    },
    methods: {
      isExists: function () {
          console.log(this.search)
          if(this.guides.includes(this.search)) {
            console.log("Hello")
          }
          
      }
    },
    computed: {
      filteredGuide: function () {
          return this.guides.filter((guide) => {
            return guide.name.match(this.search)
          })
        }
      }
    }
</script>
<style scoped>

.label{
  padding-bottom: 10px;
}

.search{
  margin: 0 auto;
  width: 50%
}

</style>


