<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">

            <router-link class="navbar-brand" :to="{name: 'home'}">King of Bots</router-link>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <router-link class="nav-link" active-class="active" :to="{name: 'pk_index'}">Player Killing</router-link>
                    </li>
                    <li class="nav-item">
                    <router-link class="nav-link" active-class="active" :to="{name: 'record_index'}">Game Records</router-link>
                    </li>
                    <li class="nav-item">
                    <router-link class="nav-link" active-class="active" :to="{name: 'ranklist_index'}">Ranking List</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            User
                        </a>
                        <ul class="dropdown-menu">
                            <li><router-link class="dropdown-item" :to="{name: 'user_bot_index'}">My Bots</router-link></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><router-link class="dropdown-item" :to="{name: '404'}">Logout</router-link></li>
                        </ul>
                    </li>
                </ul>
            </div>

        </div>
    </nav>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>