<script setup>
import Container from "../../Components/Container.vue";
import TextLink from "../../Components/TextLink.vue";
import Title from "../../Components/Title.vue";
</script>

<template>
    <Container>
        <div class="mb-8 text-center">
            <Title>Register a new account</Title>
            <p>
                Already have an account?
                <TextLink routeName="home" label="Login" />
            </p>
        </div>
    </Container>
</template>
