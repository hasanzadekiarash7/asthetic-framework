<template>
    <button class="d-flex justify-content-space-around align-items-center radius-7"
        :class="[ColorStateComputed, sizeComputed]" v-if="iconOnly">
        <div>
            <Icon v-if="appendIconName" :name="appendIconName" :size="appendIconSize" />
            <slot name="appendIcon"></slot>
        </div>
        <div>
            <p class="space-m-a-0">{{ label }}</p>
            <slot name="label"></slot>
        </div>
        <div>
            <Icon v-if="prependIconName" :name="prependIconName" :size="prependIconSize" />
            <slot name="prependIcon"></slot>
        </div>
    </button>
    <button v-else :class="[ColorStateComputed, sizeComputed]">
        <Icon v-if="IconOnlyIconName" :name="IconOnlyIconName" :size="IconOnlyIconSize" />
        <slot name="iconOnly"></slot>
    </button>
</template>

<script setup lang="ts">
interface ButtonProps {
    label?: String,
    appendIconName?: string,
    appendIconSize?: String,
    IconOnlyIconName?: string,
    IconOnlyIconSize?: String,
    prependIconName?: String,
    prependIconSize?: String,
    iconOnly?: Boolean,
    type?: String,
    size?: String
}
const props = defineProps<ButtonProps>()
// ** computed
const ColorStateComputed = computed(() => {
    switch (props.type) {
        case "primary":
            return 'color-gray-50 bg-color-gray-700 primary-style';
        case "secondary":
            return 'color-gray-950 bg-color-gray-300 primary-style'
        case "tertiary":
            return 'color-gray-950 bg-color-gray-100 primary-style'
        case "link":
            return 'color-gray-950 bg-color-transparent primary-style'
        case "Danger":
            return 'color-red-50 bg-color-red-700 primary-style'
        case "Success":
            return 'color-green-50 bg-color-green-700 primary-style'
    }
})
const sizeComputed = computed(() => {
    switch (props.size) {
        case "xl":
            return 'width-50'
        case "lg":
            return 'width-40'
        case "md":
            return 'width-30'
        case "sm":
            return 'width-20'
        case "xs":
            return 'width-10'
    }
})
</script>

<style lang="scss" scoped>
@import url('../Assets/interfaces/AButton.scss');
</style>