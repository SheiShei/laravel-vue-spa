<template>
    <div id="main">
        <!-- <Header /> -->
        <app-header></app-header>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Header from './Header.vue';

    export default {
        name: 'main-app',
        components: {
            AppHeader: Header
        }
    }
</script>
