<script setup>
import RotatingCarousel from "./.vitepress/theme/components/RotatingCarousel.vue"

const navLinks = [
  { image: "./Session2.webp", link: "./Sessions/Session1/" },
  { image: "./images/Noa2.webp", link: "./Characters/Noa" },
  { image:"./images/CassiusIcon.webp", link: "./Characters/Cassius" },
  { image:"./images/Blaise.webp", link: "./Characters/Blaise" },
  { image:"./images/Sicarious.webp", link: "./Characters/Sicarious" },
  { image:"./images/Barvin.webp", link: "./Characters/Barvin" }
]
</script>

<div class="Hometitle"><h2>Ascension</h2></div>
<div class="Homesub-container">
<div class="Home-subtitle"><h3>The Baby bit me...</h3></div>
<div class="Home-last"><h4>-Barvin</h4></div></div>

<RotatingCarousel :items="navLinks" />

<img src="./images/Ascension2.webp" alt="Ascension" style="display: block; margin: 1rem auto; max-width: 100%; height: auto; box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.3);
" />
