<script setup>
import { ref } from "vue";
import layout from './Layout.vue';

const side = ref("heads");
const flipping = ref(false);
const message = ref("You can flip a coin!");
const params = new URLSearchParams(window.location.search);
const param = params.get("aw");

const flipCoin = () => {
    if (flipping.value) return;

    flipping.value = true;
    message.value = "...";

    let spins = Math.floor(Math.random() * 3) + 3;
    let result;
    if (param == 'o') {
        result = "heads";
    }
    else if (param == 'r') {
        result = "tails"
    }
    else {
        result = Math.random() < 0.5 ? "heads" : "tails";
    }

    let finalRotation = spins * 360 + (result === "heads" ? 0 : 180);

    let coin = document.querySelector(".coin");
    coin.style.transition = "transform 2s cubic-bezier(0.4, 2.3, 0.3, 1)";
    coin.style.transform = `rotateY(${finalRotation}deg)`;

    setTimeout(() => {
        side.value = result;
        message.value = `${result === "heads" ? "Heads!" : "Tails!"}`;
        flipping.value = false;

        coin.style.transition = "none";

        coin.style.transform = result === "heads" ? "rotateY(0deg)" : "rotateY(180deg)";
        coin.style.transform = result === "tails" ? "rotateY(180deg)" : "rotateY(0deg)";
    }, 2000);

};
</script>



<template>
    <layout>
        <div class="flex flex-col items-center justify-center min-h-screen">
            <div class="relative w-32 h-32 perspective" @click="flipCoin">
                <div class="coin">
                    <div class="front">🦅</div>
                    <div class="back">🪙</div>
                </div>
            </div>
            <button class="mt-6 px-4 py-2 bg-indigo-500 text-white rounded-xl shadow-lg hover:bg-indigo-600 transition"
                @click="flipCoin" :disabled="flipping">
                Flip a coin
            </button>
            <p class="mt-4 text-lg font-semibold">
                {{ message }}
            </p>
        </div>
    </layout>
</template>

<style scoped>
.perspective {
    perspective: 1200px;
}

.coin {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transform: rotateY(0deg);
}

.coin .front,
.coin .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    background: linear-gradient(145deg, #f9fafb, #e5e7eb);
    border: 2px solid #d1d5db;
    border-radius: 50%;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.coin .back {
    transform: rotateY(180deg);
}
</style>