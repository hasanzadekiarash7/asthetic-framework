<template>
    <button class="flex justify-content-space-around align-items-center"
        :class="[ColorStateComputed, sizeComputed, iconOnly ? 'radius-round space-p-a-2 space-m-a-2 ' : 'radius-6 space-m-a-2']">
        <div v-if="!iconOnly">
            <Icon v-if="appendIconName" :name="appendIconName" :size="appendIconSize" />
            <slot name="appendIcon"></slot>
        </div>
        <div v-if="!iconOnly">
            <p class="space-m-a-0">{{ label }}</p>
            <slot></slot>
        </div>
        <div v-if="!iconOnly">
            <Icon v-if="prependIconName" :name="prependIconName" :size="prependIconSize" />
            <slot name="prependIcon"></slot>
        </div>
        <div v-if="iconOnly">
            <Icon v-if="IconOnlyIconName" :class="[iconSize]" :name="IconOnlyIconName" :size="IconOnlyIconSize" />
            <slot name="iconOnly"></slot>
        </div>
    </button>
</template>

<script setup lang="ts">
interface ButtonProps {
    label?: String,
    appendIconName?: String,
    appendIconSize?: String,
    IconOnlyIconName?: String,
    IconOnlyIconSize?: String,
    prependIconName?: String,
    prependIconSize?: String,
    iconOnly?: boolean,
    type?: String,
    size?: String
}
const props = defineProps<ButtonProps>()

// ** computed
const ColorStateComputed = computed(() => {
    switch (props.type) {
        case "primary":
            return 'color-gray-50 bg-color-gray-700 primary-style outline-gray-200';
        case "secondary":
            return 'color-gray-950 bg-color-gray-300 primary-style outline-gray-100';
        case "tertiary":
            return 'color-gray-950 bg-color-gray-50 primary-style outline-gray-300';
        case "link":
            return 'color-gray-950 bg-color-transparent link-style';
        case "danger":
            return 'color-red-50 bg-color-red-500 primary-style outline-red-200';
        case "success":
            return 'color-green-50 bg-color-green-500 primary-style outline-green-200';
    }
})
const sizeComputed = computed(() => {
    if (props.iconOnly) {
        switch (props.size) {
            case "xl":
                return 'icon-width-x-large'
            case "lg":
                return 'icon-width-large'
            case "md":
                return 'icon-width-medium'
            case "sm":
                return 'icon-width-small'
            case "xs":
                return 'icon-width-x-small'
        }
    } else {
        switch (props.size) {
            case "xl":
                return 'width-50 heading-x-small'
            case "lg":
                return 'width-40 label-large'
            case "md":
                return 'width-30 label-medium'
            case "sm":
                return 'width-20 label-small'
            case "xs":
                return 'width-10 label-x-small'
        }
    }
})
const iconSize = computed(() => {
    switch (props.size) {
        case "xl":
            return 'icon-x-large'
        case "lg":
            return 'icon-large'
        case "md":
            return 'icon-medium'
        case "sm":
            return 'icon-small'
        case "xs":
            return 'icon-x-small'
    }
})

</script>

<style lang="scss" scoped>
@import url('../Assets/interfaces/AButton.scss');
</style>