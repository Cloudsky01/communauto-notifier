<script lang="ts">
    let latitude: string = '';
    let longitude: string = '';
    let errorMessage: string = '';

    function getLocation(): void {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            errorMessage = "Geolocation is not supported by this browser.";
        }
    }

    function showPosition(position: GeolocationPosition): void {
        latitude = position.coords.latitude.toString();
        longitude = position.coords.longitude.toString();
    }

    function showError(error: GeolocationPositionError): void {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                errorMessage = "User denied the request for Geolocation.";
                break;
            case error.POSITION_UNAVAILABLE:
                errorMessage = "Location information is unavailable.";
                break;
            case error.TIMEOUT:
                errorMessage = "The request to get user location timed out.";
                break;
            default:
                errorMessage = "An unknown error occurred.";
                break;
        }
    }
</script>

<style>
    .container {
        margin-top: 20px;
    }
</style>

<div class="container">
    <section class="section">
        <div class="box">
            <h2 class="title">Share Your Location</h2>
            <button class="button is-primary" on:click={getLocation}>Get Location</button>
            <div class="field">
                <label class="label">Latitude</label>
                <div class="control">
                    <input class="input" type="text" bind:value={latitude} placeholder="Enter latitude manually">
                </div>
            </div>
            <div class="field">
                <label class="label">Longitude</label>
                <div class="control">
                    <input class="input" type="text" bind:value={longitude} placeholder="Enter longitude manually">
                </div>
            </div>
            {#if latitude && longitude}
                <p>Your Location:</p>
                <p>Latitude: {latitude}</p>
                <p>Longitude: {longitude}</p>
            {/if}
            {#if errorMessage}
                <p class="has-text-danger">Error: {errorMessage}</p>
            {/if}
        </div>
    </section>
</div>
