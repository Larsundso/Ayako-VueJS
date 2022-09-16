<script>
import { onMounted, ref } from 'vue';

const onBottom = ref(false);

window.onscroll = () => {
  if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
    onBottom.value = true;
  } else {
    onBottom.value = false;
  }
};

const features = [
  {
    name: 'Moderation',
    desc: 'Malware detector, Anti-Spam, Captcha Verification, Blacklist, Auto-Punishments, Strike-System, Logs, etc.',
    url: 'moderation',
    image: 'https://ayakobot.com/cdn/website_assets/moderation.png',
  },
  {
    name: 'Server Customization',
    desc: 'Leveling System, Role-Play Commands, Server Currency, Welcome Messages, Giveaways with Requirements, etc',
    url: 'server',
    image: 'https://ayakobot.com/cdn/website_assets/rp.png',
  },
  {
    name: 'Role Management',
    desc: 'Button Roles, Category Roles, Auto-Roles, Sticky Roles, Booster Roles, Self-Roles, etc',
    url: 'roles',
    image: 'https://ayakobot.com/cdn/website_assets/roles.png',
  },

];

export default {
  setup() {
    onMounted(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      });

      const hiddenElements = document.querySelectorAll('.hidden');
      hiddenElements.forEach((el) => observer.observe(el));
    });
  },
  data() {
    return {
      features,
      onBottom,
    };
  },
  methods: {
    invite() {
      window.open(
        'https://discord.com/api/oauth2/authorize?client_id=650691698409734151&permissions=1642787630327&scope=bot%20applications.commands',
        '_blank',
      );
    },
    support() {
      window.open(
        'https://discord.gg/euTdctganf',
        '_blank',
      );
    },
  },
};
</script>

<template>
  <div>
    <div class="header">
      <img alt="Flower" class="firstFlower"
           src="https://ayakobot.com/cdn/website_assets/flower.png"/>
      <img alt="Flower" class="secondFlower"
           src="https://ayakobot.com/cdn/website_assets/flower.png"/>
      <img alt="Flower" class="thirdFlower"
           src="https://ayakobot.com/cdn/website_assets/flower.png"/>
      <img alt="Flower" class="forthFlower"
           src="https://ayakobot.com/cdn/website_assets/flower.png"/>
      <img alt="Flower" class="fifthFlower"
           src="https://ayakobot.com/cdn/website_assets/flower.png"/>
      <span class="name">AYAKO</span>
      <span class="shortdesc">Powerful Server management</span>
      <span class="shortdesc">and moderation Bot</span>
    </div>

    <div class="buttonsBox">
      <button class="inviteButton baseButton" @click="invite">Invite Ayako</button>
      <img alt="Green Flower" class="greenFlower"
           src="https://ayakobot.com/cdn/website_assets/greenFlower.png"/>
      <button class="joinButton baseButton" @click="support">Support Server</button>
    </div>
  </div>

  <div v-if="!onBottom" class="header">
    <svg class="scrollDown" viewBox="0 0 24 24">
      <path
        d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"
        fill="currentColor"
      ></path>
    </svg>
  </div>

  <div class="features">
    <div v-for="(feature) in features" :key="feature.url">
      <div
        :style="{'transition-delay': ['0', '200ms', '400ms']
        [features.reverse().findIndex((f) => f.name === feature.name)],
        'z-index': features.reverse().findIndex((f) => f.name === feature.name)}"
        class="hidden">
        <div class="feature">
          <img :src="feature.image" alt="" class="featureImage"/>

          <div class="featureBox">
            <h4 class="featureTitle">{{ feature.name }}</h4>
            <span class="featureDescription">{{ feature.desc }}</span>
            <br>
            <button class="learnMoreButton"
                    @click="$router.push(`commands/${feature.url}`)">Learn
              More
              ➡
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="startNow">
    <img alt="Flower" class="footerFlower1"
         src="https://ayakobot.com/cdn/website_assets/flower.png"/>
    <img alt="Flower" class="footerFlower2"
         src="https://ayakobot.com/cdn/website_assets/flower.png"/>
    <span class="footer">Build a secure, streamlined community.
    </span>
    <br>
    <button class="footerButton" @click="invite">Get Started</button>
  </div>
</template>

<style scoped>
.footerButton {
  margin-left: -2rem;
  border: none;
  background-color: #3dff56;
  color: #181818;
  padding: 1rem;
  border-radius: 1em;
  font-weight: bold;
  font-size: 1rem;
  transition: background-color 0.2s;
}

.footerButton:hover {
  background-color: #218c2f;
}

.footerFlower2 {
  position: absolute;
  width: 3em;
  margin-top: -3rem;
  margin-left: 30rem;
  rotate: 10deg;
  animation: thirdFlowerRotate 50s infinite
}

.footerFlower1 {
  position: absolute;
  width: 5em;
  margin-left: -45rem;
  margin-top: -1rem;
  animation: firstFlowerRotate 200s infinite
}

.footer {
  font-weight: bold;
  font-size: 2rem;
}

.startNow {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 5rem;
}

.hidden {
  opacity: 0;
  transition: all 1s;
  filter: blur(5px);
  transform: translateX(-100%);
}

.show {
  opacity: 1;
  filter: blur(0);
  transform: translateX(0);
}

.featureImage {
  max-width: 25rem;
  z-index: -1;
  border-radius: 1rem;
}

.featureBox {
  position: absolute;
  background-color: #cb3408;
  border-radius: 1rem;
  padding: 1.5rem;
  align-self: flex-start;
  margin-left: 17rem;
  margin-right: -10rem;
  margin-top: -5rem;
}

