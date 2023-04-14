<template>
    <div>
        <div class="card center">
            <h1 class="center">Card</h1>
        </div>
    </div>
</template>



<style scoped>
body {
  height: 100vh;
  font-family: sans-serif;
  background-color: #EEE;
  background-image: linear-gradient(45deg, #3cba5c, transparent);
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card {
  position: relative;
  overflow: hidden;
  width: 237px;
  height: 277px;
  border-radius: 4px;
}
.card h1 {
  border-radius: 4px;
  width: 230px;
  height: 270px;
  background-image: linear-gradient(#ffffff, #ffffff);
  color: #FFF;
  animation: color 5s infinite linear;
}
.card h1::before {
  content: '';
  position: absolute;
  width: 100px;
  height: 400px;
  background-image: linear-gradient(#05c438 , #05aa31);
  animation: spin 2s infinite linear;
  z-index: -1;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>