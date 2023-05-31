<template>
    <div >
        <PartialsSectionsAboutUsFirstSection />
        <PartialsSectionsAboutUsSecondSection />
        <PartialsSectionsAboutUsThirdSection />
        <PartialsSectionsAboutUsFourthSection />
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
    ogImage: 'http://localhost:3000/images/home/hero.png', // change this to your og:image
    ogUrl: 'http://localhost:3000/', // change this to your og:url
    //twitter tags
    twitterTitle: 'IndeZone - Home', // change this to your twitter:title
    twitterDescription: 'IndeZone - Home', // change this to your twitter:description
    twitterImage: 'http://localhost:3000/images/home/hero.png', // change this to your twitter:image
    twitterUrl: 'http://localhost:3000', // change this to your twitter:url
})

</script>