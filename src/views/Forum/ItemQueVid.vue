<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },

};
</script>

<template>
  <a :href="'/que/' + item.id">
    <div class="card">
      <div class="card-header">
        <span class="username">{{ item.user_name }}</span>
        <span class="answers">Ответов: {{ item.a_cnt }}</span>
      </div>
      <div class="card-content">
        <p class="question">{{ item.title }}</p>
      </div>
      <div class="card-footer">
        <span class="date">Дата создания: {{ item.date_create }}</span>
      </div>
    </div>
  </a>
</template>
<style scoped>
:root {
  --font-family: "Rubik", sans-serif;
  --second-family: "Inter", sans-serif;
}
.card {
  width: 300px;
  border: 2px solid #6e58df;
  border-radius: 15px;
  padding: 15px;
  box-sizing: border-box;
  font-family: sans-serif;
  background-color: white;
  transition: all 0.3s;
}
.card-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.username {
  font-weight: bold;
  color: #6e58df;
}
.answers {
  font-size: 14px;
  color: #888;
}
.card-content {
  margin-bottom: 10px;
}
.question {
  font-size: 16px;
  line-height: 1.4;
  color: #333;
}
.card-footer {
  font-size: 12px;
  color: #aaa;
}
.card:hover {
  transform: scale(1.05);
  cursor: pointer;
}
</style>
