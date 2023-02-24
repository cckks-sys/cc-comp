<template>
    <div class="pagination">
        <span class="left" @click="preClick">&laquo;</span>
        <span class="start" v-if="showLeft" @click="currentChange(1)">1</span>
        <span class="more-left" v-if="showLeft">...</span>
        <ul>
            <li v-for="n in currentShow" @click="currentChange(n)" :class="{ active: n == pagination.current }">{{ n }}
            </li>
        </ul>
        <span class="more-right" v-if="showRight">...</span>
        <span class="end" v-if="showRight" @click="currentChange(totalPage)">{{ totalPage }}</span>
        <span class="right" @click="nextClick">&raquo;</span>
    </div>
</template>
<script setup lang="ts">
import { reactive, computed, ref, watchEffect, watch, onMounted, onUnmounted } from 'vue';
import type { PropType } from 'vue';
import type { WatchStopHandle } from 'vue';
var pagination = reactive({
    total: 1,
    size: 5,
    current: 1
})
const props = defineProps({
    pagination0: Object as PropType<IPageination>
})
const emits = defineEmits(['currentChange'])
var watchHandle: WatchStopHandle;

onMounted(() => {
    watchHandle = watchEffect(() => {
        pagination.total = props.pagination0?.total || 0;
        pagination.size = props.pagination0?.size || 5;
        pagination.current = props.pagination0?.current || 1;
    })
})
onUnmounted(() => {
    if (watchHandle) {
        watchHandle();
    }
})
const showLeft = ref(false);
const showRight = ref(false);
const pageSize = ref(6);
const totalPage = computed(() => {
    return Math.ceil(pagination.total / pagination.size)
})
const currentShow = computed(() => {
    var start = 1;
    var end = totalPage.value;
    showLeft.value = true;
    showRight.value = true;
    if (totalPage.value < pageSize.value) { // 总页数小于要显示的页数
        showLeft.value = false;
        showRight.value = false;
        start = 1;
        end = totalPage.value; // 显示1到总页数
    } else if (pagination.current < pageSize.value) {  // 当前页要显示的页数前 
        start = 1;
        end = Math.min(pageSize.value, pagination.size);
        showLeft.value = false;
    }
    else if (totalPage.value - pagination.current < pageSize.value) { 
        start = totalPage.value - pageSize.value + 1;
        end = totalPage.value;
        showRight.value = false;
    } else {
        if ((pageSize.value & 1) == 1) { // odd
            start = pagination.current - (pageSize.value / 2);
            end = pagination.current + (pageSize.value / 2);
        } else { // even
            start = pagination.current - (pageSize.value / 2);
            end = pagination.current + (pageSize.value / 2) - 1;
        }
    }
    var array = [];
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
})
function currentChange(n: number) {
    pagination.current = n;
     emits('currentChange',n);
}
function sizeChange() {
   
}
function preClick() {
    if (pagination.current > 1) {
        pagination.current--;
    }
}
function nextClick() {
    if (pagination.current < totalPage.value) {
        pagination.current++;
    }
}
</script>
<style lang="scss">
.pagination {
    user-select: none;

    span {
        cursor: pointer;
        color: black;
        display: inline-block;
        width: 30px;
        height: 30px;
        background: #E0E0E0;
        text-align: center;
        vertical-align: middle;
        transition: background .1s ease;
        line-height: 30px;
        font-size: 14px;

        &:hover {
            background: #81C784;
        }

        margin: 0px 5px;

        &.more-left,
        &.more-right {
            cursor: default;

            &:hover {
                background: #E0E0E0;
            }
        }
    }

    ul {
        list-style: none;
        font-size: 0;
        user-select: none;
        padding: 0px 0px;
        display: inline-block;

        li {
            cursor: pointer;
            width: 30px;
            height: 30px;
            font-size: 14px;
            display: inline-block;
            text-align: center;

            background: #E0E0E0;
            line-height: 30px;
            margin: 0px 5px;
            border-radius: 2px;

            &.active {
                background: #81C784;
            }

            &:hover {
                background: #A5D6A7;
            }
        }
    }
}
</style>