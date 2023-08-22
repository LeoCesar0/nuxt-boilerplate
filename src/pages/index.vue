<template>
  <div>
    <h1>{{ title }}</h1>

    <Form />
  </div>
</template>

<script setup lang="ts">
import { APP_CONFIG } from "@/static/config";

const { title } = APP_CONFIG;
</script>

<style lang="scss" scoped>
h1 {
  font-family: "FolhaTexto";
  font-style: normal;
  font-size: 18px;
  line-height: 120%;
  color: #000000;
  margin-bottom: 40px;
}
</style>
