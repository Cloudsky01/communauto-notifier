<script>
    import Geolocation from '../components/geolocation.svelte';
</script>

<header>
    <nav class="navbar is-primary" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
            Communauto Notifier
            </a>
            <a class="navbar-item" href="/about">
            About
            </a>
            <a class="navbar-item" href="/contact">
            Contact
            </a>
        </div>
    </nav>
</header>
<main class="has-text-centered">
    <section class="hero is-large">
        <div class="hero-body">
          <p class="title">Communauto Notifier</p>
          <p class="subtitle">A free open source service</p>
          <div class="container">
            <Geolocation />
          </div>
        </div>
      </section>
</main>
