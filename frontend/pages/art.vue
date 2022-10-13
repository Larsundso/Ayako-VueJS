<script setup lang="ts">
import { ref } from "vue";
const artworksResponse = await fetch(
  "https://api.ayakobot.com/artworks?size=64"
);
const Artworks = (await artworksResponse.json()) as {
  userid: string;
  creation: string;
  url: string;
  type?: string;
  user: {
    avatar: string;
    username?: string;
    socials?: string[];
    type?: string[];
  };
}[];

const showModal = ref(false);
const Types = ["Emoji", "Full", "Icon"];
const selectedTypes = ref([]);
const searchbox = ref("");
const loadedImages = ref([]);
const erroredImages = ref([]);
const show = ref(-1);
const displayedArtworks = ref([...Artworks]);
const loaded = ref(false);

onBeforeMount(() => {
  loaded.value = true;
});

const toggleShow = () => {
  showModal.value = !showModal.value;
};

const toggleTypeFilter = (type: typeof Types[0]) => {
  if (selectedTypes.value.includes(type)) {
    selectedTypes.value.splice(selectedTypes.value.indexOf(type), 1);
  } else {
    selectedTypes.value.push(type);
  }

  displayedArtworks.value = selectedTypes.value.length
    ? [...Artworks].filter((a) =>
        selectedTypes.value.some((t) => t.toLowerCase() === a.type)
      )
    : [...Artworks];
};

const mouseLeave = () => {
  show.value = -1;
};

const mouseEnter = (i: number) => {
  show.value = i;
};
</script>

<template>
  <div class="main">
    <transition name="vanish" mode="out-in">
      <div class="guidelines" @click="toggleShow()">
        <div class="guidelinesTitle">Art Requirements</div>
        <div class="guidelinesHoverMe">(click me)</div>
        <transition name="vanish" mode="out-in">
          <div class="guidelinesModal" v-if="showModal">
            <div class="guidelinesText">
              <div class="list">
                <li>Lynx Girl</li>
                <li>Black Glove on her right Hand (her POV)</li>
                <li>
                  Base Hair and Eye Color should match References
                  <div class="smallText">(Does not have to be exact)</div>
                  <div class="smallText">
                    (Accent Color can vary as much as you like)
                  </div>
                </li>
                <li>Basic Stature should match References</li>
              </div>
              Not Following the above Requirements may not get your Artwork
              removed
              <div class="importantText">All Artworks have to be SFW</div>
              <div class="referencesTitle">References</div>
              <div class="referencesText">
                Find References by Filtering the existing Artwork below by
                Artists
                <code>Fuyurein</code>, <code>Victoria</code> or
                <code>Angel</code>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
    <div class="filters">
      <div class="filtersWrapper">
        <div class="typeFilterWrapper">
          <div v-for="(type, i) in Types" :key="i" class="typeFilters">
            <button
              :class="`typeFilter ${
                selectedTypes.includes(type)
                  ? 'activeTypeFilter'
                  : 'inactiveTypeFilter'
              }`"
              @click="toggleTypeFilter(type)"
              :id="type"
            >
              {{ type }}
            </button>
          </div>
        </div>
        <input
          type="text"
          class="filterSearch"
          placeholder="Search for an Artist"
          v-model="searchbox"
        />
      </div>
    </div>
    <div class="artBoxes">
      <div
        v-if="loaded"
        v-for="(artwork, i) in displayedArtworks"
        :key="i"
        class="artwork"
        @mouseenter="mouseEnter(i)"
        @mouseleave="mouseLeave()"
      >
        <a :href="artwork.url" target="_blank">
          <img
            v-show="loadedImages.includes(i)"
            :src="artwork.url"
            class="artImage"
            @load="loadedImages.push(i)"
            @error="erroredImages.push(i)"
            :fetchPriority="i > displayedArtworks.length / 3 ? 'high' : 'low'"
          />
        </a>
        <div v-if="show === i" class="expandedArtwork">
          <div class="artist">
            <img
              :src="
                artwork.user
                  ? artwork.user.avatar
                  : `https://cdn.discordapp.com/embed/avatars/1.png`
              "
              class="avatar"
            />
            <div class="username">
              {{ artwork.user ? artwork.user.username : "Unknown User" }}
            </div>
          </div>
        </div>
        <div
          class="loadingImgDiv"
          v-if="
            (!loadedImages.includes(i) && !erroredImages.includes(i)) ||
            erroredImages.includes(i)
          "
        >
          <img
            v-show="show !== i"
            v-if="!loadedImages.includes(i) && !erroredImages.includes(i)"
            src="https://cdn.ayakobot.com/Loading.gif"
            class="loadingImg"
          />
          <img
            v-show="show !== i"
            v-if="erroredImages.includes(i)"
            src="https://cdn.ayakobot.com/Cross.png"
            class="loadingImg"
          />
        </div>
      </div>
      <div v-else class="pageLoading"></div>
    </div>
  </div>
