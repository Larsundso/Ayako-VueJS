<script lang="ts">
import { onMounted, onBeforeUnmount } from "vue";

export default {
  data() {
    return {
      windowWidth: 0,
    };
  },
  setup() {
    onMounted(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      });

      const hiddenElements = document.querySelectorAll(".hidden");
      hiddenElements.forEach((el) => observer.observe(el));
    });

    onBeforeUnmount(() => {
      window.scrollTo(0, 0);
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>

<template>
  <div class="main">
    <div>
      <div class="header">
        <img
          alt="Flower"
          class="firstFlower"
          src="https://cdn.ayakobot.com/website_assets/flower.png"
        />
        <img
          alt="Flower"
          class="secondFlower"
          src="https://cdn.ayakobot.com/website_assets/flower.png"
        />
        <img
          alt="Flower"
          class="thirdFlower"
          src="https://cdn.ayakobot.com/website_assets/flower.png"
        />
        <img
          alt="Flower"
          class="forthFlower"
          src="https://cdn.ayakobot.com/website_assets/flower.png"
        />
        <img
          alt="Flower"
          class="fifthFlower"
          src="https://cdn.ayakobot.com/website_assets/flower.png"
        />
        <span class="name">AYAKO</span>
        <span class="shortdesc">Powerful Server manage&shy;ment</span>
        <span class="shortdesc">and moderation Bot</span>
      </div>

      <div class="buttonsBox">
        <a
          class="inviteButton button"
          href="https://invite.ayakobot.com"
          target="_blank"
        >
          Invite Ayako
        </a>
        <img
          alt="Green Flower"
          class="greenFlower"
          src="https://cdn.ayakobot.com/website_assets/greenFlower.png"
        />
        <a
          class="joinButton button"
          href="https://support.ayakobot.com"
          target="_blank"
        >
          Support Server
        </a>
      </div>
    </div>

    <div class="header">
      <svg class="scrollDown" viewBox="0 0 24 24">
        <path
          d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"
          fill="currentColor"
        ></path>
      </svg>
    </div>

    <div class="features">
      <div class="hidden">
        <div class="feature">
          <img
            alt=""
            class="featureImage"
            src="https://cdn.ayakobot.com/website_assets/moderation.png"
          />

          <div class="featureBox">
            <h4 class="featureTitle">Moderation</h4>
            <span class="featureDescription"
              >Malware detector, Anti-Spam, Captcha Verification, Blacklist,
              Auto-Punishments, Strike-System, Logs, etc.</span
            >
            <br />
            <NuxtLink class="learnMoreButton" to="/commands/moderation">
              Learn More ➡
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="hidden" style="transition-delay: 200ms">
        <div class="feature">
          <img
            alt=""
            class="featureImage"
            src="https://cdn.ayakobot.com/website_assets/rp.png"
          />

          <div class="featureBox">
            <h4 class="featureTitle">Server Customization</h4>
            <span class="featureDescription"
              >Leveling System, Role-Play Commands, Server Currency, Welcome
              Messages, Giveaways with Requirements, etc</span
            >
            <br />
            <NuxtLink class="learnMoreButton" to="/commands/server">
              Learn More ➡
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="hidden" style="transition-delay: 400ms">
        <div class="feature">
          <img
            alt=""
            class="featureImage"
            src="https://cdn.ayakobot.com/website_assets/roles.png"
          />

          <div class="featureBox">
            <h4 class="featureTitle">Role Management</h4>
            <span class="featureDescription"
              >Button Roles, Category Roles, Auto-Roles, Sticky Roles, Booster
              Roles, Self-Roles, etc</span
            >
            <br />
            <NuxtLink class="learnMoreButton" to="/commands/roles">
              Learn More ➡
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="startNow">
      <img
        alt="Flower"
        class="footerFlower1"
        src="https://cdn.ayakobot.com/website_assets/flower.png"
      />
      <img
        alt="Flower"
        class="footerFlower2"
        src="https://cdn.ayakobot.com/website_assets/flower.png"
      />
      <span class="footer">Build a secure, streamlined community. </span>
      <br />
    </div>
    <a class="footerButton button" href="https://invite.ayakobot.com" target="_blank">Get Started</a>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.footerButton {
  color: #181818;
  font-size: 1rem;
}

.footerButton:hover {
  scale: 1.1;
  animation: colorCycle infinite 3s alternate linear;
}

@keyframes colorCycle {
  0% {
    background-color: #3dff56;
  }
  25% {
    background-color: #ee6055;
  }
  50% {
    background-color: #60d394;
  }
  75% {
    background-color: #ffd97d;
  }
  100% {
    background-color: #ff9b85;
  }
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
  margin-left: 15rem;
  max-width: 15rem;
  margin-right: -10rem;
  margin-top: -5rem;
}

.learnMoreButton {
  background-color: transparent;
  translate: 0;
  transition: 0.2s translate linear;
  color: black;
  font-weight: bold;
}

.learnMoreButton:hover {
  translate: 0.5em;
}

.featureTitle {
  margin-top: 0;
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
  scale: 1.1;
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
  margin-left: -0.5rem;
  animation: 1s ease-in-out 2s both scrollDown;
  opacity: 0;
  z-index: 10;
}

@keyframes scrollDown {
  0% {
    opacity: 0;
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
  background-image: linear-gradient(to left, #fe3521, #23d13b);
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
  animation: 1s ease-in-out 2s both joinButton;
  opacity: 0;
  color: white;
  background-image: linear-gradient(to right, #fe3521, #23d13b);
  z-index: 1;
}

@keyframes joinButton {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateX(1.5rem);
  }
}

.inviteButton {
  color: #fe3521;
  background-color: white;
  animation: 1s ease-in-out 2s both inviteButton;
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
    transform: translateX(-1.5rem);
  }
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
  animation: 1s ease-in-out 2s both greenFlower;
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
  margin-left: 25rem;
  margin-top: 21rem;
  opacity: 0;
  transform: translateY(5rem);
  animation: 2s cubic-bezier(0.03, 0.82, 0.13, 1.04) 0.5s both fifthFlower;
  rotate: 90deg;
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
  margin-left: -11rem;
  margin-top: 11rem;
  opacity: 0;
  transform: translateY(5rem);
  animation: 1s cubic-bezier(0.03, 0.82, 0.13, 1.04) 0.5s both forthFlower;
  rotate: -10deg;
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
  margin-left: 15rem;
  margin-top: 10rem;
  opacity: 0;
  transform: translateY(10rem);
  animation: 2s cubic-bezier(0.03, 0.82, 0.13, 1.04) 0.5s both thirdFlower,
    90s infinite 2s thirdFlowerRotate linear;
  rotate: 10deg;
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
  margin-left: -20rem;
  margin-top: 12rem;
  opacity: 0;
  transform: translateY(10rem);
  animation: 3s cubic-bezier(0.03, 0.82, 0.13, 1.04) 0.5s both secondFlower,
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
  animation: 4s cubic-bezier(0.03, 0.82, 0.13, 1.04) 0.5s both firstFlower,
    240s infinite 0.5s firstFlowerRotate linear;
}

.header {
  margin-top: 7rem;
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

.footerFlower2 {
  position: absolute;
  width: 3em;
  margin-top: -3rem;
  margin-left: 22vh;
  rotate: 10deg;
  animation: thirdFlowerRotate 50s infinite;
}

.footerFlower1 {
  position: absolute;
  width: 5em;
  margin-left: -20vh;
  margin-top: 3rem;
  animation: firstFlowerRotate 200s infinite;
}

@media (max-width: 900px) {
  .fifthFlower {
    margin-left: 22rem;
    margin-top: 21rem;
  }
}

@media (max-width: 800px) {
  .thirdFlower {
    width: 5rem;
    height: 5rem;
    margin-left: 13rem;
    margin-top: 12rem;
  }

  .secondFlower {
    width: 6rem;
    height: 6rem;
    margin-left: -18rem;
    margin-top: 15rem;
  }
  .firstFlower {
    width: 8rem;
    height: 8rem;
    margin-top: 3rem;
  }

  .header {
    font-size: 0.5rem;
  }

  .fifthFlower {
    margin-left: 18rem;
    margin-top: 20rem;
  }
}

@media (max-width: 700px) {
  .forthFlower {
    width: 3rem;
    height: 3rem;
    margin-left: -9rem;
    margin-top: 12rem;
  }

  .secondFlower {
    width: 5rem;
    height: 5rem;
    margin-left: -15rem;
    margin-top: 16rem;
  }

  .firstFlower {
    width: 8rem;
    height: 8rem;
    margin-top: 5rem;
  }

  .thirdFlower {
    width: 5rem;
    height: 5rem;
    margin-left: 11rem;
    margin-top: 12rem;
  }

  .fifthFlower {
    margin-left: 15rem;
    margin-top: 20rem;
  }

  .feature {
    max-width: 20rem;
    margin-left: 2rem;
  }

  .featureBox {
    margin-left: 10rem;
  }
}

@media (max-width: 600px) {
  .footerFlower2 {
    margin-left: 15vh;
  }

  .footerFlower1 {
    margin-left: -15vh;
  }

  .secondFlower {
    width: 5rem;
    height: 5rem;
    margin-left: -12rem;
    margin-top: 16rem;
  }

  .firstFlower {
    width: 8rem;
    height: 8rem;
    margin-top: 5rem;
  }

  .thirdFlower {
    width: 5rem;
    height: 5rem;
    margin-left: 10rem;
    margin-top: 12rem;
  }

  .forthFlower {
    width: 3rem;
    height: 3rem;
    margin-left: -7rem;
    margin-top: 13rem;
  }

  .fifthFlower {
    margin-left: 13rem;
    margin-top: 20rem;
  }

  .header {
    font-size: 0.4rem;
  }

  .fifthFlower {
    margin-left: 14rem;
    margin-top: 20rem;
  }
}

@media (max-width: 500px) {
  .buttonsBox {
    margin-top: 5rem;
    flex-direction: column;
  }

  .fifthFlower {
    margin-left: 11rem;
    margin-top: 20rem;
  }

  @keyframes joinButton {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateY(1.5rem);
    }
  }

  @keyframes inviteButton {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateY(-1.5rem);
    }
  }

  .header {
    margin-top: 0;
  }

  .feature {
    max-width: 15rem;
    margin-left: 2rem;
  }

  .featureBox {
    margin-left: 8rem;
    max-width: 10rem;
  }

  .featureImage {
    max-width: 20rem;
  }

  .secondFlower {
    width: 5rem;
    height: 5rem;
    margin-left: -11rem;
    margin-top: 17rem;
  }
}

@media (max-width: 430px) {
  .footerFlower1 {
    margin-top: 9vh;
  }

  .secondFlower {
    width: 4rem;
    height: 4rem;
    margin-left: -10rem;
  }
  .fifthFlower {
    margin-left: 10rem;
    margin-top: 20rem;
  }
}

@media (max-width: 400px) {
  .thirdFlower {
    width: 4rem;
    height: 4rem;
    margin-left: 7rem;
    margin-top: 13rem;
  }

  .firstFlower {
    width: 6rem;
    height: 6rem;
    margin-top: 8rem;
  }

  .secondFlower {
    display: none;
  }

  .feature {
    max-width: 13rem;
    margin-left: 2rem;
  }

  .featureBox {
    margin-left: 5rem;
    margin-top: -10em;
    max-width: 9rem;
  }

  .featureImage {
    max-width: 17rem;
    margin-left: 1rem;
  }

  .featureTitle {
    font-size: 1rem;
  }

  .featureDescription {
    font-size: 0.8rem;
  }

  .learnMoreButton {
    font-size: 0.8rem;
  }

  .fifthFlower {
    display: none;
  }

  .footerFlower1 {
    display: none;
  }

  .main {
    overflow-x: hidden;
  }

  .hidden {
    opacity: 1;
    filter: blur(0);
    transform: translateX(0);
  }
}
</style>
