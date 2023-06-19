<template>
  <div class="relative" id="lang">
    <div class="cursor-pointer  rounded-md overflow-hidden" @click="openLang">
      <img class="  object-cover w-7 h-6 " v-if="!loading" :src="getLang.flag" alt="" />
    </div>
    <div v-if="show" class="absolute z-40 right-0 top-10 py-2 rounded-lg bg-white shadow">
      <div
        @click="setLang(lang)"
        class="flex pl-5 pr-10 rtl:pr-5 py-1 items-center space-x-2 cursor-pointer hover:bg-gray-300"
        v-for="(lang, index, key) in langs"
        :key="key"
      >
        <img :src="lang.flag" :alt="lang.name" class="w-5 h-5" />
        <span class="text-black text-base font-normal rtl:px-2">{{ lang.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>

const { locale, setLocale } = useI18n();
const currentLang = ref(locale.value)
const loading = ref(false);
const show = ref(false);
const langs = ref([
  {
    code: "en",
    flag: "/images/flags/en.svg",
    name: "English",
  },
  {
    code: "de",
    flag: "/images/flags/de.svg",
    name: "German",
  },
]);

const openLang = () => {
  show.value = !show.value;
};

const setLang = (lang) => {
  currentLang.value = lang.code;
  setLocale(lang.code);
  show.value = false;
  localStorage.setItem("lang", lang.code);
  //if code is fa then set dir to rtl
    if (lang.code === "fa") {
        document.querySelector("html").setAttribute("dir", "rtl");
    } else {
        document.querySelector("html").setAttribute("dir", "ltr");
    }
};

const getLang = computed(() => {
  return langs.value.find((lang) => lang.code === currentLang.value);
});

onMounted(() => {
  const lang = localStorage.getItem("lang");
  loading.value = true;
  if (lang) {
    setLocale(lang);
    currentLang.value = lang;
  }
  setTimeout(() => {
      loading.value = false;
    }, 100);

  //when click outside close lang
  document.addEventListener("click", (e) => {
    if (!document.getElementById("lang").contains(e.target)) {
      show.value = false;
    }
  });
});
</script>