</template>

<style scoped>
.artBoxes {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 1fr;
  width: 90%;
  overflow: hidden;
  padding: 4rem;
}
.typeFilter {
  margin: 1rem;
}

.inactiveTypeFilter {
  border: 0.15rem solid var(--noBGSelect-color);
}

.inactiveTypeFilter:hover {
  border: 0.15rem dotted var(--text-color);
}

.activeTypeFilter {
  border: 0.15rem solid var(--text-color);
}

.inactiveTypeFilter,
.activeTypeFilter:hover {
  background-color: var(--noBGSelect-color);
}
.inactiveTypeFilter:hover,
.activeTypeFilter {
  background-color: var(--grey-color);
}

.typeFilterWrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.filtersWrapper {
  border-image: linear-gradient(
      var(--base-color),
      var(--noBGSelect-color),
      var(--base-color)
    )
    1;
  border-style: solid;
  border-width: 0.15rem;

  margin-top: 2rem;
  padding: 1rem;
  height: 2rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.filters {
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 70%;
}

.list {
  border: 2px solid var(--noBGSelect-color);
  border-radius: 1em;
  list-style-type: none;
  margin-bottom: 1rem;
}

code {
  color: var(--gold-color);
  font-size: 1rem;
}
.referencesTitle {
  color: var(--button-color);
  font-size: 1.5rem;
  margin-top: 1rem;
}
.importantText {
  color: var(--red-color);
}

.smallText {
  font-size: 0.8rem;
  color: var(--grey-color);
}
.guidelinesHoverMe {
  color: var(--grey-color);
}

.guidelinesTitle {
  color: var(--button-color);
  font-size: 2rem;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
}

.guidelines {
  flex-direction: column;
  text-align: center;
  background-color: var(--main-color);
}

.guidelinesModal {
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.guidelinesText {
  padding: 2rem;
  border: 2px solid var(--button-color);
  border-radius: 1em;
  z-index: 999;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
}

.artImage {
  width: 10rem;
  height: auto;
  border-radius: 1rem;
  margin-bottom: 0.5rem;
}

.loadingImgDiv {
  padding: 5rem;
}

.loadingImg {
  width: 5rem;
}

.artist {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.avatar {
  width: 2em;
  height: 2em;
  border-radius: 2em;
}

.username {
  font-weight: bold;
  margin-left: 1rem;
  text-decoration: none;
}

.pageLoading {
  margin-top: 30rem;
}

.expandedArtwork {
  padding-bottom: 0.5rem;
  border-radius: 1rem;
  flex-direction: column;
  align-items: center;
}

.artwork {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all ease-in-out 0.2s;
  padding-top: 1rem;
}

.artwork:hover {
  background-color: var(--noBGSelect-color);
  scale: 1.3;
  border-radius: 1rem;
}

.vanish-enter-active,
.vanish-leave-active {
  transition: all 0.5s ease-in-out;
}

.vanish-enter-from,
.vanish-leave-to {
  opacity: 0;
}
</style>
