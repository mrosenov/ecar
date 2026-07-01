<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { useI18n } from 'vue-i18n';
import PlaceholderPattern from '@/components/PlaceholderPattern.vue';
import { i18n } from '@/lib/i18n';
import { dashboard } from '@/routes';

const { t } = useI18n();

defineOptions({
    layout: {
        breadcrumbs: [
            {
                title: i18n.global.t('nav.dashboard'),
                href: dashboard(),
            },
        ],
    },
});
</script>

<template>
    <Head :title="t('nav.dashboard')" />

    <div
        class="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4"
    >
        <div>
            <h1 class="text-2xl font-semibold">{{ t('dashboard.welcome') }}</h1>
            <p class="text-muted-foreground">
                {{ t('dashboard.description') }}
            </p>
        </div>
        <div class="grid auto-rows-min gap-4 md:grid-cols-3">
            <div
                class="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border"
            >
                <PlaceholderPattern />
            </div>
            <div
                class="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border"
            >
                <PlaceholderPattern />
            </div>
            <div
                class="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border"
            >
                <PlaceholderPattern />
            </div>
        </div>
        <div
            class="relative min-h-[100vh] flex-1 rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border"
        >
            <PlaceholderPattern />
        </div>
    </div>
</template>
