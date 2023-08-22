<template>
  <form @submit.prevent="onSubmit">
    <h1>Testing Form</h1>
    <!-- Create a simple form -->
    <input type="text" name="name" placeholder="Name" v-model="formValues.name" />
    <input type="email" name="email" placeholder="Email" v-model="formValues.email" />
    <input type="text" name="age" placeholder="age" v-model="formValues.age" />
    <input type="text" name="password" placeholder="Password" v-model="formValues.password" />
    <input
      type="text"
      name="confirmPassword"
      placeholder="Confirm Password"
      v-model="formValues.confirmPassword"
    />
    <button type="submit">Submit</button>

    <div class="results">
      <h2>Results</h2>
      <pre>
        {{ JSON.stringify(formValues, null, 2) }}
      </pre>
      <!-- <p>Name: {{ form.name }}</p>
      <p>Email: {{ form.email }}</p>
      <p>Age: {{ form.age }}</p>
      <p>Password: {{ form.password }}</p>
      <p>Confirm Password: {{ form.confirmPassword }}</p> -->
    </div>
  </form>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const formValues = ref({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  age: "",
});

const submited = ref(false)

const onSubmit = () => {
  console.log(formValues.value);
  submited.value = true
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
}
h1 {
  margin-bottom: 1rem;
}
input {
  width: 100%;
  height: 50px;
  background: #f2f2f2;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 0 15px;
  font-family: "FolhaTexto";
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 120%;
  color: #000000;
}

button {
  width: 100%;
  height: 50px;
  background: #f2f2f2;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 0 15px;
  font-family: "FolhaTexto";
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 120%;
  color: #000000;
}
</style>
