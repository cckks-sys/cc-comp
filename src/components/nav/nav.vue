<template>
    <aside class="cc-aside">
        <div class="item" v-for="item in items">
            <a href="#" class="link">
                <p class="link-text">{{ item.name }}</p>
            </a>
        </div>

    </aside>
    <div class="backdrop" ref="backdrop"></div>

    <div class="md-aside-btn .hidden" ref="mdAsideBtn">
        <div class="line-1 no-animation"></div>
        <div class="line-2 no-animation"></div>
        <div class="line-3 no-animation"></div>

    </div>
</template>
<script lang="ts">
export default {
    data() {
        return {
            items: [{
                name: "Text1"
            }, {
                name: "Text2"
            }, {
                name: "Text3"
            }]
        }
    },
    mounted() {
        var v = this.$refs.mdAsideBtn as Document;
        v?.addEventListener('click', (e) => {
            var aside = document.querySelector("aside.cc-aside");
            aside?.classList.toggle("open");
        })
        var bg0 = document.querySelector(".backdrop");
        bg0?.addEventListener('click', (e) => {
            var aside = document.querySelector("aside.cc-aside");
            aside?.classList.remove("open");
        });
    }
}

</script>
<style scoped>
aside {
    background: #37474f;
    display: block;
    width: 200px;
    left: 0px;
    top: 0px;
    bottom: 0px;
    margin: 0px;
    position: fixed;
    overflow: none;
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    transition: transform 0.3s ease-in-out;
}

aside .item {
    text-align: center;
    vertical-align: middle;
    border-radius: 5px;
}

aside .item a.link {
    color: #fafafa;
    text-decoration: none;
    display: block;
}

aside .item a.link:hover {
    color: #fafafa;
    background: #263238;
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.3);
}

aside .item a.link p.link-text {
    line-height: 50px;
    margin: 0px;
    height: 50px;
}

aside .item.active {
    color: #fafafa;
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.3);
}

.md-aside-btn {
    border: none;
    background: #90a4ae;
    width: 30px;
    height: 30px;
    border-radius: 3px;
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    display: none;
}

.line-1,
.line-2,
.line-3 {
    height: 3px;
    background: #f5f5f5;
    width: 20px;
    border-radius: 2px;
}

@media screen and (max-width: 1200px) {
    aside {
        opacity: 0;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 100;
        transform: translate(-100%, 0);
        transition: all 0.3s ease-in-out;
    }

    aside.open {
        opacity: 1;
        transform: translate(0, 0);
    }

    .md-aside-btn {
        display: flex;
    }
    .backdrop{
        
    }
}

.bg-backdrop {
    box-sizing: border-box;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    transition: opacity 0.5s;
}

.backdrop {
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display:none;
}


@media screen and (max-width: 1200px) {
    aside {
        opacity: 0;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 100;
        transform: translate(-100%, 0);
        transition: all 0.3s ease-in-out;
    }

    aside.open {
        opacity: 1;
        transform: translate(0, 0);
    }

    .md-aside-btn {
        display: flex;
    }
    .backdrop{
        display:block;
    }
}
/*# sourceMappingURL=nav.css.map */
</style>