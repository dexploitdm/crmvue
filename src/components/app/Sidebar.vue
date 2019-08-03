<template>
    <ul class="sidenav app-sidenav"
        :class="{open: value}"
    >

        <router-link
            v-for="link in links"
            :key="link.url"
            tag="li"
            active-class="active"
            :to="link.url"
            :exact="link.exact"
        >
            <a href="#" class="waves-effect waves-orange pointer">{{link.title}}</a>
        </router-link>
    </ul>
</template>

<script>
    export default {
        props: ['value'],
        data() {
            return {
                links: [
                    {title: 'Счет', url: '/', exact: true},
                    {title: 'История', url: '/history'},
                    {title: 'Планирование', url: '/planning'},
                    {title: 'Новая запись', url: '/record'},
                    {title: 'Категории', url: '/categories'}
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .sidenav {
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
    }
</style>
