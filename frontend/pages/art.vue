<script setup lang="ts">
import { ref } from "vue";

const artworksResponse = await fetch("https://api.ayakobot.com/artworks");
const Artworks = (
  (await artworksResponse.json()) as {
    userid: string;
    creation: string;
    url: string;
  }[]
).sort((a, b) => Number(b.creation) - Number(a.creation));

const isHovering = ref(false);
const types = ["Emoji", "Full", "Icon"];
const selectedTypes = ref(types);
const searchbox = ref("");

const toggleHover = (state: boolean) => {
  isHovering.value = state;
};

const toggleTypeFilter = (type: typeof types[0]) => {
  const element = document.getElementById(type);

  if (selectedTypes.value.includes(type)) {
    element.classList.remove("activeTypeFilter");
    element.classList.add("inactiveTypeFilter");
    selectedTypes.value.splice(selectedTypes.value.indexOf(type), 1);
  } else {
    element.classList.add("activeTypeFilter");
    element.classList.remove("inactiveTypeFilter");
    selectedTypes.value.push(type);
  }
};
</script>

<template>
  <div class="main">
    <div
      class="guidelines"
      @mouseenter="toggleHover(true)"
      @mouseleave="toggleHover(false)"
    >
      <div class="guidelinesTitle">Art Requirements</div>
      <div class="guidelinesHoverMe" v-if="!isHovering">(hover me)</div>
      <div class="guidelinesText" v-if="isHovering">
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
        Not Following the above Requirements may not get your Artwork removed
        <div class="importantText">All Artworks have to be SFW</div>
        <div class="referencesTitle">References</div>
        <div class="referencesText">
          Find References by Filtering the existing Artwork below by Artists
          <code>Fuyurein</code>, <code>Victoria</code> or <code>Angel</code>
        </div>
      </div>
    </div>
    <div class="filters">
      <div class="filtersWrapper">
        <div class="typeFilterWrapper">
          <div v-for="(type, i) in types" :key="i" class="typeFilters">
            <button
              class="typeFilter activeTypeFilter"
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
      <div v-for="(artwork, i) in Artworks" :key="i" class="artwork">
        <img :src="artwork.url" class="artImage" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.artBoxes {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 1fr;
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
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}

.guidelines {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.guidelinesText {
  padding: 2rem;
  border: 2px solid var(--button-color);
  border-radius: 1em;
}
</style>
