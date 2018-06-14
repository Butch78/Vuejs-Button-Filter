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
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
              <div :key="guide.name" v-for="guide in filteredGuide">
        <span>
          <router-link :to="`${guide.routerLink}`">
             <el-button type="primary">{{guide.name}}</el-button>
          </router-link>
        </span> 
        </div>
      </el-col>
    </el-row>
      
  </el-main>
</template>

<script>
export default {
    data() {
      return {
        search: '',
        guides: [
            {name: 'Creating a Remedy Change', routerLink: 'Remedy/RemedyChange'},
            {name: 'Creating a Remedy Incident', routerLink: 'Remedy/RemedyIncident'},
            {name: 'AURDEV Access', routerLink: 'FolderAccess'},
            {name: 'AURTEST Access', routerLink: 'Folder'},
            {name: 'Requestings Hardware', routerLink: 'Remedy'}
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


