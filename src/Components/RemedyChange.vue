<template>
  <el-main>   
    <h2>Remedy Change</h2>
    <el-steps :active="active" finish-status="success" id=steps>

          <el-step title="Step 1"> </el-step>
          <el-step title="Step 2"> </el-step>
          <el-step title="Step 3"> </el-step>
          <el-step title="Step 4"> </el-step>
    </el-steps>


    <div v-if="active === 0">
      <p>Enter go/Remedy in Internet Explorer</p>
    </div>

    <div v-if="active === 1">
      <p>Press on the Left side and Select Change -> New Change</p>
    </div>

    <div v-if="active === 2">
      <p>Enter all the Correct Details</p>
    </div>

    <div v-if="active === 3">
      <p>Get the details check by the assigned manager</p>
    </div>

    <div v-if="active === 4">
      <p>You have completed the Steps</p>
    </div>

     <el-button style="margin-top: 12px;" @click="previous">Previous step</el-button>
    <el-button style="margin-top: 12px;" @click="next">Next step</el-button>
  </el-main>
</template>
<script>
  export default {
    data() {
      return {
        i: 0,
        active: 0,
        stepNumber: 4,
        steps: [{title: 'Step ' + this.stepNumber}]
      }
    },
    mounted() {
      this.generateSteps()
    },
    methods: {
      next: function() {
        this.active++
        if (this.active > 6) this.active = 0;
      },
      previous: function() {
        this.active--
      },
      generateSteps: function () {
        for(this.i < this.stepNumber; this.i++; )
        {
          this.steps[this.i] +=  {name: 'Step ' + stepNumber}
          console.log("Matthew")
        }       
      }
    }
  }
</script>