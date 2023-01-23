<template>
    <div id="app" class="sign_up_text">
        <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">Download</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container">
            <button 
            class="btn btn-primary" 
            data-bs-target="#collapseTarget" 
            data-bs-toggle="collapse">
            Bootstrap collapse
            </button>
            <div class="collapse py-2" id="collapseTarget">
                This is the toggle-able content!
            </div>

        </div> -->
        <SignUp />
    </div>

</template>

<script>
import SignUp from './components/SignUp.vue'
export default {
    name: 'App',
    components:{
        SignUp
    }
}
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

</style>