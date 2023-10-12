<script>
import AppFooter from "@/components/AppFooter.vue";
import AppHeader from "@/components/AppHeader.vue";
export default {
    components: {
        AppHeader,
        AppFooter,
    },



};
</script>


<template>
    <div class="">
        <AppHeader />
        <div class="container mt-3">
            <router-view />
        </div>
        <AppFooter />
    </div>
</template>
<style>
.page {
      max-width: 400px;
      margin: auto;
}
</style>