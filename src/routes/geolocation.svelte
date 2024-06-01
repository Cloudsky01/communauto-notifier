<script lang="ts">
    let latitude = '';
    let longitude = '';
    let errorMessage = '';

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            errorMessage = "Geolocation is not supported by this browser.";
        }
    }

    function showPosition(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
    }

    function showError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                errorMessage = "User denied the request for Geolocation."
                break;
            case error.POSITION_UNAVAILABLE:
                errorMessage = "Location information is unavailable."
                break;
            case error.TIMEOUT:
                errorMessage = "The request to get user location timed out."
                break;
            default:
                errorMessage = "An unknown error occurred."
                break;
        }
    }
</script>

<style>
    button {
        margin-top: 20px;
        padding: 10px 20px;
        font-size: 16px;
    }
</style>

<h1>Share Your Location</h1>
<button on:click={getLocation}>Get Location</button>
{#if latitude && longitude}
    <p>Your Location:</p>
    <p>Latitude: {latitude}</p>
    <p>Longitude: {longitude}</p>
{/if}
{#if errorMessage}
    <p>Error: {errorMessage}</p>
{/if}
