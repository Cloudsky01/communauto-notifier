<script lang="ts">
    import { onMount } from "svelte";
    import 'bulma/css/bulma.min.css';
    // import { firebaseAuth } from "$lib/firebase/firebase.auth";


    // onMount(() => {
    //     // Listen to token generation
    //     firebaseAuth.onIdTokenChanged(async (user)=>{
    //         if(user){
    //             //send the token to the server
    //             const token = await user.getIdToken();
    //             await fetch("/api/auth",{
    //                 method:'POST',
    //                 body:JSON.stringify({"token":token})
    //             })
    //         }
    //     })
    //     firebaseAuth.onAuthStateChanged(async(user) => {
           
    //     });
    // });
</script>


<slot></slot>