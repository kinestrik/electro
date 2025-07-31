<script>
export default {
  mounted() {
    document.title = "Функция недоступна";
  }
}
</script>

<template>
    <div class="background">
        <h1>Функция недоступна</h1>
        <a href="/"><button>На главную</button></a>
    </div>
</template>

<style scoped>
.background {
    width: 100%;
    height: 92vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 70px;

    user-select: none;
}

h1 {
    font-size: 50px;
    font-weight: 700;
    color: #161616;
    text-align: center;
}

button {
    width: 190px;
    height: 50px;
    border-radius: 12px;
    border: none;
    background-color: var(--color);
    color: white;
    cursor: pointer;

    font-weight: 600;
    font-size: 20px;

    transition: all 100ms;
}


button:active {
    background-color: #4200FF;
    color: #fff;
}

@media (hover: hover) {
    button:hover {
        background-color: #2d00aa;
    }
    
    button:active {
        background-color: #240088;
    }
}

@media(max-width: 600px) {
    h1 {
        font-size: 36px;
    }
}

</style>