.learnMoreButton {
  border: none;
  background-color: transparent;
  translate: 0;
  transition: 0.2s translate linear;
}

.learnMoreButton:hover {
  translate: 0.5em;
}

.featureTitle {
  font-weight: bold;
  font-size: 1.5rem;
}

.feature {
  max-width: 30rem;
  flex-basis: 100%;
  display: flex;
  margin: 8rem;
  transition: all 1s;
}

.features {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.feature:hover {
  scale: 1.2;
}

@media (max-width: 1744px) {
  .feature {
    margin-bottom: 14rem;
  }
}

.scrollDown {
  position: fixed;
  bottom: 1rem;
  width: 5rem;
  margin-right: 1em;
  animation: 1s ease-in-out 2s both scrollDown;
  opacity: 0;
  z-index: 10;
}

@keyframes scrollDown {
  0% {
    opacity: 0
  }
  100% {
    opacity: 0.5;
    transform: translateY(2rem);
  }
}

.features {
  margin-top: 15rem;
}

.joinButton::before {
  position: absolute;
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(
    to left,
    #fe3521,
    #23d13b
  );
  z-index: -1;
  transition: opacity 0.2s linear;
  opacity: 0;
  border-radius: 0.7em;
}

.joinButton:hover::before {
  opacity: 1;
  border-radius: 0.7em;
}

.joinButton {
  animation: 1s ease-in-out 1s both joinButton;
  opacity: 0;
  color: white;
  background-image: linear-gradient(
    to right,
    #fe3521,
    #23d13b
  );
  z-index: 1;
}

@keyframes joinButton {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateX(1.5rem)
  }
}

.inviteButton {
  color: #fe3521;
  animation: 1s ease-in-out 1s both inviteButton;
  opacity: 0;
  transition: background-color 0.2s, color 0.2s;
}

.inviteButton:hover {
  color: white;
  background-color: #fe3521;
}

@keyframes inviteButton {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateX(-1.5rem)
  }
}

.baseButton {
  font-weight: bold;
  border: none;
  border-radius: 0.7em;
  padding: 1.5em 2em;
}

.buttonsBox {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
}

.greenFlower {
  width: 2.5rem;
  height: 2.5rem;
  rotate: 0;
  animation: 1s ease-in-out 1s both greenFlower;
}

@keyframes greenFlower {
  0% {
    rotate: 0deg;
  }
  100% {
    rotate: 1080deg;
  }
}

.fifthFlower {
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  margin-left: 50rem;
  margin-top: 22rem;
  opacity: 0;
  transform: translateY(5rem);
  animation: 2s cubic-bezier(0.03, 0.82, 0.13, 1.04) 0s both fifthFlower;
  rotate: 90deg
}

@keyframes fifthFlower {
  0% {
    rotate: 90deg;
    opacity: 0;
    transform: translateY(5rem);
  }
  100% {
    rotate: 100deg;
    opacity: 1;
    transform: translateY(0rem);
  }
}

.forthFlower {
  position: absolute;
  width: 3rem;
  height: 3rem;
  margin-right: 26rem;
  margin-top: 13rem;
  opacity: 0;
  transform: translateY(5rem);
  animation: 1s cubic-bezier(0.03, 0.82, 0.13, 1.04) 0s both forthFlower;
  rotate: -10deg
}

@keyframes forthFlower {
  0% {
    rotate: -10deg;
    opacity: 0;
    transform: translateY(5rem);
  }
  100% {
    rotate: -35deg;
    opacity: 1;
    transform: translateY(0rem);
  }
}

.thirdFlower {
  position: absolute;
  width: 6rem;
  height: 6rem;
  margin-left: 30rem;
  margin-top: 10rem;
  opacity: 0;
  transform: translateY(10rem);
  animation: 2s cubic-bezier(0.03, 0.82, 0.13, 1.04) 0s both thirdFlower,
  90s infinite 2s thirdFlowerRotate linear;
  rotate: 10deg
}

@keyframes thirdFlowerRotate {
  0% {
    rotate: 10deg;
  }
  100% {
    rotate: -350deg;
  }
}

@keyframes thirdFlower {
  0% {
    opacity: 0;
    transform: translateY(10rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0rem);
  }
}

.secondFlower {
  position: absolute;
  width: 7rem;
  height: 7rem;
  margin-right: 46rem;
  margin-top: 14rem;
  opacity: 0;
  transform: translateY(10rem);
  animation: 3s cubic-bezier(0.03, 0.82, 0.13, 1.04) 0s both secondFlower,
  110s infinite 1s secondFlowerRotate linear;
  rotate: -45deg;
}

@keyframes secondFlowerRotate {
  0% {
    rotate: -43deg;
  }
  100% {
    rotate: -405deg;
  }
}

@keyframes secondFlower {
  0% {
    rotate: -12deg;
    opacity: 0;
    transform: translateY(10rem);
  }
  100% {
    rotate: -45deg;
    opacity: 1;
    transform: translateY(0rem);
  }
}

@keyframes firstFlower {
  0% {
    opacity: 0;
    transform: translateY(5rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0rem);
  }
}

.firstFlower {
  position: absolute;
  width: 10rem;
  height: 10rem;
  opacity: 0;
  transform: translateY(5rem);
  animation: 4s cubic-bezier(0.03, 0.82, 0.13, 1.04) 0s both firstFlower,
  240s infinite 1s firstFlowerRotate linear;
}

.header {
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
}

.name {
  margin-top: 15rem;
  font-size: 7em;
}

.shortdesc {
  font-size: 3em;
}

@keyframes firstFlowerRotate {
  0% {
    rotate: 0;
  }
  100% {
    rotate: 360deg;
  }
}

</style>
