<template>
    <div class="app-main-layout">
        <Navbar @click="isOpen = !isOpen"/>
        <Sidebar v-model="isOpen"/>
        <main class="app-content"
            :class="{full: !isOpen}"
        >
            <div class="app-page">
               <router-view />
            </div>
        </main>

        <div class="fixed-action-btn">
            <router-link class="btn-floating btn-large blue" to="/record">
                <i class="large material-icons">add</i>
            </router-link>
    </div>
</div>
</template>
<script>
import Navbar from '@/components/app/Navbar';
import Sidebar from '@/components/app/Sidebar';
export default {
    name: 'main-layout',
    data(){
        return {
            isOpen: true
        }
    },
    components: {
        Navbar, Sidebar
    }
}
</script>
<style lang="scss">
    .app-main-layout {
        background-image: radial-gradient(#D7D7D7 1px, transparent 1px), radial-gradient(#d7d7d7 1px, transparent 1px);
        background-position: 0 0, 25px 25px;
        background-size: 50px 50px;
    }
</style>
