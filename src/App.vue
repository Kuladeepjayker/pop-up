<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/aasana.jpeg">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
      <transition name="fade" appear>
        <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
      </transition>
      <transition name="slide" appear>
        <div class="modal" v-if="showModal">  
        <h2 class="header">
          <img id="close" src="./assets/close.png"  @click="showModal = false" alt="close">
          <img id="image" style="margin-bottom: -0.4rem;padding: 2px;" src="./assets/group.png" alt="group">Mon reseau</h2>
        <div class="mainA">
          <div class="subA">
            <h4> Liste de mes proches</h4>
            <img class="imagee" src="./assets/men.png" alt="John">
            <div class="firstB" @click="handledata('user1')">
              <h3 id="sidedt">Sneha Roy<br>CEO</h3>
            </div>
            <img class="images" src="./assets/boy.png" alt="John">
            <div class="firstB"  @click="handledata('user2')">
              <h3 id="sidedt">Sneha Roy<br>CEO</h3>
            </div>
            <img class="images" src="./assets/old.png" alt="John">
            <div class="firstB"  @click="handledata('user3')">
              <div id="box">
                <h3 id="sidedt">Sneha Roy<br>CEO</h3>
              </div>
            </div>
          </div>
          <div class="subB">
            <div class="innerA">
              <h3 class="headers">Votre proche partage avec vous</h3>
              <div class="innerCards">
                <div class="secondA" v-for="data,idx in users[currentUser]['topdiv']" :key="idx">
                  <h3 class="head">
                    <img id="newImage" :src="getPic(data.image)" alt="icons">Votre proche</h3>
                    <p id="dt">{{data.username}}</p>
                </div>
              </div>
            </div>
            <div class="innerB">
              <h3 class="headers">Vos partages avec votre proche</h3>
              <div class="innerCards">
                <div class="secondA" v-for="data,idx in users[currentUser]['bottomdiv']" :key="idx">
                  <img id="newImage1" :src="getPic(data.image)" alt="icons">
                  <p>{{data.text}}</p>
                </div>
              </div>
            </div>
            <div>
              <img style="width: 40px;height: 40px;margin-left:-20rem" src="./assets/danger.png" @click="alert()" alt="">
              <h5 style="margin-top:-1.8rem;margin-left:-15rem">Alert</h5>
            </div>
          </div>
        </div>
        </div>
      </transition>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      showModal: true,
      currentUser:'user1',
      users: {
        user1:{
          topdiv:[
            {
              username:'He\'s a good old man',
              image: 'old1.jpg'

            },
            {
              username:'Best man in his colony',
              image: 'old2.jpeg'

            }
          ],
          bottomdiv:[
            {
              text:'Narayana',
              image: 'old2.jpeg'
            },
            {
              text:'Naidu',
              image: 'old1.jpg'

            }
          ]
        },
        user2:{
          topdiv:[
            {
              username:'Great watchman',
              image: 'old3.jpg'

            },
            {
              username:'Man of values',
              image: 'old4.jpg'

            }
          ],
          bottomdiv:[
            {
              text:'Robert',
              image: 'old4.jpg'
            },
            {
              text:'Rambo',
              image: 'old3.jpg'
            }
          ]
        },
        user3:{
          topdiv:[
            {
              username:'Doctor in a hospital',
              image: 'old5.jpg'

            },
            {
              username:'She codes good',
              image: 'old6.jpg'

            }
          ],
          bottomdiv:[
            {
              text:'Emilly',
              image: 'old6.jpg'
            },
            {
              text:'James',
              image: 'old5.jpg'
            }
          ]
        }
      }
    }
  },
  props: {
    msg: String
  },
  components: {
    HelloWorld
  },
  methods:{
    handledata(user){
      // console.log('hfdjkhsjkhf',user)
      this.currentUser=user
    },
    getPic (image) {
      return require('./assets/' + image)
    },
    alert(){
      this.$toast.error("ERROR!");
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
img{
  width: 100%;
  height: 100%;
}

#close{
  height: 40px;
  width:40px;
  margin-left:-20rem;
  cursor: pointer;
}
#image{
  margin-left: 20rem;
  text-align: center;
}
#newImage{
  border-radius: 4%;
  margin-left: -4.8rem;
  text-align: center;
  width: 3rem;
  height: 3rem;
  margin-top: -1rem;
}
#newImage1{
  border-radius: 4%;
  text-align: center;
  width: 10rem;
  height: 8rem;
  margin-top: -1rem;
}
.images{
  position: fixed;
  width: 14%;
  height: 21%;
  border-radius: 50%;
  margin-top: 1.5rem;
  margin-left: -9rem;
}
.imagee{
  position: fixed;
  width: 14%;
  height: 21%;
  border-radius: 50%;
  margin-top: 1.5rem;
  margin-left: -9rem;
}
.firstB {
  display: flex;
  justify-content: space-around;
  border-radius: 8%;
  margin-top: 2rem;
  margin-left: 1.9rem;
  width: 15rem;
  height: 8rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
#sidedt{
  margin-top: 2rem;
  margin-left: 7rem;
}
.box {
  display: flex;
  flex-direction: row;
  margin-left: 20%;
  margin-top: -5rem;

}
.mainA {
  display: flex;
  justify-content: space-around;
}
.subA {
  border-radius: 1%;
  text-align: center;
  margin-left: -13rem;
  margin-top: 1rem;
  width: 18rem;
  height: 33rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.subB {
  margin-top: 1rem;
  margin-left: -13rem;
  width: 15rem;
}
.innerA {
  margin-left: -12rem;
  width: 39.5rem;
  height: 15rem;
  border-radius: 1%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.innerB {
  margin-top: 1rem;
  margin-left: -12rem;
  width: 39.5rem;
  height: 15rem;
  border-radius: 1%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
#image {
  width: 30px;
  height: 30px;
}
.head {
  background-color: #f1f1f1;
  border-radius: 1% 1% 0 0;
  width: 15rem;
  height: 3rem;
  padding: 15px;
}
#dt{
  margin-top: 4rem;
  margin-left: -3rem;
}
#dt1{
  margin-top: 6rem;
  margin-left: -11rem;
}
.innerCards{
  display:flex;
}
.secondA{
  margin: 1rem;
  height: 9rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.header {
  background-color: #f1f1f1;
  padding: 20px;
  border-radius: 1% 1% 0 0;
  text-align: center;
  margin-top: -1.5rem;
}
.headers {
  background-color: #f1f1f1;
  padding: 20px;
  text-align: center;
  width: 39.6rem;
  margin-left: -0.1rem;
}

* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}

