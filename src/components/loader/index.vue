<template>
    <div class="loader"></div>
</template>
<style lang="scss" scoped>
$loader-size: 45px;

.loader {
    display: inline-block;
    width: $loader-size;
    height: $loader-size;
    box-sizing: border-box;
    border: 6px solid #BDBDBD;
    border-top: 6px solid #03A9F4;
    border-radius: 50%;
    animation: rollani 1.2s linear infinite;
}


@keyframes rollani {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>