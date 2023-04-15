<template>
    <div>
      <div class="container">
        <div class="animated-border"></div>
        <div class="corner">
          <div class="content">
            <p>Carregando...</p>
          </div>
        </div>
      </div>
    </div>
</template>



<style scoped>
        .container {
          width: 200px;
          height: 200px;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        .animated-border {
          width: 400px;
          height: 190px;
          background: #de0d9c;
          position: absolute;
          animation: rotate 3s infinite ease-in-out;
        }
        .corner {
          width: 198px;
          height: 198px;
          background: #000;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .content {
          width: 180px;
          height: 180px;
          background: #000;
          z-index: 2;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 2px solid #de0d9c;
        }
        @keyframes rotate {
          100% {
            transform: rotate(360deg);
          }
        }
</style>