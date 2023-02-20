<template>
    <Transition name="tl">
        <div class="timeline">
            <div class="card-container" v-for="item in timeContents">
                <div class="content">
                    <p class="time" v-if="item.TimeTitle">
                        {{ item.TimeTitle }}
                    </p>
                    <p class="text">
                        {{ item.Content }}
                    </p>
                </div>
            </div>
        </div>
    </Transition>
</template>
<script setup lang="ts">
    defineProps({
        timeContents:{
            type:Array<ITimeLineConent>
        }
    });
</script>
<style lang="scss" scoped>
.tl-enter-from,
.tl-leave-to{
    opacity: 0;
    transform: translateY(-50px);
}
.tl-enter-active,
.tl.leave-active{
    transition: all .4s linear;
}
.timeline {
    background: #C5E1A5;
    min-height: 100px;
    position: relative;
    padding-right: 20px;
    padding-top:10px;
    box-sizing: border-box;

    &:before {
        content: "";
        display: block;
        position: absolute;
        width: 5px;
        background-color: #fff;
        top: 0px;
        bottom: 0px;
        left: 30px;
        z-index: 2;
    }

    .card-container {
        padding-top: 5px;
        padding-bottom: 10px;
        width: 100%;
        min-height: 50px;
        background: #C5E1A5;
        box-sizing: border-content;
        position: relative;

        &:before {
            content: "";
            position: absolute;
            left: 18px;
            width: 20px;
            height: 20px;
            box-sizing: border-content;
            background-color: #F5F5F5;
            display: block;
            border: 5px solid #90CAF9;
            border-radius: 50%;
            top: 20px;
            z-index: 3;
        }

        .content {
            min-height: 90px;
            background: #EEEEEE;
            border-radius: 4px;
            margin-left: 63px;
            box-shadow: 0px 0px 2px rgb(0 0 0 / 70%);
            position: relative;

            &:before {
                content: "";
                display: block;
                width: 16px;
                height: 16px;
                transform-origin: center;
                transform: rotate(45deg);
                position: absolute;
                top: 22px;
                left: -8px;
                background: inherit;
            }

            p.time {
                margin: 0px 0px;
                padding: 7px 21px;
                font-size: 19px;
                color: #424242;
            }

            p.text {
                padding: 10px 21px;
                margin: 0px 0px;
                font-size: 16px;
                color: #212121;
            }
        }
    }
}
</style>