body {
 font-family: 'montserrat', sans-serif;
}


#app{
 position: relative;
 
 display: flex;
 justify-content: center;
 align-items: center;
 
 width: 100vw;
 min-height: 100vh;
 overflow-x: hidden;
}

.button {
 appearance: none;
 outline: none;
 border: none;
 background: none;
 cursor: pointer;
 
 display: inline-block;
 padding: 15px 25px;
 background-image: linear-gradient(to right, #CC2E5D, #FF5858);
 border-radius: 8px;
 
 color: #FFF;
 font-size: 18px;
 font-weight: 700;
 
 box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
 transition: 0.4s ease-out;
 
  &:hover {
    box-shadow: 6px 6px rgba(0, 0, 0, 0.6);
  }
}

.modal-overlay {
 position: absolute;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 z-index: 98;
 background-color: rgba(0, 0, 0, 0.3);
}

.modal {
 position: fixed;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 z-index: 99;
 
 width: 100%;
 max-width: 1000px;
 max-height: 1000px;
 background-color: #FFF;
 border-radius: 16px;
 
 padding: 25px;
 
 h1 {
  color: #222;
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 15px;
 }
 
 p {
  color: #666;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 15px;
 }
}

.fade-enter-active,
.fade-leave-active {
 transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
 opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
 transition: transform .5s;
}

.slide-enter,
.slide-leave-to {
 transform: translateY(-50%) translateX(100vw);
}
</style>
