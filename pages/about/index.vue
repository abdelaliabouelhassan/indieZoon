<template>
    <div >
        <PartialsSectionsAboutUsFirstSection />
        <PartialsSectionsAboutUsSecondSection />
        <PartialsSectionsAboutUsThirdSection />
        <PartialsSectionsAboutUsFourthSection2 />
        <PartialsSectionsAboutUsFifthSection/>

    </div>
</template>

<script setup>
 useSeoMeta({
    title: 'IndeZone - About us',
    description: 'IndeZone - About us', // change this to your description
    keywords: 'IndeZone,something,else', // change this to your keywords
    //og tags
    ogTitle: 'IndeZone - Home', // change this to your og:title
    ogDescription: 'IndeZone - Home', // change this to your og:description
    ogImage: 'https://indie-zoon.vercel.app/images/home/hero.png', // change this to your og:image
    ogUrl: 'https://indie-zoon.vercel.app/', // change this to your og:url
    //twitter tags
    twitterTitle: 'IndeZone - Home', // change this to your twitter:title
    twitterDescription: 'IndeZone - Home', // change this to your twitter:description
    twitterImage: 'https://indie-zoon.vercel.app/images/home/hero.png', // change this to your twitter:image
    twitterUrl: 'https://indie-zoon.vercel.app', // change this to your twitter:url
})

</script>