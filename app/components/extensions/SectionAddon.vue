<template>
    <div class="w-full absolute bottom-[calc(100%_-_2px)] left-0 h-20 addon z-10 pointer-events-none">
        <slot></slot>
        <div
            class="absolute w-60 hidden sm:flex md:w-1/3 left-[-3px] bottom-0 h-20 bg-DacWhite rounded-tr-4xl">
            <div class="corner bottom-full left-[-1px] corner-rotate-180 yellow -mb-[1px]"></div>
            <div class="corner bottom-0 left-full corner-rotate-180 yellow -mb-[1px] -ml-[1px]"></div>
        </div>
        <div class="corner right-[-1px] bottom-0 corner-rotate-90 yellow"></div>
    </div>
</template>