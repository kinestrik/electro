<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  computed: {
    link() {
      return this.images?.[0] || "";
    },
  },
};
</script>

<template>
  <a :href="`/examples/${id}`" class="card-link">
    <div class="card">
      <img :src="link" alt="" class="img" />
      <div class="text-container">
        <p class="title">{{ title }}</p>
        <p class="address">{{ address }}</p>
      </div>
    </div>
  </a>
</template>

<style scoped>
.card {
  width: 300px;
  height: 350px;
  border-radius: 21px;
  box-shadow: 0px 0px 8px rgba(34, 60, 80, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 21px 21px 0 0;
}

.text-container {
  padding: 15px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.title,
.address {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  margin: 0;
}

.title {
  font-size: 20px;
  font-weight: 600;
}

.address {
  font-size: 16px;
  color: #666;
}
</style>