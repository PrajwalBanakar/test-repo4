<template>
  <div>
    <!-- <form @submit.prevent="createPost">
      <div>
        <label for="userId">User Id</label>
        <input type="text" id="userId" v-model="formData.userId" />
      </div>

      <div>
        <label for="cusname">Customer name</label>
        <input type="text" id="cusname" v-model="formData.cusname" />
      </div>

      <div>
        <label for="accnum">Account number</label>
        <input type="text" id="accnum" v-model="formData.accnum" />
      </div>

      <button>Create Post</button>
    </form> -->

    <h2>Comp - {{ custName }}</h2>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";

export default {
  setup() {
    const custName = ref("Test");

    return {
      custName,
    };
  },
  // data() {
  //     return
  //     {
  //         formData: {
  //             userId: '',
  //             cusname: '',
  //             accnum: '',
  //         },
  //     };
  // },
  //   methods: {
  //     createPost() {
  //       axios
  //         .post("https://jsonplaceholder.typicode.com/posts", this.formData)
  //         .then((response) => console.log(response))
  //         .catch((error) => console.log(error));
  //     },
  //   },
};
</script>

<style scoped></style>
