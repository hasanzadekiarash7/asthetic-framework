<template>
    <div class="flex flex-flow justify-content-center align-items-center">
        <AButton type="danger" icon-only size="xl" -icon-only-icon-name="line-md:downloading-loop">
        </AButton>
        <AButton type="success" icon-only size="lg" -icon-only-icon-name="line-md:downloading-loop">
        </AButton>
        <AButton type="primary" icon-only size="md" -icon-only-icon-name="line-md:downloading-loop">
        </AButton>
        <AButton type="secondary" icon-only size="sm" -icon-only-icon-name="line-md:downloading-loop">
        </AButton>
        <AButton type="tertiary" icon-only size="xs" -icon-only-icon-name="line-md:downloading-loop">
        </AButton>
        <AButton type="link" icon-only -icon-only-icon-name="line-md:downloading-loop">
        </AButton>
    </div>
    <div class="flex flex-flow justify-content-center align-items-center">
        <AButton type="danger" size="xl">
            hello
        </AButton>
        <AButton type="success" size="lg">
            hello
        </AButton>
        <AButton type="primary" size="md">
            hello
        </AButton>
        <AButton type="secondary" size="sm">
            hello
        </AButton>
        <AButton type="tertiary" size="xs">
            hello
        </AButton>
        <AButton type="link">
            hello
        </AButton>
    </div>
    <div class="flex flex-flow justify-content-center align-items-center">
        <AButton append-icon-name="line-md:star-pulsating-twotone-loop" type="danger" size="xl" label="hello">
        </AButton>
        <AButton append-icon-name="line-md:star-pulsating-twotone-loop" type="success" size="lg" label="hello">
        </AButton>
        <AButton append-icon-name="line-md:star-pulsating-twotone-loop" type="primary" size="md" label="hello">
        </AButton>
        <AButton append-icon-name="line-md:star-pulsating-twotone-loop" type="secondary" size="sm" label="hello">
        </AButton>
        <AButton append-icon-name="line-md:star-pulsating-twotone-loop" type="tertiary" size="xs" label="hello">
        </AButton>
        <AButton append-icon-name="line-md:star-pulsating-twotone-loop" type="link" label="hello">
        </AButton>
    </div>
    <div class="flex flex-flow justify-content-center align-items-center">
        <AButton prepend-icon-name="line-md:star-pulsating-twotone-loop" type="danger" size="xl" label="hello">
        </AButton>
        <AButton prepend-icon-name="line-md:star-pulsating-twotone-loop" type="success" size="lg" label="hello">
        </AButton>
        <AButton prepend-icon-name="line-md:star-pulsating-twotone-loop" type="primary" size="md" label="hello">
        </AButton>
        <AButton prepend-icon-name="line-md:star-pulsating-twotone-loop" type="secondary" size="sm" label="hello">
        </AButton>
        <AButton prepend-icon-name="line-md:star-pulsating-twotone-loop" type="tertiary" size="xs" label="hello">
        </AButton>
        <AButton prepend-icon-name="line-md:star-pulsating-twotone-loop" type="link" label="hello">
        </AButton>
    </div>
</template>

<script setup lang="ts">
// import Button from '~/components/aButton.vue';
import AButton from "../components/aButton.vue";
</script>

<style lang="scss" scoped></style>